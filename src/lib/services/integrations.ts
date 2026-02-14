export class ESP {
    static async subscribe(email: string, name: string) {
        console.log(`[ESP] Subscribing ${email} (${name}) to list...`);
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API
        return { success: true, id: `sub_${Math.random().toString(36).substring(7)}` };
    }

    static async tag(email: string, tags: string[]) {
        console.log(`[ESP] Tagging ${email} with: ${tags.join(', ')}`);
        await new Promise(resolve => setTimeout(resolve, 400));
        return { success: true };
    }
}

export class Automation {
    static async triggerWorkflow(email: string, workflowId: string) {
        console.log(`[Automation] Triggering workflow ${workflowId} for ${email}`);
        await new Promise(resolve => setTimeout(resolve, 600));
        return { success: true, runId: `run_${Math.random().toString(36).substring(7)}` };
    }
}

export class Delivery {
    static async sendAsset(email: string, assetType: string) {
        console.log(`[Delivery] Sending ${assetType} to ${email}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: true, trackingId: `trk_${Math.random().toString(36).substring(7)}` };
    }
}

export class CRM {
    static async createLead(data: any) {
        console.log(`[CRM] Creating lead record...`, data);
        await new Promise(resolve => setTimeout(resolve, 500));
        return { success: true, leadId: `lead_${Math.random().toString(36).substring(7)}` };
    }

    static async scheduleFollowUp(leadId: string, type: 'call' | 'email', delayHours: number) {
        console.log(`[CRM] Scheduling ${type} follow-up for lead ${leadId} in ${delayHours} hours`);
        return { success: true, taskId: `task_${Math.random().toString(36).substring(7)}` };
    }
}
