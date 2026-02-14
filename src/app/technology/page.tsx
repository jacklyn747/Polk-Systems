"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TechnologyPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-brand-black overflow-x-hidden">
            <Header />

            {/* Soft, Clean Architectural Grid */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <main className="relative z-10 pt-48 pb-20">
                <Container>
                    {/* The Hero Showcase of The Node */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-40">
                        {/* Left Side: Copy */}
                        <div className="lg:col-span-7">
                            <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-6 block">The Star of Polk</span>
                            <h1 className="text-[12vw] lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.85] mb-10">
                                The Polk <br />
                                <span className="font-serif italic font-normal normal-case tracking-normal text-brand-accent">Node.</span>
                            </h1>
                            <p className="text-brand-white/60 text-xl font-medium leading-relaxed max-w-xl mb-12 uppercase italic">
                                Most smart homes live in the cloud. Polk lives in your home. A small, powerful, private computer that replaces external servers.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 border-t border-white/10 pt-16">
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-4">True Sovereignty</h3>
                                    <p className="text-white/40 text-sm font-bold leading-relaxed uppercase">
                                        Your home is your sanctuary. By moving the "brain" of your smart home inside your walls, we remove the middleman. Forever.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-4">No WiFi Dependency</h3>
                                    <p className="text-white/40 text-sm font-bold leading-relaxed uppercase">
                                        Core system functions—security, lighting, climate—work perfectly without an internet connection. WiFi is for streaming, not for your safety.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: The Image */}
                        <div className="lg:col-span-5 relative aspect-square rounded-[60px] overflow-hidden shadow-premium border border-white/5 group bg-brand-dark-grey">
                            <Image
                                src="/the-node-core.jpg"
                                alt="The Polk Node"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
                                priority
                            />
                            {/* Subtle Overlays */}
                            <div className="absolute inset-0 polk-grid-overlay opacity-20 pointer-events-none z-20"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                            <div className="absolute bottom-12 left-12 z-30">
                                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40 mb-2 block">Model P-01</span>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Sovereign Core</h2>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                        <div className="bg-brand-dark-grey p-16 rounded-[40px] border border-white/5 shadow-premium">
                            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 block opacity-60">The Status Quo</span>
                            <h3 className="text-4xl font-black tracking-tighter uppercase mb-10">The Cloud Trap.</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-center line-through opacity-20 text-white font-black uppercase tracking-tight text-sm">Video Feeds to External Servers</li>
                                <li className="flex gap-4 items-center line-through opacity-20 text-white font-black uppercase tracking-tight text-sm">Subscription-based dependency</li>
                                <li className="flex gap-4 items-center line-through opacity-20 text-white font-black uppercase tracking-tight text-sm">System dies with WiFi outages</li>
                                <li className="flex gap-4 items-center line-through opacity-20 text-white font-black uppercase tracking-tight text-sm">Data Harvesting & Corporate Leaks</li>
                            </ul>
                        </div>
                        <div className="bg-brand-accent p-16 rounded-[40px] shadow-2xl text-black">
                            <span className="text-black text-[10px] font-black uppercase tracking-[0.4em] mb-12 block opacity-60">The Polk Standard</span>
                            <h3 className="text-4xl font-black tracking-tighter uppercase mb-10 text-brand-black">Local Control.</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-center text-black font-black uppercase tracking-tight text-sm">✓ 100% On-Device Processing</li>
                                <li className="flex gap-4 items-center text-black font-black uppercase tracking-tight text-sm">✓ One-Time Buy. No monthly rent.</li>
                                <li className="flex gap-4 items-center text-black font-black uppercase tracking-tight text-sm">✓ Air-Gapped Security Mesh</li>
                                <li className="flex gap-4 items-center text-black font-black uppercase tracking-tight text-sm">✓ True Data Sovereignty</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Highlight Card */}
                    <div className="bg-white/5 border border-white/10 rounded-[60px] p-20 relative overflow-hidden group shadow-premium">
                        <div className="absolute inset-0 polk-grid-overlay opacity-5 pointer-events-none"></div>
                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">AES-256 <br /> <span className="text-brand-accent">Sovereignty.</span></h2>
                            <p className="text-white/40 text-lg font-bold leading-relaxed uppercase mb-12">
                                Your NUC node uses military-grade encryption at rest and in transit. We don't have the keys. Even if we were subpoenaed, your data remains yours and yours alone.
                            </p>
                            <div className="flex flex-wrap gap-12">
                                <div>
                                    <div className="text-4xl font-black text-white/20 tracking-tighter mb-2">0</div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Cloud Storage</span>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white/20 tracking-tighter mb-2">LOCAL</div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Encrypted Mesh</span>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white/20 tracking-tighter mb-2">OFF</div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">WiFi Dependency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />

            {/* Background Glow */}
            <div className="fixed bottom-0 left-0 w-full h-[60vh] bg-gradient-to-t from-brand-accent/5 to-transparent pointer-events-none opacity-20 blur-[120px]" />
        </div>
    );
}
