"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export default function ActivatePage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <main className="pt-48 pb-32 relative z-10">
                <Container>
                    <div className="mb-24">
                        <Breadcrumb />
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                            Activate.
                        </h1>
                        <p className="text-2xl md:text-3xl text-brand-white/60 font-medium max-w-4xl leading-relaxed border-l border-brand-accent/30 pl-8">
                            The moment your home <span className="text-brand-white">wakes up.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/10 pt-16">
                        <div className="md:col-span-4">
                            <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-4 block">Phase Three</span>
                            <p className="text-lg text-white/40 leading-relaxed font-medium">
                                We throw the switch. Your local "Brain" begins processing data instantly, without sending a single byte to the cloud. The system learns the rhythm of your day.
                            </p>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Local Handshake</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">Every device authenticates directly with your Core. No external servers involved.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Encryption Lock</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">We generate unique AES-256 keys for your camera feeds and store them physically on your drive.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Automation Logic</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">Complex scenes (Morning, Away, Night) are tested and verified to trigger instantly.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Voice Isolation</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">Voice assistants are configured to process commands locally where possible or tunneled securely.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 flex justify-between items-center border-t border-white/10 pt-16">
                        <Link href="/process/setup" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                            <span className="group-hover:-translate-x-2 transition-transform">←</span> Setup
                        </Link>
                        <Link href="/process/control" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest hover:text-brand-accent transition-colors">
                            Control <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
