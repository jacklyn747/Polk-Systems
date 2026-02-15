"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SystemPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden z-10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">System Core</span>
                        <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            The Brain <br />
                            <span className="text-brand-white/20">Of the House.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed max-w-2xl border-l border-brand-accent/30 pl-8">
                            Built by an IBM veteran with 20 years of engineering rigor. The Polk Core processes every command instantly, right where you stand. No lag. No buffering. Just immediate response.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Core Feature Section */}
            <section className="py-32 border-t border-white/10 relative z-10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-[4/3] bg-white/5 border border-white/10 overflow-hidden"
                        >
                            <div className="absolute inset-0 polk-architectural-grid opacity-20 pointer-events-none" />
                            {/* Visual: Sleek shot of local NUC hub */}
                            <Image
                                src="/nuc-polk-orange.png"
                                alt="The Polk Core — local processing hub that runs your smart home without cloud dependency"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain p-12 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                        </motion.div>

                        <div>
                            <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-6 block">Latency_Check: 0.02ms</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                                Local Force.<br />
                                <span className="text-white/20">Zero Cloud.</span>
                            </h2>
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose max-w-lg mb-8">
                                Because your data is local, it is instantly accessible. If you need to know what happened yesterday, you don’t need to submit a request to a cloud provider. You own the history. You hold the keys.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Energy Section */}
            <section className="py-32 border-t border-white/10 relative z-10 bg-brand-black/50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-6 block">Optimization_Metric</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                                Efficiency <br />
                                <span className="text-white/20">By Design.</span>
                            </h2>
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose max-w-lg mb-8">
                                The system knows which rooms are empty and which need warmth. It micro-adjusts your climate and lighting in real-time, drastically reducing energy waste without you ever touching a switch.
                            </p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2 relative aspect-square md:aspect-[4/3] bg-white/5 border border-white/10 overflow-hidden"
                        >
                            <div className="absolute inset-0 polk-architectural-grid opacity-20 pointer-events-none" />
                            <Image
                                src="/prod-thermo-orange.png"
                                alt="Intelligent climate control that micro-adjusts temperature room by room"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain p-12 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
