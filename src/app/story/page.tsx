"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { TechnicalHeading } from "@/components/core/TechnicalHeading";

export default function StoryPage() {
    const [letterOpen, setLetterOpen] = useState(true);

    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Architectural Grid Background */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="relative pt-48 pb-20 overflow-hidden z-10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        {/* Copy Side */}
                        <div className="lg:col-span-7 order-2 lg:order-1">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-6 block"
                            >
                                The Origin
                            </motion.span>
                            <div className="mb-10">
                                <TechnicalHeading
                                    text="It started"
                                    className="text-6xl md:text-7xl lg:text-[5.5rem]"
                                    delay={0.1}
                                />
                                <div className="flex items-baseline gap-4 flex-wrap">
                                    <TechnicalHeading
                                        text="with a"
                                        className="text-6xl md:text-7xl lg:text-[5.5rem]"
                                        delay={0.4}
                                    />
                                    <motion.span
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 1 }}
                                        className="text-brand-accent font-serif italic font-normal normal-case tracking-normal text-6xl md:text-7xl lg:text-[5.5rem]"
                                    >
                                        mother.
                                    </motion.span>
                                </div>
                            </div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl md:text-2xl text-brand-white/60 font-medium leading-relaxed max-w-xl border-l border-brand-accent/30 pl-8"
                            >
                                Greg Polk spent two decades engineering systems for IBM. But his most important project was ensuring his mother could age with dignity in the home she loved.
                            </motion.p>
                        </div>

                        {/* Founder Portrait */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="lg:col-span-5 order-1 lg:order-2 relative aspect-[3/4] overflow-hidden border border-white/10 shadow-2xl group"
                        >
                            <Image
                                src="/founder-greg-polk.png"
                                alt="Greg Polk — Founder, Polk Systems"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-[2000ms]"
                                priority
                            />
                            {/* Subtle Grade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                            <div className="absolute bottom-8 left-8">
                                <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Founder</span>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white">Greg Polk</h3>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* The Mission / Letter Section */}
            <section className="py-32 relative z-10 border-t border-white/5">
                <Container className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-20 leading-[1.1]">
                            Engineering for <br />
                            <span className="text-brand-accent font-serif italic font-normal normal-case tracking-normal">Dignity.</span>
                        </h2>

                        <div className="bg-white/5 border border-white/10 p-10 md:p-16 backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-accent opacity-50" />

                            <div className="space-y-8 text-lg md:text-xl text-brand-white/80 font-medium leading-relaxed">
                                <p>
                                    <span className="text-brand-accent font-black uppercase tracking-widest text-[10px] block mb-4">Subject: The Standard</span>
                                    I founded Polk Systems with a single client in mind: <span className="text-white">my mother.</span>
                                </p>
                                <p>
                                    I wanted to give her the ability to age in place comfortably, but I refused to compromise her dignity. We skipped the invasive "Big Brother" cameras and built a system that learns the home's heartbeat. It recognizes healthy patterns and notifies loved ones only when those patterns are broken.
                                </p>
                                <p>
                                    Most importantly, I engineered this system to be <span className="text-white">independent of the internet.</span> It runs locally, meaning it works even when the Wi-Fi is down. Your data stays strictly within your walls. You own your history, and you can access it instantly—no delays, no cloud subscriptions, no privacy risks.
                                </p>
                                <p className="text-white pt-4">
                                    This is the standard I set for my family. It is the standard I bring to yours.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-6 border-t border-white/10 pt-12">
                                <div className="relative w-16 h-16 border border-white/20 overflow-hidden">
                                    <Image
                                        src="/founder-greg-polk.png"
                                        alt="Signature"
                                        fill
                                        className="object-cover grayscale"
                                    />
                                </div>
                                <div>
                                    <div className="text-sm font-black uppercase tracking-widest text-white">Greg Polk</div>
                                    <div className="text-[10px] font-black uppercase tracking-wider text-brand-white/40 mt-2">Filesystem Architect / Founder</div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-32 relative z-10 border-t border-white/5">
                <Container className="text-center">
                    <Link
                        href="/contact"
                        className="inline-flex flex-col items-center group cursor-pointer"
                    >
                        <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8">Ready to begin?</span>
                        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white group-hover:text-brand-accent transition-colors duration-500">
                            Build Your <br />Sanctuary.
                        </h2>
                        <div className="mt-12 bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-widest group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                            Start Project ↘
                        </div>
                    </Link>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

