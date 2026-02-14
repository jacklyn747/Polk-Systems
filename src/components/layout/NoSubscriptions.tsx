"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export function NoSubscriptions() {
    return (
        <section id="subscriptions" className="bg-brand-black text-brand-white relative overflow-hidden border-b border-white/10 scroll-mt-32 pt-12 md:pt-0">
            {/* Architectural Grid Overlay */}
            <div className="absolute inset-0 polk-architectural-grid opacity-30 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-8 gap-[1px] bg-white/10 relative z-10">

                {/* Header Information Block */}
                <div className="md:col-span-1 border-r border-white/10 flex lg:flex-col items-center justify-between p-8 bg-brand-black">
                    <span className="polk-side-text !rotate-0 [writing-mode:horizontal-tb] !text-[8px]">OWN_MODEL_01</span>
                    <span className="polk-side-text">HARDWARE SOVEREIGNTY</span>
                    <span className="polk-side-text !rotate-0 [writing-mode:horizontal-tb] !text-[8px]">MODEL_04</span>
                </div>

                {/* Primary Message Area */}
                <div className="md:col-span-4 bg-brand-black p-12 md:p-20 relative flex flex-col justify-center border-r border-white/10">
                    <div className="absolute top-0 left-0 polk-plus-marker" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-8 text-brand-accent/80 font-sans">License Agreement</h2>
                        <h2 className="text-5xl md:text-8xl font-display font-light tracking-tight uppercase leading-[0.9] mb-16">
                            Freedom from <br />
                            <span className="text-brand-text-muted">Subscription codes.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-0 border border-white/10 bg-white/10 mb-16">
                            {[
                                { label: "Local Storage", status: "VERIFIED" },
                                { label: "End-to-End Encryption", status: "ACTIVE" },
                                { label: "Cloud-Free Bridge", status: "ENABLED" },
                                { label: "Lifetime Updates", status: "INCLUDED" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-brand-black p-8 flex items-center justify-between group hover:bg-white/[0.02] transition-colors font-sans">
                                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/60">{item.label}</span>
                                    <span className="text-[8px] font-black uppercase text-brand-accent px-3 py-1 border border-brand-accent/30 bg-brand-accent/5">{item.status}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact">
                            <Button className="w-full h-20 bg-brand-accent text-brand-black hover:bg-white transition-all text-xs uppercase tracking-[0.4em] font-black rounded-none font-sans">
                                Claim Your Sovereignty
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Technical Spec Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 text-[8px] font-black tracking-[0.4em] uppercase text-brand-text-muted">
                <div className="py-6 px-12 bg-brand-black flex items-center justify-between">
                    <span>LIFETIME_HARDWARE_COST</span>
                    <span className="text-brand-accent">0.00_USD</span>
                </div>
                <div className="py-4 px-8 border-r border-white/10 flex items-center justify-between">
                    <span>Recurring_Cost</span>
                    <span>EULA_Status</span>
                    <span className="text-white/40">Sovereign_User</span>
                </div>
                <div className="py-4 px-8 flex items-center justify-between">
                    <span>Support_Tier</span>
                    <span className="text-white/40">Core_Eternal</span>
                </div>
            </div>
        </section>
    );
}
