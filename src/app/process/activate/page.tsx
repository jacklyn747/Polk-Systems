import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function ActivatePage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">
            <Header />

            <main className="pt-48 pb-32">
                <Container>
                    <div className="mb-24">
                        <Link href="/#the-process" className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-8 inline-block hover:text-white transition-colors">
                            ← Back to Process
                        </Link>
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                            Activate.
                        </h1>
                        <p className="text-2xl md:text-3xl text-brand-white/60 font-medium max-w-4xl leading-relaxed">
                            The moment your home <span className="text-brand-white">wakes up.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/10 pt-16">
                        <div className="md:col-span-4">
                            <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent mb-4">Phase Three</h3>
                            <p className="text-lg text-white/80 leading-relaxed">
                                We throw the switch. Your local "Brain" begins processing data instantly, without sending a single byte to the cloud. The system learns the rhythm of your day.
                            </p>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Local Handshake</h4>
                                <p className="text-sm text-white/50 leading-relaxed">Every device authenticates directly with your Core. No external servers involved.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Encryption Lock</h4>
                                <p className="text-sm text-white/50 leading-relaxed">We generate unique AES-256 keys for your camera feeds and store them physically on your drive.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Automation Logic</h4>
                                <p className="text-sm text-white/50 leading-relaxed">Complex scenes (Morning, Away, Night) are tested and verified to trigger instantly.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Voice Isolation</h4>
                                <p className="text-sm text-white/50 leading-relaxed">Voice assistants are configured to process commands locally where possible or tunneled securely.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 flex justify-between">
                        <Link href="/process/setup" className="group flex items-center gap-4 text-sm font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                            <span className="group-hover:-translate-x-2 transition-transform">←</span> Previous: Setup
                        </Link>
                        <Link href="/process/control" className="group flex items-center gap-4 text-xl font-black uppercase tracking-widest hover:text-brand-accent transition-colors">
                            Next: Control <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
