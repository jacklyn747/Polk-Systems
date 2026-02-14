"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Check, X, Shield, Cpu, RefreshCw, Smartphone } from "lucide-react";
import Link from "next/link";

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
            <Header />

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
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12"
                        >
                            We built the<br />
                            <span className="text-brand-white/50">Anti-Smart Home.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed max-w-2xl border-l-2 border-brand-accent pl-8"
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
                            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
                                The Industry<br />
                                <span className="text-brand-text-muted">vs.</span><br />
                                <span className="text-brand-accent">Polk Systems</span>
                            </h2>
                            <p className="text-brand-text-muted text-sm leading-relaxed max-w-xs">
                                We don't compete on features. We compete on philosophy. Here is why discerning homeowners choose Polk.
                            </p>
                        </div>

                        {/* Comparison Grid */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {COMPARISON_POINTS.map((point, idx) => (
                                <motion.div
                                    key={point.feature}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-brand-black border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-accent/50 transition-colors"
                                >
                                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                        <point.icon className="w-12 h-12 text-brand-accent" />
                                    </div>

                                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-white mb-6">{point.feature}</h3>

                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <X className="w-4 h-4 text-red-500" />
                                            <span className="text-xs font-bold uppercase tracking-wider text-white/40">Standard</span>
                                        </div>
                                        <p className="text-brand-text-muted text-sm">{point.standard}</p>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Check className="w-4 h-4 text-brand-accent" />
                                            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">Polk Difference</span>
                                        </div>
                                        <p className="text-white text-base font-medium">{point.polk}</p>
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
                                <span className="text-brand-accent text-xs font-black uppercase tracking-widest mb-4 block">01. Sovereignty</span>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                                    You are not<br />the product.
                                </h2>
                                <p className="text-brand-text-muted text-lg leading-relaxed mb-8">
                                    When you buy a Google or Amazon device, you are paying them to spy on you. They subsidize the hardware costs by harvesting your behavioral data.
                                </p>
                                <p className="text-brand-white text-lg font-medium leading-relaxed">
                                    Polk Systems is a hardware company, not a data broker. You pay a fair price for premium equipment, and in exchange, we leave you alone. Your home is your sanctuary, not our data farm.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 relative aspect-square bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                <div className="absolute inset-0 border border-brand-accent/20 rounded-full animate-pulse" />
                                <Shield className="w-32 h-32 text-brand-white opacity-80" strokeWidth={1} />
                            </div>
                        </div>

                        {/* Point 2: Longevity */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            <div className="md:text-right">
                                <span className="text-brand-accent text-xs font-black uppercase tracking-widest mb-4 block">02. Longevity</span>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                                    Built for<br />Decades.
                                </h2>
                                <p className="text-brand-text-muted text-lg leading-relaxed mb-8">
                                    Consumer tech is designed to be replaced every 2 years. We engineer systems like home infrastructure—meant to last as long as your copper pipes or electrical wiring.
                                </p>
                                <p className="text-brand-white text-lg font-medium leading-relaxed">
                                    Our servers are enterprise-grade. Our switches are rated for millions of cycles. We build systems that you can pass down to the next generation.
                                </p>
                            </div>
                            <div className="relative aspect-square bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                <Cpu className="w-32 h-32 text-brand-white opacity-80" strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-32 relative z-10 border-t border-white/5">
                <Container className="text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-10">
                        Choose Dignity.
                    </h2>
                    <Link
                        href="/get-started"
                        className="inline-block bg-brand-white text-brand-black px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-brand-accent hover:scale-105 transition-all duration-300"
                    >
                        Start Your Project
                    </Link>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
