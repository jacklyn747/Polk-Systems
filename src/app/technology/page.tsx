"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { TechnicalHeading } from "@/components/core/TechnicalHeading";

export default function TechnologyPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-brand-black overflow-x-hidden">

            {/* Soft, Clean Architectural Grid */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <div className="relative z-10 pt-48 pb-32">
                <Container>
                    {/* The Hero Showcase of The Node */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-40">
                        {/* Left Side: Copy */}
                        <div className="lg:col-span-7">
                            <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-6 block">The Star of Polk</span>
                            <div className="mb-10">
                                <TechnicalHeading
                                    text="The Polk"
                                    className="text-6xl md:text-[8vw]"
                                    delay={0.1}
                                />
                                <TechnicalHeading
                                    text="Node_"
                                    className="text-6xl md:text-[8vw] text-brand-white/20"
                                    delay={0.4}
                                />
                            </div>
                            <p className="border-l border-brand-accent/30 pl-8 text-brand-white/60 text-xl md:text-2xl font-medium leading-relaxed max-w-xl mb-12">
                                Most smart homes live in the cloud. Polk lives in your home. A dedicated, powerful server that replaces external dependencies.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 border-t border-white/10 pt-16">
                                <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-6">True Sovereignty</h3>
                                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose">
                                        Your home is your sanctuary. By moving the "brain" of your smart home inside your walls, we remove the middleman. Forever.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-6">No WiFi Dependency</h3>
                                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose">
                                        Core system functions—security, lighting, climate—work perfectly without an internet connection. WiFi is for streaming, not for your safety.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: The Image */}
                        <div className="lg:col-span-5 relative aspect-square overflow-hidden shadow-premium border border-white/10 group bg-brand-black">
                            <Image
                                src="/the-node-core.jpg"
                                alt="The Polk Node"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
                                priority
                            />
                            {/* Subtle Overlays */}
                            <div className="absolute inset-0 polk-architectural-grid opacity-20 pointer-events-none z-20"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                            <div className="absolute bottom-12 left-12 z-30">
                                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60 mb-2 block">Model P-01</span>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Sovereign Core</h2>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-40 shadow-premium">
                        <div className="bg-brand-black p-16 group hover:bg-white/[0.02] transition-colors">
                            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 block opacity-60">Status_Quo</span>
                            <h3 className="text-4xl font-black tracking-tighter uppercase mb-10">The Cloud Trap.</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-center line-through opacity-20 text-white font-black uppercase tracking-tight text-xs">Video Feeds to External Servers</li>
                                <li className="flex gap-4 items-center line-through opacity-20 text-white font-black uppercase tracking-tight text-xs">Subscription-based dependency</li>
                                <li className="flex gap-4 items-center line-through opacity-20 text-white font-black uppercase tracking-tight text-xs">System dies with WiFi outages</li>
                                <li className="flex gap-4 items-center line-through opacity-20 text-white font-black uppercase tracking-tight text-xs">Data Harvesting & Corporate Leaks</li>
                            </ul>
                        </div>
                        <div className="bg-brand-black p-16 group border-l border-white/10">
                            <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-12 block opacity-60">Polk_Standard</span>
                            <h3 className="text-4xl font-black tracking-tighter uppercase mb-10 text-white/60 group-hover:text-white transition-colors">Local Control_</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-center text-brand-accent font-black uppercase tracking-widest text-[10px]">✓ 100% On-Device Processing</li>
                                <li className="flex gap-4 items-center text-brand-accent font-black uppercase tracking-widest text-[10px]">✓ One-Time Buy. No monthly rent.</li>
                                <li className="flex gap-4 items-center text-brand-accent font-black uppercase tracking-widest text-[10px]">✓ Air-Gapped Security Mesh</li>
                                <li className="flex gap-4 items-center text-brand-accent font-black uppercase tracking-widest text-[10px]">✓ True Data Sovereignty</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Highlight Card */}
                    <div className="bg-brand-black border border-white/10 p-12 md:p-20 relative overflow-hidden group shadow-premium">
                        <div className="absolute inset-0 polk-architectural-grid opacity-10 pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-accent opacity-50 transition-opacity group-hover:opacity-100" />

                        <div className="relative z-10 max-w-4xl">
                            <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">Encryption Protocol</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">AES-256 <br /> <span className="text-white/20">Sovereignty.</span></h2>
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose max-w-lg mb-12">
                                Your node uses military-grade encryption at rest and in transit. We don't have the keys. Even if we were subpoenaed, your data remains yours and yours alone.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                                <div>
                                    <div className="text-4xl font-black text-white group-hover:text-brand-accent transition-colors tracking-tighter mb-2">0</div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">External_Cloud_Storage</span>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white group-hover:text-brand-accent transition-colors tracking-tighter mb-2">LOCAL</div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Encrypted_Mesh_Node</span>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white group-hover:text-brand-accent transition-colors tracking-tighter mb-2">OFF</div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">WiFi_Dependency_V4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}
