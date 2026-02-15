"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { motion } from "framer-motion";
import { TechnicalHeading } from "@/components/core/TechnicalHeading";

export default function GetStartedPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Background elements */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <section className="relative pt-48 pb-20 z-10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Column: Context & Promise */}
                        <div className="lg:col-span-12 mb-12">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-6 block"
                            >
                                Application Protocol
                            </motion.span>
                            <div className="mb-12">
                                <TechnicalHeading
                                    text="Initiate"
                                    className="text-6xl md:text-[8vw]"
                                    delay={0.1}
                                />
                                <TechnicalHeading
                                    text="Assessment_"
                                    className="text-6xl md:text-[8vw] text-brand-white/20"
                                    delay={0.4}
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-8 text-xl font-medium text-brand-white/60 leading-relaxed border-l border-brand-accent/30 pl-8"
                            >
                                <p>
                                    Polk Systems are not sold in boxes. They are architected for specific environments.
                                </p>
                                <p>
                                    Complete this secure assessment to initialize your project file. Our engineering team will review your property specifications and generate a preliminary system design.
                                </p>
                            </motion.div>

                            {/* Service Level Indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="mt-16 bg-white/5 border border-white/10 p-8 flex items-center gap-6"
                            >
                                <div className="w-2 h-2 bg-green-500 animate-pulse" />
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-white">System Status</div>
                                    <div className="text-xs text-brand-white/40 font-mono mt-1 uppercase">Accepting New Projects • Q1 2026</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: The Form Interface */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="bg-brand-black border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-accent opacity-50" />
                                <AssessmentForm source="get_started_page" />
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Process Overview */}
            <section className="py-24 border-t border-white/10 relative z-10 bg-brand-black/50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
                        <div className="polk-hover-line p-8 bg-brand-black group hover:bg-white/[0.02] transition-colors">
                            <div className="polk-hover-line-content">
                                <div className="text-brand-accent text-[8px] font-black uppercase tracking-widest mb-12">Protocol_01</div>
                                <h3 className="text-xl font-black uppercase mb-4">Submission</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30 group-hover:text-white/60 transition-colors">Secure transmission of property data to our local server.</p>
                            </div>
                        </div>
                        <div className="polk-hover-line p-8 bg-brand-black group hover:bg-white/[0.02] transition-colors">
                            <div className="polk-hover-line-content">
                                <div className="text-brand-accent text-[8px] font-black uppercase tracking-widest mb-12">Protocol_02</div>
                                <h3 className="text-xl font-black uppercase mb-4">Analysis</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30 group-hover:text-white/60 transition-colors">Automated feasibility check affecting connectivity & zoning.</p>
                            </div>
                        </div>
                        <div className="polk-hover-line p-8 bg-brand-black group hover:bg-white/[0.02] transition-colors">
                            <div className="polk-hover-line-content">
                                <div className="text-brand-accent text-[8px] font-black uppercase tracking-widest mb-12">Protocol_03</div>
                                <h3 className="text-xl font-black uppercase mb-4">Design</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30 group-hover:text-white/60 transition-colors">A Polk Engineer drafts your bespoke system architecture.</p>
                            </div>
                        </div>
                        <div className="polk-hover-line p-8 bg-brand-black group hover:bg-white/[0.02] transition-colors">
                            <div className="polk-hover-line-content">
                                <div className="text-brand-accent text-[8px] font-black uppercase tracking-widest mb-12">Protocol_04</div>
                                <h3 className="text-xl font-black uppercase mb-4">Deployment</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30 group-hover:text-white/60 transition-colors">White-glove installation and network calibration.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
