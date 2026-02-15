import { SovereigntyAudit } from "@/components/core/SovereigntyAudit";
import { Footer } from "@/components/layout/Footer";

export default function AuditPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            <div className="pt-20">
                <SovereigntyAudit />
            </div>
            <Footer />
        </div>
    );
}
