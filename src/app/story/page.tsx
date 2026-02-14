"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function StoryPage() {
    const [letterOpen, setLetterOpen] = useState(false);

    return (
        <div className="bg-brand-black min-h-screen">
            {/* Navbar is global in layout.tsx */}

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                        {/* Founder Portrait */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            className="relative aspect-[3/4] bg-brand-dark-grey overflow-hidden order-2 md:order-1"
                        >
                            <Image
                                src="/founder-greg-polk.png"
                                alt="Greg Polk — Founder, Polk Systems"
                                fill
                                className="object-cover object-top grayscale opacity-80 mix-blend-luminosity"
                                priority
                            />
                            {/* Dark gradient for blending */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
                            {/* Subtle brand tint */}
                            <div className="absolute inset-0 bg-brand-accent/5" />
                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <span className="text-brand-accent text-[9px] font-mono block mb-1 tracking-widest">FOUNDER</span>
                                <span className="text-white text-sm font-display font-medium tracking-wider uppercase">Greg Polk</span>
                            </div>
                        </motion.div>

                        {/* Hero Copy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="order-1 md:order-2"
                        >
                            <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter text-brand-white mb-8">
                                It started<br />
                                with a <span className="text-brand-text-muted">mother.</span>
                            </h1>
                            <p className="font-sans text-lg md:text-xl text-brand-text-muted max-w-lg leading-relaxed">
                                Greg Polk spent two decades engineering systems for IBM. But his most important project was ensuring his mother could age with dignity in the home she loved.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* The Mission */}
            <section className="py-24 border-t border-white/5">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-display font-medium text-4xl md:text-5xl text-brand-white mb-10 tracking-tight">
                                Engineering<br />
                                for dignity.
                            </h2>

                            <div className="space-y-8 text-brand-text-muted font-sans text-lg md:text-xl leading-relaxed">
                                <p>
                                    We realized that &ldquo;smart homes&rdquo; were often just &ldquo;gadget homes&rdquo;&mdash;complicated, fragile, and invasive. We wanted something different for our families.
                                </p>
                                <p>
                                    We built a system that honors independence. A system that doesn&rsquo;t need to be managed. A system that protects the people inside by keeping the data inside.
                                </p>
                            </div>
                        </motion.div>

                        {/* Founder's Letter CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-16"
                        >
                            <button
                                onClick={() => setLetterOpen(!letterOpen)}
                                className="group inline-flex items-center gap-3 text-brand-accent text-sm font-display font-medium uppercase tracking-[0.2em] hover:tracking-[0.25em] transition-all duration-300 cursor-pointer"
                                aria-expanded={letterOpen}
                            >
                                <span className="w-8 h-[1px] bg-brand-accent group-hover:w-12 transition-all duration-300" />
                                Read the Founder&rsquo;s Letter
                                <motion.span
                                    animate={{ rotate: letterOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xs"
                                >
                                    ▼
                                </motion.span>
                            </button>

                            {/* Founder's Letter */}
                            <motion.div
                                initial={false}
                                animate={{
                                    height: letterOpen ? "auto" : 0,
                                    opacity: letterOpen ? 1 : 0,
                                }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="pt-12 pb-4 border-l-2 border-brand-accent/30 pl-8 md:pl-12 mt-8">
                                    <h3 className="font-display font-medium text-2xl md:text-3xl text-brand-white mb-8 tracking-tight">
                                        Engineering Peace of Mind
                                    </h3>

                                    <div className="space-y-6 text-brand-text-muted font-sans text-base md:text-lg leading-relaxed">
                                        <p>
                                            I founded Polk Systems with a single client in mind: my mother.
                                        </p>
                                        <p>
                                            I wanted to give her the ability to age in place comfortably, but I refused to compromise her dignity to do it. We skipped the invasive &ldquo;Big Brother&rdquo; cameras and built a system that learns her home&rsquo;s heartbeat. It recognizes healthy patterns and notifies loved ones only when those patterns are broken.
                                        </p>
                                        <p>
                                            Most importantly, I engineered this system to be independent of the internet. It runs locally, meaning it works even when the Wi-Fi is down, and your data stays strictly within your walls. You own your history, and you can access it instantly&mdash;no delays, no cloud subscriptions, no privacy risks.
                                        </p>
                                        <p>
                                            This is the standard I set for my own family, and it&rsquo;s the standard I bring to yours.
                                        </p>
                                    </div>

                                    <div className="mt-10 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-none overflow-hidden relative bg-brand-dark-grey flex-shrink-0">
                                            <Image
                                                src="/founder-greg-polk.png"
                                                alt="Greg Polk"
                                                fill
                                                className="object-cover object-top grayscale"
                                            />
                                        </div>
                                        <div>
                                            <span className="text-brand-white text-sm font-display font-medium tracking-wider uppercase block">Greg Polk</span>
                                            <span className="text-brand-text-muted text-xs font-sans tracking-wider uppercase">Founder, Polk Systems</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* CTA to Contact */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-20 pt-16 border-t border-white/5"
                        >
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-4 text-brand-white hover:text-brand-accent transition-colors duration-300"
                            >
                                <span className="font-display font-medium text-lg uppercase tracking-[0.15em]">
                                    Start Your Project
                                </span>
                                <span className="text-brand-accent group-hover:translate-x-2 transition-transform duration-300">
                                    →
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
