"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
                        <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">Protocol_Privacy</span>
                        <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            Privacy <br />
                            <span className="text-brand-white/20">Is The Product.</span>
                        </h1>

                        <div className="space-y-16 border-t border-white/10 pt-16">
                            <div className="border-l border-brand-accent/30 pl-8">
                                <p className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed">
                                    At Polk Systems, privacy is the product. We built a home automation platform specifically to keep your data inside your home. This policy details how we handle information when you interact with our website and our systems.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">01. Data Collection</h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/40">
                                        Our smart home systems process all data locally on-premise. No behavioral data, sensor readings, or home usage patterns are transmitted to external servers. When you submit forms on this website, we collect only the information you explicitly provide to respond to your inquiry.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">02. Local Processing</h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/40">
                                        Polk Systems hardware runs entirely on a local server in your home. Voice commands, motion patterns, climate preferences, and security logs never leave your premises. You maintain full ownership and access to all system-generated data.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">03. Third Parties</h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/40">
                                        We do not sell, rent, or share personal information with third parties for marketing purposes. Hardware integrations with third-party devices are configured to communicate directly with your local Polk Core, not external cloud services.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">04. Contact</h2>
                                    <p className="text-sm font-black uppercase tracking-widest leading-loose text-white/40">
                                        For privacy-related inquiries, reach us at{" "}
                                        <a href="mailto:hello@polksystems.com" className="text-brand-accent hover:text-white transition-colors">
                                            hello@polksystems.com
                                        </a>.
                                    </p>
                                </section>
                            </div>

                            <div className="pt-16 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/20">
                                <span>Vault_Revision_01</span>
                                <span>Last updated: February 2026</span>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
