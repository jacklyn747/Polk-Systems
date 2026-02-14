"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SystemPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            {/* The global layout provides the Navbar, so we remove it from here */}

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-brand-white mb-8">
                            THE BRAIN<br />
                            OF THE <span className="text-brand-text-muted">HOUSE.</span>
                        </h1>
                        <p className="font-sans text-xl text-brand-text-muted max-w-2xl leading-relaxed">
                            Built by an IBM veteran with 20 years of engineering rigor. The Polk Core processes every command instantly, right where you stand. No lag. No buffering. Just immediate response.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Core Feature Section */}
            <section className="py-24 border-t border-white/5">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-[4/3] bg-white/5 overflow-hidden"
                        >
                            {/* Visual: Sleek shot of local NUC hub */}
                            <Image
                                src="/nuc-polk-orange.png"
                                alt="The Polk Core — local processing hub that runs your smart home without cloud dependency"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain p-12"
                            />
                        </motion.div>

                        <div>
                            <h2 className="font-display font-medium text-4xl md:text-5xl text-brand-white mb-6">
                                ANSWERS IN SECONDS.<br />
                                <span className="text-brand-text-muted">NOT DAYS.</span>
                            </h2>
                            <p className="font-sans text-lg text-brand-text-muted/80 leading-relaxed mb-8">
                                Because your data is local, it is instantly accessible. If you need to know what happened yesterday, you don’t need to submit a request to a cloud provider. You own the history. You hold the keys.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Energy Section */}
            <section className="py-24 border-t border-white/5">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-display font-medium text-4xl md:text-5xl text-brand-white mb-6">
                                SAVINGS THAT<br />
                                FEEL LIKE <span className="text-brand-text-muted">MAGIC.</span>
                            </h2>
                            <p className="font-sans text-lg text-brand-text-muted/80 leading-relaxed mb-8">
                                The system knows which rooms are empty and which need warmth. It micro-adjusts your climate and lighting in real-time, drastically reducing energy waste without you ever touching a switch.
                            </p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2 relative aspect-square md:aspect-[4/3] bg-white/5 overflow-hidden"
                        >
                            <Image
                                src="/prod-thermo-orange.png"
                                alt="Intelligent climate control that micro-adjusts temperature room by room"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain p-12"
                            />
                        </motion.div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
