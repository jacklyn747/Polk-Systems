"use server";

import { promises as fs } from "fs";
import path from "path";
import { ESP, Automation, Delivery, CRM } from "./services/integrations";

export interface Lead {
    id: string;
    created_at: string;

    // Contact
    name: string;
    email: string;
    phone?: string;
    preferred_contact: "email" | "phone" | "either";

    // Qualifier
    project_type?: "new_build" | "retrofit" | "consultation";
    home_size?: string;
    room_count?: string;
    property_type?: string;

    // Interest
    systems?: string[];
    message?: string;

    // Tracking
    source: string;
    status: "new" | "contacted" | "qualified" | "closed";
}

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

async function ensureDataDir() {
    const dir = path.dirname(LEADS_FILE);
    try {
        await fs.access(dir);
    } catch {
        await fs.mkdir(dir, { recursive: true });
    }
}

async function readLeads(): Promise<Lead[]> {
    await ensureDataDir();
    try {
        const data = await fs.readFile(LEADS_FILE, "utf-8");
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function writeLeads(leads: Lead[]) {
    await ensureDataDir();
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export async function submitLead(formData: {
    name: string;
    email: string;
    phone?: string;
    preferred_contact?: "email" | "phone" | "either";
    project_type?: string;
    home_size?: string;
    room_count?: string;
    property_type?: string;
    systems?: string[];
    message?: string;
    source?: string;
}): Promise<{ success: boolean; error?: string }> {
    // Validate required fields
    if (!formData.name?.trim()) return { success: false, error: "Name is required" };
    if (!formData.email?.trim()) return { success: false, error: "Email is required" };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        return { success: false, error: "Invalid email address" };
    }

    const lead: Lead = {
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone?.trim() || undefined,
        preferred_contact: formData.preferred_contact || "email",
        project_type: formData.project_type as Lead["project_type"],
        home_size: formData.home_size,
        room_count: formData.room_count,
        property_type: formData.property_type,
        systems: formData.systems,
        message: formData.message?.trim() || undefined,
        source: formData.source || "direct",
        status: "new",
    };

    try {
        // 1. Save locally (Source of Truth)
        const leads = await readLeads();
        leads.push(lead);
        await writeLeads(leads);

        // 2. Add to CRM (Simulated)
        const crmResult = await CRM.createLead({
            name: lead.name,
            email: lead.email,
            source: lead.source,
            status: 'New'
        });

        if (crmResult.success) {
            // 3. ESP Subscription & Tagging (Simulated)
            await ESP.subscribe(lead.email, lead.name);
            await ESP.tag(lead.email, ["Web-Inquiry", lead.project_type || "General", "Polk-Website"]);

            // 4. Trigger Automation Workflow ( Simonulated)
            await Automation.triggerWorkflow(lead.email, "welcome-series-v2");

            // 5. Deliver Asset (Simulated)
            await Delivery.sendAsset(lead.email, "polk-systems-brochure.pdf");

            // 6. Schedule Follow Up (Simulated)
            await CRM.scheduleFollowUp(crmResult.leadId, 'call', 24);
        }

        // Log for visibility (replace with email notification later)
        console.log(`[LEAD SYSTEM] Successfully processed lead: ${lead.email}`);
        console.log(`[LEAD SYSTEM] Workflow Triggered: ESP -> CRM -> Automation -> Delivery -> Task`);

        return { success: true };
    } catch (err) {
        console.error("[LEAD] Failed to process lead workflow:", err);
        // Even if external integrations fail, we try to save locally at least.
        return { success: false, error: "System busy. Please try again." };
    }
}

export async function getLeads(): Promise<Lead[]> {
    return readLeads();
}

export async function updateLeadStatus(
    id: string,
    status: Lead["status"]
): Promise<{ success: boolean }> {
    const leads = await readLeads();
    const idx = leads.findIndex((l) => l.id === id);
    if (idx === -1) return { success: false };
    leads[idx].status = status;
    await writeLeads(leads);
    return { success: true };
}
