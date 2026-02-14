"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const features = [
    {
        headline: "Works when the world disconnects.",
        body: "When the internet goes down, your house shouldn't. Polk systems run locally on a dedicated server in your home. No lag. No outages. Just a home that works.",
        meta: "OFFLINE_READY"
    },
    {
        headline: "Your home is your business. Literally.",
        body: "Your data lives on a secure server in your utility closet, not a cloud farm in a different zip code. We don't see when you unlock your door. We don't know what temperature you like your bedroom. It's none of our business.",
        meta: "LOCAL_VAULT"
    },
    {
        headline: "Protection without the lens.",
        body: "True security isn't about cameras in every corner. It's about a home that knows when you're away and secures itself. Lights that mimic your presence. Shades that close at dusk. A home that looks lived in, even when it's not.",
        meta: "ACTIVE_MIMICRY"
    }
];

export function ValueProps() {
    return (
        <section className="bg-brand-black text-brand-white relative overflow-hidden border-b border-white/10">
            {/* Architectural Grid Overlay */}
            <div className="absolute inset-0 polk-architectural-grid opacity-20 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-white/10 relative z-10">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.2 }}
                        className="bg-brand-black p-12 md:p-16 relative group hover:bg-white/[0.02] transition-colors border-b lg:border-b-0 border-white/10 last:border-b-0"
                    >
                        <div className="absolute top-0 left-0 polk-plus-marker opacity-50" />

                        <div className="flex flex-col h-full justify-between gap-12">
                            <div>
                                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-accent/60 block mb-8 font-sans">
                                    0{idx + 1} / {feature.meta}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-display font-medium leading-[1.1] mb-6 text-brand-white">
                                    {feature.headline}
                                </h3>
                                <p className="text-brand-text-muted leading-relaxed font-sans text-sm md:text-base max-w-sm">
                                    {feature.body}
                                </p>
                            </div>

                            <div className="w-full h-[1px] bg-white/10 mt-auto group-hover:bg-brand-accent/30 transition-colors" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Status Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/10 text-[8px] font-bold tracking-[0.3em] uppercase text-white/20">
                <div className="p-6 bg-brand-black flex items-center justify-center">
                    SYSTEM_INTEGRITY: 100%
                </div>
                <div className="p-6 bg-brand-black flex items-center justify-center border-l border-white/10">
                    NETWORK: LOCAL_ONLY
                </div>
                <div className="p-6 bg-brand-black flex items-center justify-center border-l border-white/10">
                    ENCRYPTION: AES-256
                </div>
                <div className="p-6 bg-brand-black flex items-center justify-center border-l border-white/10 text-brand-accent">
                    STATUS: SECURE
                </div>
            </div>
        </section>
    );
}
