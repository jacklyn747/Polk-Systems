"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ControlPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <div className="pt-48 pb-32 relative z-10">
                <Container>
                    <div className="mb-24">
                        <Breadcrumb />
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                            Control.
                        </h1>
                        <p className="text-2xl md:text-3xl text-brand-white/60 font-medium max-w-4xl leading-relaxed border-l border-brand-accent/30 pl-8">
                            You hold the keys. <span className="text-brand-white">Literally.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/10 pt-16">
                        <div className="md:col-span-4">
                            <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-4 block">Phase Four</span>
                            <p className="text-lg text-white/60 leading-relaxed font-medium">
                                This is the final handoff. We give you full administrative access to your system. We do not keep backdoors. It is your sovereign territory.
                            </p>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Master Key Handoff</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">We physically transfer the admin passwords and encryption keys to you on an encrypted drive.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">System Training</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">A 2-hour session teaching you how to customize, monitor, and override your smart home.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Remote Access Setup</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">We configure a secure VPN (WireGuard) so you can access your home from anywhere, privately.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Stewardship Plan</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">We begin our quarterly update cycle—monitoring system health without ever seeing your data.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                        <div className="p-12 bg-white/5 flex flex-col justify-center">
                            <Link href="/process/activate" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                                <span className="group-hover:-translate-x-2 transition-transform">←</span> Return to Activate
                            </Link>
                        </div>

                        <div className="p-12 bg-brand-black flex flex-col items-end text-right">
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent mb-6">Ready to begin?</div>
                            <Link href="/get-started" className="inline-block bg-brand-accent text-brand-black px-16 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-premium">
                                Initiate Assessment ↘
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

            <Footer />
        </div>
    );
}
