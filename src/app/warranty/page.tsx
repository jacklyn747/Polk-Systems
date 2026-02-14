"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function WarrantyPage() {
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
                            HARDWARE<br />
                            <span className="text-brand-text-muted">WARRANTY.</span>
                        </h1>

                        <div className="space-y-8 text-brand-text-muted font-sans text-lg leading-relaxed">
                            <p>
                                Every Polk Systems installation is backed by comprehensive hardware coverage. We stand behind every component we deploy in your home.
                            </p>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Coverage Period</h2>
                                <p>
                                    The Polk Core processing unit and all Polk-branded peripherals are covered for a period of three (3) years from the date of installation. Third-party hardware (locks, thermostats, lighting fixtures) is covered under their respective manufacturer warranties.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">What&rsquo;s Covered</h2>
                                <p>
                                    Manufacturing defects, component failure under normal use, and firmware-related hardware issues. Polk Systems will repair or replace defective components at no cost during the warranty period, including on-site labor.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">What&rsquo;s Not Covered</h2>
                                <p>
                                    Damage from power surges, water, unauthorized modifications, or physical impact. Consumable components (batteries, bulbs) are excluded. Warranty is void if hardware is serviced by unauthorized personnel.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="font-display text-2xl text-brand-white mb-4">Service Requests</h2>
                                <p>
                                    To initiate a warranty claim, contact us at{" "}
                                    <a href="mailto:hello@polksystems.com" className="text-brand-accent hover:underline">
                                        hello@polksystems.com
                                    </a>
                                    . A Polk technician will assess the issue, typically within 48 hours.
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
