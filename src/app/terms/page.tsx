import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white">
            <Container className="pt-48 pb-32">
                <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Terms of Protocol</h1>
                <div className="max-w-3xl space-y-8 text-white/60 leading-relaxed font-light">
                    <p>
                        By activating a Polk Systems Node, you are entering into a Sovereign Data Agreement.
                        We do not own your data. We do not have access to your keys.
                    </p>
                    <h2 className="text-2xl font-bold text-white uppercase tracking-widest mt-12">1. Local Autonomy</h2>
                    <p>
                        You are responsible for the physical security of your Cortex Node.
                        Loss of the physical hardware may result in the loss of encrypted data if local backups are not maintained.
                    </p>
                    <h2 className="text-2xl font-bold text-white uppercase tracking-widest mt-12">2. Zero-Access Guarantee</h2>
                    <p>
                        Polk Systems cannot reset your passwords or recover your video feeds.
                        Encryption happens at the edge, on your hardware.
                    </p>
                </div>
            </Container>
            <Footer />
        </div>
    );
}
