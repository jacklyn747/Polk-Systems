"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { motion } from "framer-motion";

export default function GetStartedPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">
            <Header />

            {/* Background elements */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <section className="relative pt-48 pb-20 z-10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Column: Context & Promise */}
                        <div className="lg:col-span-5">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-6 block"
                            >
                                Application Protocol
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-10"
                            >
                                Initiate <br />
                                <span className="text-brand-accent font-serif italic font-normal normal-case tracking-normal">System Design.</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-8 text-lg font-medium text-brand-white/60 leading-relaxed border-l-2 border-white/10 pl-8"
                            >
                                <p>
                                    Polk Systems are not sold in boxes. They are architected for specific environments.
                                </p>
                                <p>
                                    Complete this secure assessment to initialize your project file. Our engineering team will review your property specifications and generate a preliminary system design within 24 hours.
                                </p>
                            </motion.div>

                            {/* Service Level Indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4"
                            >
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-white">System Status</div>
                                    <div className="text-xs text-brand-white/40 font-mono mt-1">Accepting New Projects • Q1 2026</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: The Form Interface */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="bg-brand-dark-grey border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                            >
                                {/* Subtle Form Background */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

                                <AssessmentForm source="get_started_page" />
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Process Overview */}
            <section className="py-24 border-t border-white/5 relative z-10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-brand-accent text-xs font-black uppercase tracking-widest mb-4">01</div>
                            <h3 className="text-lg font-black uppercase tracking-tight mb-2">Submission</h3>
                            <p className="text-sm text-brand-white/40">Secure transmission of property data to our local server.</p>
                        </div>
                        <div>
                            <div className="text-brand-accent text-xs font-black uppercase tracking-widest mb-4">02</div>
                            <h3 className="text-lg font-black uppercase tracking-tight mb-2">Analysis</h3>
                            <p className="text-sm text-brand-white/40">Automated feasibility check affecting connectivity & zoning.</p>
                        </div>
                        <div>
                            <div className="text-brand-accent text-xs font-black uppercase tracking-widest mb-4">03</div>
                            <h3 className="text-lg font-black uppercase tracking-tight mb-2">Design</h3>
                            <p className="text-sm text-brand-white/40">A Polk Engineer drafts your bespoke system architecture.</p>
                        </div>
                        <div>
                            <div className="text-brand-accent text-xs font-black uppercase tracking-widest mb-4">04</div>
                            <h3 className="text-lg font-black uppercase tracking-tight mb-2">Deployment</h3>
                            <p className="text-sm text-brand-white/40">White-glove installation and network calibration.</p>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
