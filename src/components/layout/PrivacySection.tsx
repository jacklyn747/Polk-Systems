"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Shield, Lock, ServerOff } from "lucide-react";

export function PrivacySection() {
    const features = [
        {
            icon: ServerOff,
            title: "Local Processing",
            description: "Your data never leaves your home. All processing happens on your local hub."
        },
        {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "Military-grade encryption for all internal communications."
        },
        {
            icon: Shield,
            title: "Zero Cloud Dependency",
            description: "Even if the internet goes down, your smart home keeps working perfectly."
        }
    ];

    return (
        <section id="privacy" className="bg-brand-black text-brand-white relative overflow-hidden border-b border-white/10 scroll-mt-32 pt-12 md:pt-0">
            {/* Architectural Grid Overlay */}
            <div className="absolute inset-0 polk-architectural-grid opacity-30 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-8 gap-[1px] bg-white/10 relative z-10">

                {/* Side Header Block */}
                <div className="md:col-span-1 border-r border-white/10 flex items-center justify-center py-12 md:py-0">
                    <span className="polk-side-text">PRIVACY PROTOCOL</span>
                </div>

                {/* Main Content Area */}
                <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-7 gap-[1px]">

                    {/* Hero Title Block */}
                    <div className="md:col-span-4 bg-brand-black p-12 md:p-20 relative border-b border-white/5 md:border-b-0">
                        <div className="absolute top-0 left-0 polk-plus-marker" />
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.5em] block mb-8 font-sans">SEC_DATA_01</span>
                            <h2 className="text-4xl md:text-7xl font-display font-light tracking-tight leading-[0.9] text-balance mb-12">
                                What happens in your home, <span className="text-brand-text-muted italic">stays there.</span>
                            </h2>
                            <p className="text-lg text-brand-text-muted leading-relaxed max-w-md font-light">
                                Your habits, schedule, and conversations are private property. Our system architecture fundamentally ignores your presence to protect your autonomy.
                            </p>
                        </motion.div>
                    </div>

                    {/* Features List Block */}
                    <div className="md:col-span-3 bg-brand-black flex flex-col divide-y divide-white/10 relative">
                        <div className="absolute top-0 left-0 polk-plus-marker" />
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="p-12 group hover:bg-white/[0.02] transition-all relative overflow-hidden"
                            >
                                <span className="absolute right-8 top-8 text-[8px] font-bold text-white/20 tracking-widest uppercase font-mono">LOG_{String(idx + 1).padStart(2, '0')}</span>

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <feature.icon className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                                        <h3 className="text-xl font-display font-light uppercase tracking-widest text-white/80">{feature.title}</h3>
                                    </div>
                                    <p className="text-sm text-brand-text-muted leading-relaxed font-light group-hover:text-white/60 transition-colors font-sans">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-[1px] bg-white/10 text-[8px] font-bold tracking-[0.4em] uppercase text-white/20">
                <div className="md:col-span-1 py-4 px-6 border-r border-white/10 flex items-center justify-center">
                    ENCRYPTION_ACTIVE
                </div>
                <div className="md:col-span-4 py-4 px-12 flex items-center gap-8 font-mono">
                    <span>HUB_SERIAL: PLK-7700-X</span>
                    <span>LATENCY: 0.002MS</span>
                    <span className="text-brand-accent/40">CLOUD: DISCONNECTED</span>
                </div>
                <div className="md:col-span-3 py-4 px-12 text-right">
                    VERIFIED_ARCH_COMPLIANT
                </div>
            </div>
        </section>
    );
}
