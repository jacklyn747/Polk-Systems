"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check, X, Shield, Cpu, RefreshCw, Smartphone } from "lucide-react";
import Link from "next/link";
import { TechnicalHeading } from "@/components/core/TechnicalHeading";

const COMPARISON_POINTS = [
    {
        feature: "Data Privacy",
        standard: "Data mined & sold to advertisers",
        polk: "Local storage. Zero tracking.",
        icon: Shield
    },
    {
        feature: "Connectivity",
        standard: "Fails when WiFi goes down",
        polk: "Works 100% offline via local LAN",
        icon: Cpu
    },
    {
        feature: "Maintenance",
        standard: "You restart routers weekly",
        polk: "We monitor & patch remotely",
        icon: RefreshCw
    },
    {
        feature: "Control",
        standard: "Fragmented (10+ Apps)",
        polk: "Unified (1 App + Physical Controls)",
        icon: Smartphone
    }
];

export default function WhyWereDifferentPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden z-10">
                <Container>
                    <div className="max-w-5xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-6 block"
                        >
                            The Polk Standard
                        </motion.span>
                        <div className="mb-12">
                            <TechnicalHeading
                                text="We built the"
                                className="text-6xl md:text-9xl"
                                delay={0.1}
                            />
                            <TechnicalHeading
                                text="Anti-Smart Home."
                                className="text-6xl md:text-9xl text-brand-white/50"
                                delay={0.4}
                            />
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed max-w-2xl border-l border-brand-accent/30 pl-8"
                        >
                            The modern "smart home" is broken. It's invasive, fragile, and annoying. We rejected industry standards to build a system that respects your time, your privacy, and your intelligence.
                        </motion.p>
                    </div>
                </Container>
            </section>

            {/* The Comparison */}
            <section className="py-24 relative z-10 bg-white/5 border-y border-white/5 backdrop-blur-sm">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                        {/* Title Col */}
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-black uppercase tracking-tight mb-6 leading-none">
                                The Industry<br />
                                <span className="text-white/20 italic font-serif normal-case tracking-normal">vs.</span><br />
                                <span className="text-brand-accent">Polk Systems</span>
                            </h2>
                            <p className="text-white/30 text-[10px] font-black uppercase tracking-widest leading-loose max-w-xs">
                                We don't compete on features. We compete on philosophy. Here is why discerning homeowners choose Polk.
                            </p>
                        </div>

                        {/* Comparison Grid */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                            {COMPARISON_POINTS.map((point, idx) => (
                                <motion.div
                                    key={point.feature}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="polk-hover-line bg-brand-black p-12 relative overflow-hidden group hover:bg-white/5 transition-colors"
                                >
                                    <div className="polk-hover-line-content">
                                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                                            <point.icon className="w-12 h-12 text-brand-accent" strokeWidth={1} />
                                        </div>

                                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-12 group-hover:text-brand-accent transition-colors">{point.feature}</h3>

                                        <div className="mb-8">
                                            <div className="flex items-center gap-2 mb-2">
                                                <X className="w-3 h-3 text-red-500" />
                                                <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Standard</span>
                                            </div>
                                            <p className="text-white/40 text-sm font-bold uppercase tracking-tight">{point.standard}</p>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Check className="w-3 h-3 text-brand-accent" />
                                                <span className="text-[8px] font-black uppercase tracking-widest text-brand-accent">Polk Difference</span>
                                            </div>
                                            <p className="text-white text-lg font-black uppercase tracking-tighter leading-none">{point.polk}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Philosophy Sections */}
            <section className="py-32 relative z-10">
                <Container>
                    <div className="space-y-32">
                        {/* Point 1: Sovereignty */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            <div className="order-2 md:order-1">
                                <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-6 block">01. Sovereignty</span>
                                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                                    You are not<br />the product.
                                </h2>
                                <p className="text-white/40 text-lg font-medium leading-relaxed mb-8">
                                    When you buy a Google or Amazon device, you are paying them to spy on you. They subsidize the hardware costs by harvesting your behavioral data.
                                </p>
                                <p className="text-brand-white text-[10px] font-black uppercase tracking-widest leading-loose border-l border-brand-accent/30 pl-8">
                                    Polk Systems is a hardware company, not a data broker. You pay a fair price for premium equipment, and in exchange, we leave you alone. Your home is your sanctuary, not our data farm.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 relative aspect-square bg-white/[0.02] flex items-center justify-center border border-white/10">
                                <div className="absolute inset-8 border border-brand-accent/20 animate-pulse" />
                                <Shield className="w-32 h-32 text-brand-white opacity-20" strokeWidth={1} />
                            </div>
                        </div>

                        {/* Point 2: Longevity */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            <div className="md:text-right order-2 md:order-1">
                                <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-6 block">02. Longevity</span>
                                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                                    Built for<br />Decades.
                                </h2>
                                <p className="text-white/40 text-lg font-medium leading-relaxed mb-8">
                                    Consumer tech is designed to be replaced every 2 years. We engineer systems like home infrastructure—meant to last as long as your copper pipes or electrical wiring.
                                </p>
                                <p className="text-brand-white text-[10px] font-black uppercase tracking-widest leading-loose md:border-r border-l md:border-l-0 border-brand-accent/30 md:pr-8 pl-8 md:pl-0">
                                    Our servers are enterprise-grade. Our switches are rated for millions of cycles. We build systems that you can pass down to the next generation.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 relative aspect-square bg-white/[0.02] flex items-center justify-center border border-white/10">
                                <div className="absolute inset-8 border border-white/10" />
                                <Cpu className="w-32 h-32 text-brand-white opacity-20" strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-32 relative z-10 border-t border-white/10">
                <Container className="text-center">
                    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-16 leading-[0.8]">
                        Choose<br />Dignity.
                    </h2>
                    <Link
                        href="/get-started"
                        className="inline-block bg-brand-white text-brand-black px-16 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-brand-accent hover:text-white transition-all duration-500 group relative overflow-hidden"
                    >
                        <span className="relative z-10">Start Your Project ↘</span>
                        <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Link>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

