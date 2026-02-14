"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function PreFooter() {
    return (
        <section className="bg-brand-black text-brand-white relative overflow-hidden border-b border-t border-white/10 py-32 md:py-48">
            {/* Background Elements */}
            <div className="absolute inset-0 polk-architectural-grid opacity-10 pointer-events-none" />

            <Container className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.5em] block mb-8 font-sans">
                        INITIATE_SEQUENCE
                    </span>

                    <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-[0.9] mb-12 text-brand-white max-w-5xl mx-auto">
                        Experience the <br />
                        <span className="text-brand-text-muted">private smart home.</span>
                    </h2>

                    <Link href="/contact">
                        <Button className="bg-white text-brand-black hover:bg-brand-accent hover:text-brand-black transition-all duration-300 font-display tracking-wider text-sm px-10 py-8 rounded-none border border-transparent hover:border-brand-accent">
                            START YOUR PROJECT
                        </Button>
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}
