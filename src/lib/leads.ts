"use server";

import { promises as fs } from "fs";
import path from "path";

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
        const leads = await readLeads();
        leads.push(lead);
        await writeLeads(leads);

        // Log for visibility (replace with email notification later)
        console.log(`[LEAD] New lead from ${lead.name} (${lead.email}) via ${lead.source}`);

        return { success: true };
    } catch (err) {
        console.error("[LEAD] Failed to save lead:", err);
        return { success: false, error: "Failed to save. Please try again." };
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
