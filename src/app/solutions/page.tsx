"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Shield, Brain, Cpu, ArrowRight } from "lucide-react";
import { TechnicalHeading } from "@/components/core/TechnicalHeading";

export default function Solutions() {
    return (
        <main className="min-h-screen bg-brand-black text-white relative overflow-hidden pt-24">
            {/* Architectural Grid Overlay */}
            <div className="absolute inset-0 polk-architectural-grid opacity-30 pointer-events-none z-10" />

            {/* Vertical Sidebar Labels */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-32">
                <span className="polk-side-text">CAPABILITIES_MANIFEST</span>
                <span className="polk-side-text">SOC_2_COMPLIANT</span>
                <span className="polk-side-text">PROTOCOL_V4.2</span>
            </div>

            {/* HERO SECTION */}
            <section className="relative min-h-[60vh] md:h-[60vh] flex flex-col justify-center border-b border-white/10 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-8 h-full">
                    <div className="md:col-span-5 bg-brand-black p-12 md:p-24 relative z-20 flex flex-col justify-center gap-8">
                        <div className="absolute top-0 left-0 polk-plus-marker" />

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="mb-8">
                                <TechnicalHeading
                                    text="Total Home"
                                    className="text-5xl md:text-6xl lg:text-8xl"
                                    delay={0.1}
                                />
                                <TechnicalHeading
                                    text="Command."
                                    className="text-5xl md:text-6xl lg:text-8xl text-brand-text-muted"
                                    delay={0.4}
                                />
                            </div>
                            <p className="text-sm text-brand-text-muted max-w-xl font-light leading-relaxed font-sans uppercase tracking-widest">
                                Technology should be simple. We build systems that take care of the small things,
                                so you can focus on what matters. Your home, your rules.
                            </p>
                        </motion.div>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <Button className="bg-white text-brand-black hover:bg-brand-accent hover:text-white px-8 md:px-12 py-4 md:py-6 text-[10px] tracking-[0.4em] uppercase font-bold border-brand-white font-sans transition-colors">
                                    Deploy System
                                </Button>
                            </Link>
                            <Link href="/system">
                                <Button variant="outline" className="border-white/20 text-white px-8 md:px-12 py-4 md:py-6 text-[10px] tracking-[0.4em] uppercase font-bold font-sans">
                                    View Specs
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-3 bg-white/5 relative overflow-hidden hidden md:block">
                        <div className="absolute inset-0 bg-[url('/solutions-hero.png')] bg-cover bg-center grayscale opacity-40 mix-blend-overlay" />
                        <div className="absolute bottom-12 right-12 z-20 text-right">
                            <span className="text-[10px] font-mono whitespace-pre opacity-30">
                                LOC: 29.7604° N, 95.3698° W{"\n"}
                                SYS: CORE_ARCH_01{"\n"}
                                STATUS: OPTIMIZED
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAPABILITIES GRID */}
            <section className="relative bg-brand-black">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">

                    {[
                        {
                            title: "Edge-Native",
                            icon: Cpu,
                            desc: "0.02ms latency. Local execution. Your data never leaves the home premises. Hardware-level isolation.",
                            stat: "LATENCY: 0.02MS"
                        },
                        {
                            title: "Adaptive AI",
                            icon: Brain,
                            desc: "Systems that learn individual patterns. Lighting, climate, and security that adjust via behavioral prediction.",
                            stat: "LEARNING: ENABLED"
                        },
                        {
                            title: "Zero Trust",
                            icon: Shield,
                            desc: "Bank-grade security architecture. Every device is authenticated. Every single request is cryptographically verified.",
                            stat: "SEC_AUTH: 256-BIT"
                        }
                    ].map((feature, i) => (
                        <div key={i} className="bg-brand-black p-12 md:p-16 relative group overflow-hidden">
                            <div className="absolute top-0 left-0 polk-plus-marker" />
                            <div className="mb-12">
                                <feature.icon className="w-8 h-8 text-brand-accent mb-8" />
                                <h3 className="text-3xl font-display font-light uppercase tracking-tight mb-4">{feature.title}</h3>
                                <p className="text-brand-text-muted text-sm font-light leading-relaxed mb-8 font-sans uppercase tracking-wider">
                                    {feature.desc}
                                </p>
                            </div>
                            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">{feature.stat}</span>
                                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-accent transition-colors" />
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* TRUST & COMPLIANCE */}
            <section className="relative border-y border-white/10 bg-brand-black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-white/10">

                    <div className="p-12 md:p-24 bg-brand-black relative">
                        <div className="absolute top-0 left-0 polk-plus-marker" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-6 block font-sans">
                            Compliance Standard
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-light uppercase tracking-tight leading-none mb-8">
                            Built For <br />
                            <span className="text-brand-text-muted">Reliability.</span>
                        </h2>
                        <p className="text-sm text-brand-text-muted font-light mb-12 max-w-md font-sans uppercase tracking-wider">
                            Trusted by those who value privacy. Our systems meet world standards
                            while looking clean and simple in your home.
                        </p>
                        <div className="flex flex-col gap-6 font-mono">
                            {['ISO 27001 RE-CERTIFIED', 'SOC 2 TYPE II COMPLIANT', 'TPM 2.0 HARDWARE CHIP'].map((cert, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-2 h-2 bg-brand-accent" />
                                    <span className="text-[10px] font-bold tracking-[0.2em]">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-black relative min-h-[400px] overflow-hidden group">
                        <div className="absolute inset-0 polk-architectural-grid opacity-20 pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/4 aspect-video border border-white/10 relative overflow-hidden bg-white/5">
                                <div className="absolute inset-0 bg-brand-accent/5 animate-pulse" />
                                <div className="absolute top-0 left-0 w-full h-full p-8 font-mono text-[8px] text-white/20 overflow-hidden leading-relaxed">
                                    {`[ESTATE_BRAIN_LOG] 
                                    >> INITIALIZING ENCLAVE...
                                    >> AUTHENTICATING NODES...
                                    >> LATENCY CHECK: 0.02ms
                                    >> SECURE_CHANNEL: ESTABLISHED
                                    >> ENCRYPTION: AES-256-GCM
                                    >> ANOMALY_DETECTION: ACTIVE
                                    >> MEMORY_GUARD: OK
                                    >> SYSTEM_SOVEREIGNTY: 100%`}
                                </div>
                                <div className="absolute bottom-4 right-4 text-brand-accent/40 text-[10px] font-bold">
                                    SYSTEM_OPTIMIZED.
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 py-2 px-4 border border-white/10 text-[8px] font-bold tracking-[0.4em] uppercase text-white/30 font-sans">
                            Protocol Visualization 01-A
                        </div>
                    </div>

                </div>
            </section>

            {/* TECHNICAL CTA */}
            <section className="bg-brand-black p-12 md:p-24 text-center relative border-t border-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 polk-plus-marker z-20" />
                <h2 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tight mb-12">
                    Begin The <br />
                    <span className="text-brand-text-muted">Transformation.</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <Link href="/contact">
                        <Button className="bg-brand-accent text-brand-black hover:bg-white px-16 py-10 text-[10px] tracking-[0.4em] uppercase font-black w-full md:w-auto border-brand-accent font-sans transition-all">
                            Start Your Project
                        </Button>
                    </Link>
                    <div className="text-left font-mono text-[8px] text-white/30 leading-snug uppercase tracking-widest">
                        ESTATE_CONSULTATION_ACTIVE{"\n"}
                        NEXT_AVAIL_SLOT: 2HR 42MIN{"\n"}
                        VERSION: 2026.1
                    </div>
                </div>
            </section>
        </main>
    );
}
