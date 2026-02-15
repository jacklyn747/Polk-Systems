import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function ControlPage() {
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
                            Control.
                        </h1>
                        <p className="text-2xl md:text-3xl text-brand-white/60 font-medium max-w-4xl leading-relaxed">
                            You hold the keys. <span className="text-brand-white">Literally.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/10 pt-16">
                        <div className="md:col-span-4">
                            <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent mb-4">Phase Four</h3>
                            <p className="text-lg text-white/80 leading-relaxed">
                                This is the final handoff. We give you full administrative access to your system. We do not keep backdoors. It is your sovereign territory.
                            </p>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Master Key Handoff</h4>
                                <p className="text-sm text-white/50 leading-relaxed">We physically transfer the admin passwords and encryption keys to you on an encrypted drive.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">System Training</h4>
                                <p className="text-sm text-white/50 leading-relaxed">A 2-hour session teaching you how to customize, monitor, and override your smart home.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Remote Access Setup</h4>
                                <p className="text-sm text-white/50 leading-relaxed">We configure a secure VPN (WireGuard) so you can access your home from anywhere, privately.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Stewardship Plan</h4>
                                <p className="text-sm text-white/50 leading-relaxed">We begin our quarterly update cycle—monitoring system health without ever seeing your data.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 flex justify-between items-center bg-brand-white/5 p-12 rounded-[40px] border border-white/10">
                        <Link href="/process/activate" className="group flex items-center gap-4 text-sm font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                            <span className="group-hover:-translate-x-2 transition-transform">←</span> Previous: Activate
                        </Link>

                        <div className="text-right">
                            <div className="text-xs font-black uppercase tracking-widest opacity-50 mb-4">Ready to begin?</div>
                            <Link href="/get-started" className="inline-block bg-brand-accent text-black px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-premium">
                                Start Your Journey ↘
                            </Link>
                        </div>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
