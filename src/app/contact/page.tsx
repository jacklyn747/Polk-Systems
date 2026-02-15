"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="relative pt-48 pb-20 z-10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-brand-accent text-[10px] font-black tracking-[0.4em] uppercase mb-8 block">Project Inquiry</span>
                        <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            Connect with <br />
                            <span className="text-brand-white/20">Engineering.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-white/60 font-medium leading-relaxed max-w-2xl border-l border-brand-accent/30 pl-8">
                            We don't have a sales team. When you reach out, you speak directly with the engineers who design and build our systems.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Assessment Form */}
            <section className="pb-32 relative z-10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-brand-black border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-accent opacity-50" />
                                <AssessmentForm source="contact" />
                            </motion.div>
                        </div>

                        <div className="lg:col-span-5 space-y-px bg-white/10 border border-white/10">
                            <div className="p-10 bg-brand-black group">
                                <span className="text-brand-accent text-[8px] font-black uppercase tracking-widest mb-6 block">Direct_Relay_01</span>
                                <h3 className="text-xl font-black uppercase mb-4 group-hover:text-brand-accent transition-colors">Email Channel</h3>
                                <a href="mailto:hello@polksystems.com" className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                                    hello@polksystems.com
                                </a>
                            </div>
                            <div className="p-10 bg-brand-black group">
                                <span className="text-brand-accent text-[8px] font-black uppercase tracking-widest mb-6 block">Direct_Relay_02</span>
                                <h3 className="text-xl font-black uppercase mb-4 group-hover:text-brand-accent transition-colors">Response Protocol</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">
                                    Our team reviews every inquiry personally. Expect a technical response within 24 hours.
                                </p>
                            </div>
                            <div className="p-10 bg-brand-black group">
                                <span className="text-brand-accent text-[8px] font-black uppercase tracking-widest mb-6 block">Direct_Relay_03</span>
                                <h3 className="text-xl font-black uppercase mb-4 group-hover:text-brand-accent transition-colors">Office Hours</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest leading-loose text-white/30">
                                    Monday — Friday <br />
                                    09:00 — 18:00 EST
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
