"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="font-display font-medium text-5xl md:text-7xl leading-[0.9] tracking-tighter text-brand-white mb-8">
                            PRIVACY<br />
                            <span className="text-brand-text-muted">POLICY.</span>
                        </h1>

                        <div className="space-y-8 text-brand-text-muted font-sans text-lg leading-relaxed">
                            <p>
                                At Polk Systems, privacy is the product. We built a home automation platform specifically to keep your data inside your home. This policy details how we handle information when you interact with our website and our systems.
                            </p>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Data Collection</h2>
                                <p>
                                    Our smart home systems process all data locally on-premise. No behavioral data, sensor readings, or home usage patterns are transmitted to external servers. When you submit forms on this website, we collect only the information you explicitly provide (name, email, project details) to respond to your inquiry.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Local Processing</h2>
                                <p>
                                    Polk Systems hardware runs entirely on a local server in your home. Voice commands, motion patterns, climate preferences, and security logs never leave your premises. You maintain full ownership and access to all system-generated data.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Third Parties</h2>
                                <p>
                                    We do not sell, rent, or share personal information with third parties for marketing purposes. Hardware integrations with third-party devices (thermostats, locks, lighting) are configured to communicate directly with your local Polk Core, not external cloud services.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Contact</h2>
                                <p>
                                    For privacy-related inquiries, reach us at{" "}
                                    <a href="mailto:hello@polksystems.com" className="text-brand-accent hover:underline">
                                        hello@polksystems.com
                                    </a>.
                                </p>
                            </div>

                            <p className="text-sm text-brand-text-muted/60 pt-8 border-t border-white/10">
                                Last updated: February 2026
                            </p>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
