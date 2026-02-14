"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { OneTouchSwitch } from "@/components/features/OneTouchSwitch";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[900px] w-full bg-brand-black overflow-hidden flex flex-col pt-20">
            {/* Architectural Grid Overlay with Plus Markers */}
            <div className="absolute inset-0 polk-architectural-grid pointer-events-none z-10 opacity-30">
                {/* Plus Markers at intersections */}
                <div className="absolute top-[250px] left-[12.5%] polk-plus-marker" />
                <div className="absolute top-[250px] left-[25%] polk-plus-marker" />
                <div className="absolute top-[250px] left-[37.5%] polk-plus-marker" />
                <div className="absolute top-[250px] left-[50%] polk-plus-marker" />
                <div className="absolute top-[500px] left-[12.5%] polk-plus-marker" />
                <div className="absolute top-[500px] left-[25%] polk-plus-marker" />
                <div className="absolute top-[500px] left-[37.5%] polk-plus-marker" />
                <div className="absolute top-[500px] left-[62.5%] polk-plus-marker" />
                <div className="absolute top-[500px] left-[75%] polk-plus-marker" />
            </div>

            {/* Vertical Sidebar Text */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-32">
                <span className="polk-side-text">POLK SYSTEMS</span>
                <span className="polk-side-text text-white/60">ARCHITECTURAL AI</span>
                <span className="polk-side-text text-white/60">ESTATE 2026</span>
            </div>

            {/* Main Layout Grid */}
            <div className="flex flex-col md:grid md:grid-cols-8 md:grid-rows-4 w-full h-full flex-grow relative bg-white/5 gap-[1px]">

                {/* [Cols 1-5, Row 1-3] Hero Image Area */}
                <div
                    className="md:col-span-5 md:row-span-3 bg-brand-black relative overflow-hidden flex items-center justify-center p-8 z-10"
                >
                    <Image
                        src="/nuc-polk-orange.png"
                        alt="Polk Systems NUC — local processing hub"
                        fill
                        sizes="(max-width: 768px) 100vw, 62.5vw"
                        className="object-contain relative z-10 p-8"
                        priority
                    />
                </div>

                {/* [Cols 6-8, Row 1-2] Overlapping Title Area */}
                <div className="md:col-span-3 md:row-span-2 bg-brand-black flex flex-col justify-end p-12 md:p-16 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute left-[5%] md:left-[10%] lg:-left-[20%] top-[5%] md:top-[10%] lg:top-[15%] pointer-events-none z-0 overflow-hidden"
                    >
                        <h1 className="text-[clamp(2rem,12vw,4rem)] md:text-[clamp(3rem,10vw,6rem)] lg:text-[clamp(5rem,12vw,9rem)] font-display font-medium leading-[0.9] tracking-[-0.04em] text-white whitespace-nowrap mb-8">
                            INTELLIGENCE.<br />
                            <span className="text-brand-text-muted">NOT SURVEILLANCE.</span>
                        </h1>

                        <p className="font-sans text-lg md:text-xl text-brand-text-muted max-w-xl leading-relaxed mb-12">
                            The first home automation system designed to keep your data in and the world out.
                        </p>

                        <Link href="/system">
                            <Button className="bg-brand-accent text-brand-black hover:bg-white transition-colors duration-300 font-display tracking-wider text-sm px-8 py-6 rounded-none">
                                DISCOVER THE SYSTEM
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* [Col 6, Row 3] Interaction Block (Catalyst) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="md:col-span-1 md:row-span-1 bg-brand-black border-r border-white/5 flex flex-col items-center justify-center p-8 text-center min-h-[200px]"
                >
                    <span className="text-[10px] uppercase tracking-widest text-brand-text-muted font-bold mb-6 font-sans">Master Switch</span>
                    <OneTouchSwitch />
                    <span className="text-[10px] uppercase tracking-widest text-brand-text-muted font-bold mt-6 font-sans">Catalyst v2.1</span>
                </motion.div>

                {/* [Cols 7-8, Row 3] White Text Block */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="md:col-span-2 md:row-span-1 bg-brand-black flex flex-col justify-center p-12 min-h-[200px]"
                >
                    <p className="text-white/60 text-sm leading-relaxed max-w-sm font-sans">
                        Everything in your home works together. Runs locally. No cloud.
                    </p>
                    <div className="mt-8 flex gap-8">
                        <div>
                            <p className="text-brand-accent font-display font-medium text-lg">&lt;5ms</p>
                            <p className="text-brand-text-muted text-[10px] uppercase tracking-widest font-bold font-sans">Latency</p>
                        </div>
                        <div>
                            <p className="text-brand-accent font-display font-medium text-lg">100%</p>
                            <p className="text-brand-text-muted text-[10px] uppercase tracking-widest font-bold font-sans">Local</p>
                        </div>
                    </div>
                </motion.div>

                {/* [Cols 1-6, Row 4] Large Black Footer Block */}
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="md:col-span-6 md:row-span-1 bg-brand-black flex flex-col md:flex-row items-center justify-between px-12 py-8 border-t border-white/10 gap-8"
                >
                    <div className="flex gap-16">
                        <div className="flex flex-col gap-1">
                            <span className="text-brand-accent text-[10px] uppercase tracking-widest font-bold font-sans">System Status</span>
                            <span className="text-white text-sm font-medium font-sans">All Protocols Secured</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-brand-text-muted text-[10px] uppercase tracking-widest font-bold font-sans">Encryption</span>
                            <span className="text-white text-sm font-medium font-sans">Post-Quantum Local Key</span>
                        </div>
                    </div>
                    <div className="h-px bg-white/10 flex-grow mx-12 hidden lg:block" />
                    <Link href="/system" className="text-white text-xs uppercase tracking-[0.3em] font-bold hover:text-brand-accent transition-colors font-sans whitespace-nowrap">
                        View Architecture →
                    </Link>
                </motion.div>

                {/* [Cols 7-8, Row 4] Accent CTA Block */}
                <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="md:col-span-2 md:row-span-1 min-h-[80px]"
                >
                    <Link href="/contact" className="w-full h-full bg-brand-accent flex items-center justify-center cursor-pointer group">
                        <span className="text-white font-bold uppercase tracking-[0.2em] text-sm group-hover:tracking-[0.3em] transition-all font-display">
                            Start Your Project
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

