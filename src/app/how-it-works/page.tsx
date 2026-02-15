"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorksPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Architectural Grid Background */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden z-10">
                <Container>
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-6 block"
                        >
                            System Architecture
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] mb-12"
                        >
                            The Silent <br />
                            <span className="text-brand-white/20">Orchestra.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed max-w-2xl border-l border-brand-accent/30 pl-8"
                        >
                            Most smart homes are a cacophony of apps, beeping sensors, and cloud delays. A Polk System is different. It is a single, cohesive instrument tuned to the rhythm of your life.
                        </motion.p>
                    </div>
                </Container>
            </section>

            {/* The Core Difference */}
            <section className="py-24 relative z-10 border-t border-white/10 bg-brand-black/50 backdrop-blur-sm">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                                Not Gadgets. <br />
                                <span className="text-brand-accent">Infrastructure.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-white/60 font-medium leading-relaxed">
                                <p>
                                    Buying a dozen "smart" lightbulbs doesn't make a smart home. It makes a maintenance headache.
                                </p>
                                <p>
                                    We don't install gadgets. We install building-grade infrastructure. Hardwired control panels, enterprise networking, and commercial sensors that disappear into the architecture.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-square border border-white/10 p-12 overflow-hidden flex items-center justify-center">
                            {/* Abstract 'Infrastructure' Visual - using CSS shapes and gradients to represent structure */}
                            <div className="absolute inset-0 polk-architectural-grid opacity-20" />
                            <div className="absolute w-[200%] h-[200%] border border-brand-accent/10 rotate-45 animate-[spin_60s_linear_infinite]" />
                            <div className="absolute w-[150%] h-[150%] border border-white/5 -rotate-45 animate-[spin_40s_linear_infinite_reverse]" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 bg-brand-accent/10 blur-[100px]" />
                            </div>

                            {/* Floating Technical Stats representing stability */}
                            <div className="relative z-10 grid grid-cols-2 gap-px bg-white/10 border border-white/10 w-full">
                                <div className="bg-brand-black/80 p-6 flex flex-col gap-2">
                                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-accent">Status_01</span>
                                    <span className="text-xl font-black uppercase text-white tracking-widest">STABLE</span>
                                </div>
                                <div className="bg-brand-black/80 p-6 flex flex-col gap-2">
                                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-accent">Status_02</span>
                                    <span className="text-xl font-black uppercase text-white tracking-widest">PRIVATE</span>
                                </div>
                                <div className="bg-brand-black/80 p-6 flex flex-col gap-2">
                                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-accent">Status_03</span>
                                    <span className="text-xl font-black uppercase text-white tracking-widest">FAST</span>
                                </div>
                                <div className="bg-brand-black/80 p-6 flex flex-col gap-2">
                                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-accent">Status_04</span>
                                    <span className="text-xl font-black uppercase text-white tracking-widest">LOCAL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* The 3 Pillars */}
            <section className="py-32 relative z-10 border-t border-white/10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {/* Pillar 1 */}
                        <div className="group p-12 bg-brand-black hover:bg-white/[0.03] transition-colors duration-500">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-12 block group-hover:text-brand-accent transition-colors">01. The Local Brain</span>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 text-brand-white leading-none">Zero Cloud.<br />Zero Lag.</h3>
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose">
                                Your home runs on a dedicated, physical server inside your utility closet. No internet required for daily operation. When you press a switch, the lights turn on instantly—even if the WiFi is down.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="group p-12 bg-brand-black hover:bg-white/[0.03] transition-colors duration-500">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-12 block group-hover:text-brand-accent transition-colors">02. The Unified Logic</span>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 text-brand-white leading-none">One App.<br />Not Twenty.</h3>
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose">
                                We integrate everything—lighting, climate, security, audio—into a single, elegant dashboard. No more "app fatigue." Just one simple interface that anyone in the family can use.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="group p-12 bg-brand-black hover:bg-white/[0.03] transition-colors duration-500">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-12 block group-hover:text-brand-accent transition-colors">03. The Sovereign Data</span>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 text-brand-white leading-none">Your Business.<br />Stay Yours.</h3>
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose">
                                Traditional smart cameras stream video to corporate servers. Ours record to your local hard drive. No monthly fees, no data mining, and no creepy privacy violations.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-right">
                        <Link
                            href="/technology"
                            className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/60 hover:text-brand-accent transition-colors group"
                        >
                            Deep Dive Into Our Technology <span className="group-hover:translate-x-2 transition-transform duration-500">↘</span>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Deployment Process */}
            <section className="py-32 bg-black/40 relative z-10 border-t border-white/10">
                <Container>
                    <h2 className="text-left text-4xl md:text-7xl font-black uppercase tracking-tighter mb-24 leading-none">
                        The Deployment <br /><span className="text-white/20">Protocol.</span>
                    </h2>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                            {[
                                { id: "01", title: "Discovery & Design", desc: "We analyze your floorplans and lifestyle needs to engineer a custom hardware map." },
                                { id: "02", title: "Infrastructure Install", desc: "Our licensed technicians run structured cabling and install the local server core." },
                                { id: "03", title: "Calibration", desc: "We program the automation logic, lighting scenes, and security perimeters." },
                                { id: "04", title: "Handover", desc: "We train you on the system and hand over the \"Digital Keys\"—giving you full administrative ownership." }
                            ].map((step) => (
                                <div key={step.id} className="p-10 bg-brand-black flex flex-col group hover:bg-white/5 transition-colors">
                                    <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-16 block">Protocol_{step.id}</span>
                                    <h4 className="text-2xl font-black uppercase tracking-tight mb-4 mt-auto">{step.title}</h4>
                                    <p className="text-white/30 text-[10px] font-black uppercase tracking-widest leading-loose">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-32 relative z-10 border-t border-white/10">
                <Container className="text-center">
                    <h2 className="text-6xl md:text-[7vw] font-black uppercase tracking-tighter text-white mb-16 leading-[0.8]">
                        Ready to orchestrate<br />your home?
                    </h2>
                    <Link
                        href="/get-started"
                        className="inline-block bg-brand-accent text-brand-black px-16 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-premium"
                    >
                        Begin the Process ↘
                    </Link>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

