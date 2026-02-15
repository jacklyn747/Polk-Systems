"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SetupPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <div className="pt-48 pb-32 relative z-10">
                <Container>
                    <div className="mb-24">
                        <Breadcrumb />
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                            Setup.
                        </h1>
                        <p className="text-2xl md:text-3xl text-brand-white/60 font-medium max-w-4xl leading-relaxed border-l border-brand-accent/30 pl-8">
                            We don't just plug it in. <span className="text-brand-white">We forge it.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/10 pt-16">
                        <div className="md:col-span-4">
                            <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-4 block">Phase Two</span>
                            <p className="text-lg text-white/60 leading-relaxed font-medium">
                                Our engineers build your custom "Home Core" off-site. We configure, text, and burn-in every server rack for 48 hours before it ever touches your home.
                            </p>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Core Fabrication</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">Your dedicated server rack is assembled in our lab, ensuring a perfect, dust-free build.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Zero-Trace Install</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">Our white-glove team installs the hardware with surgical precision. No mess. No noise.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Sensor Calibration</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">We fine-tune every motion, light, and climate sensor to match the unique physics of your rooms.</p>
                            </div>
                            <div className="p-10 bg-brand-black hover:bg-white/[0.02] transition-colors group">
                                <h4 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-accent transition-colors">Network Hardening</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">We deploy enterprise-grade firewalls and separate VLANs for your IoT devices.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 flex justify-between items-center border-t border-white/10 pt-16">
                        <Link href="/process/discover" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                            <span className="group-hover:-translate-x-2 transition-transform">←</span> Discover
                        </Link>
                        <Link href="/process/activate" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest hover:text-brand-accent transition-colors">
                            Activate <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    </div>
                </Container>
            </div>

            <Footer />
        </div>
    );
}
