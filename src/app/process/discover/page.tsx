"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DiscoverPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <main className="pt-48 pb-32 relative z-10">
                <Container>
                    <div className="mb-24">
                        <Breadcrumb />
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                            Discover.
                        </h1>
                        <p className="text-2xl md:text-3xl text-brand-white/60 font-medium max-w-4xl leading-relaxed border-l border-brand-accent/30 pl-8">
                            A smart home shouldn't be guessed. <span className="text-brand-white">It should be measured.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/10 pt-16">
                        <div className="md:col-span-4">
                            <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-4 block">Phase One</span>
                            <p className="text-lg text-white/40 leading-relaxed font-medium">
                                We begin with a comprehensive audit of your digital and physical environment. We map your lifestyle patterns, analyze your electrical infrastructure, and identify potential privacy vulnerabilities.
                            </p>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Lifestyle Mapping</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">We interview you to understand how you actually live, not how a template says you should.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">RF Spectrum Analysis</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">We scan your home's radio frequencies to ensure your new local network will be interference-free.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Privacy Audit</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">We identify existing IoT devices that are leaking data and plan their containment or removal.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Infrastructure Scan</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">We verify your wiring and power stability to guarantee 99.99% uptime for the Core.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 flex justify-end items-center border-t border-white/10 pt-16">
                        <Link href="/process/setup" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest hover:text-brand-accent transition-colors">
                            Next: Setup <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
