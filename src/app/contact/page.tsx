"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="bg-brand-black min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-8 md:pt-48 md:pb-12">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-brand-white mb-6">
                            LET&apos;S DESIGN<br />
                            YOUR <span className="text-brand-text-muted">SYSTEM.</span>
                        </h1>
                        <p className="font-sans text-xl text-brand-text-muted max-w-2xl leading-relaxed">
                            Complete this 2-minute assessment and a Polk engineer will design a personalized system recommendation for your property.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Assessment Form */}
            <section className="pb-24 md:pb-32">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl"
                    >
                        <AssessmentForm source="contact" />
                    </motion.div>
                </Container>
            </section>

            {/* Direct Contact Fallback */}
            <section className="border-t border-white/5 py-16">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted font-sans mb-2">
                                Prefer to reach out directly?
                            </p>
                            <a
                                href="mailto:hello@polksystems.com"
                                className="text-2xl font-display text-brand-white hover:text-brand-accent transition-colors"
                            >
                                hello@polksystems.com
                            </a>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted font-sans mb-2">
                                Response Time
                            </p>
                            <p className="font-display text-xl text-brand-white">
                                Within 24 Hours
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
