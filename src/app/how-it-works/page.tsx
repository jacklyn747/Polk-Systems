"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorksPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">
            <Header />

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
                            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12"
                        >
                            The Silent <br />
                            <span className="text-brand-white/50">Orchestra.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed max-w-2xl border-l-2 border-brand-accent pl-8"
                        >
                            Most smart homes are a cacophony of apps, beeping sensors, and cloud delays. A Polk System is different. It is a single, cohesive instrument tuned to the rhythm of your life.
                        </motion.p>
                    </div>
                </Container>
            </section>

            {/* The Core Difference */}
            <section className="py-24 relative z-10 border-t border-white/5 bg-brand-black/50 backdrop-blur-sm">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-black uppercase tracking-tight mb-8">
                                Not Gadgets. <br />
                                <span className="text-brand-accent">Infrastructure.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-brand-text-muted font-light leading-relaxed">
                                <p>
                                    Buying a dozen "smart" lightbulbs doesn't make a smart home. It makes a maintenance headache.
                                </p>
                                <p>
                                    We don't install gadgets. We install building-grade infrastructure. Hardwired control panels, enterprise networking, and commercial sensors that disappear into the architecture.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-square">
                            {/* Abstract 'Infrastructure' Visual - using CSS shapes and gradients to represent structure */}
                            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-12 border border-brand-accent/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                            <div className="absolute inset-24 border border-white/30 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-brand-accent rounded-full blur-[80px] opacity-50" />
                            </div>

                            {/* Floating Icons representing stability */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-12 grid grid-cols-2 gap-4 opacity-80">
                                <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                    <span className="text-xs font-black uppercase tracking-widest text-brand-white">Stable</span>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md translate-y-8">
                                    <span className="text-xs font-black uppercase tracking-widest text-brand-white">Private</span>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md -translate-y-8">
                                    <span className="text-xs font-black uppercase tracking-widest text-brand-white">Fast</span>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                    <span className="text-xs font-black uppercase tracking-widest text-brand-white">Local</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* The 3 Pillars */}
            <section className="py-32 relative z-10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="group border-t border-white/20 pt-8 hover:border-brand-accent transition-colors duration-500">
                            <span className="text-xs font-black uppercase tracking-widest text-brand-white/40 mb-4 block group-hover:text-brand-accent">01. The Local Brain</span>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-brand-white">Zero Cloud.<br />Zero Lag.</h3>
                            <p className="text-brand-text-muted text-sm leading-relaxed">
                                Your home runs on a dedicated, physical server inside your utility closet. No internet required for daily operation. When you press a switch, the lights turn on instantly—even if the WiFi is down.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="group border-t border-white/20 pt-8 hover:border-brand-accent transition-colors duration-500">
                            <span className="text-xs font-black uppercase tracking-widest text-brand-white/40 mb-4 block group-hover:text-brand-accent">02. The Unified Logic</span>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-brand-white">One App.<br />Not Twenty.</h3>
                            <p className="text-brand-text-muted text-sm leading-relaxed">
                                We integrate everything—lighting, climate, security, audio—into a single, elegant dashboard. No more "app fatigue." Just one simple interface that anyone in the family can use.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="group border-t border-white/20 pt-8 hover:border-brand-accent transition-colors duration-500">
                            <span className="text-xs font-black uppercase tracking-widest text-brand-white/40 mb-4 block group-hover:text-brand-accent">03. The Sovereign Data</span>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-brand-white">Your Business.<br />Stay Yours.</h3>
                            <p className="text-brand-text-muted text-sm leading-relaxed">
                                Traditional smart cameras stream video to corporate servers. Ours record to your local hard drive. No monthly fees, no data mining, and no creepy privacy violations.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Deployment Process */}
            <section className="py-32 bg-brand-dark-grey relative z-10">
                <Container>
                    <h2 className="text-center text-4xl md:text-5xl font-black uppercase tracking-tighter mb-20">
                        The Deployment Protocol
                    </h2>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-24">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="flex-1 text-right order-2 md:order-1">
                                    <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Discovery & Design</h4>
                                    <p className="text-brand-text-muted text-sm">We analyze your floorplans and lifestyle needs to engineer a custom hardware map.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-brand-accent border-4 border-brand-black z-10 order-1 md:order-2 shrink-0" />
                                <div className="flex-1 order-3 md:order-3 text-brand-white/20 font-black text-6xl select-none">01</div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="flex-1 text-right md:text-left order-2 md:order-3">
                                    <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Infrastructure Install</h4>
                                    <p className="text-brand-text-muted text-sm">Our licensed technicians run structured cabling and install the local server core.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-brand-white border-4 border-brand-black z-10 order-1 md:order-2 shrink-0" />
                                <div className="flex-1 text-right order-3 md:order-1 text-brand-white/20 font-black text-6xl select-none">02</div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="flex-1 text-right order-2 md:order-1">
                                    <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Calibration</h4>
                                    <p className="text-brand-text-muted text-sm">We program the automation logic, lighting scenes, and security perimeters.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-brand-white border-4 border-brand-black z-10 order-1 md:order-2 shrink-0" />
                                <div className="flex-1 order-3 md:order-3 text-brand-white/20 font-black text-6xl select-none">03</div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="flex-1 text-right md:text-left order-2 md:order-3">
                                    <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Handover</h4>
                                    <p className="text-brand-text-muted text-sm">We train you on the system and hand over the "Digital Keys"—giving you full administrative ownership.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-brand-accent border-4 border-brand-black z-10 order-1 md:order-2 shrink-0 shadow-[0_0_20px_rgba(255,145,77,0.5)]" />
                                <div className="flex-1 text-right order-3 md:order-1 text-brand-white/20 font-black text-6xl select-none">04</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-32 relative z-10">
                <Container className="text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-10">
                        Ready to orchestrate<br />your home?
                    </h2>
                    <Link
                        href="/get-started"
                        className="inline-block bg-brand-accent text-brand-black px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:scale-105 hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(255,145,77,0.3)]"
                    >
                        Begin the Process
                    </Link>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
