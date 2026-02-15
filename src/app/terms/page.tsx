"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">

            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            <section className="relative pt-48 pb-32 z-10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">Protocol_Terms</span>
                        <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            Terms of <br />
                            <span className="text-brand-white/20">Protocol.</span>
                        </h1>

                        <div className="space-y-16 border-t border-white/10 pt-16">
                            <div className="border-l border-brand-accent/30 pl-8">
                                <p className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed">
                                    By activating a Polk Systems Core, you are entering into a Sovereign Data Agreement. We do not own your data. We do not have access to your keys.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">01. Local Autonomy</h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/40">
                                        You are responsible for the physical security of your Cortex Node. Loss of the physical hardware may result in the loss of encrypted data if local backups are not maintained.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">02. Zero-Access Guarantee</h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/40">
                                        Polk Systems cannot reset your passwords or recover your video feeds. Encryption happens at the edge, on your hardware.
                                    </p>
                                </section>
                            </div>

                            <div className="pt-16 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/20">
                                <span>Legal_Revision_01</span>
                                <span>Updated February 2026</span>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
