"use client";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import Link from "next/link";

const PROCESS_STEPS = [
    {
        number: "01",
        title: "The Audit",
        description: "We don't guess. We measure. We conduct a comprehensive site survey to understand your network environment, electrical infrastructure, and lifestyle patterns.",
        detail: "Output: Technical Feasibility Report"
    },
    {
        number: "02",
        title: "The Architecture",
        description: "Our engineers design your system from the ground up. Every cable run, every sensor placement, and every server rack unit is planned in CAD before a single screw is turned.",
        detail: "Output: Full System Blueprints"
    },
    {
        number: "03",
        title: "The Fabrication",
        description: "Unlike typical installers who figure it out on-site, we build and test your core server rack in our lab. We burn-in the hardware for 48 hours to ensure zero defects.",
        detail: "Output: Certified Rack Core"
    },
    {
        number: "04",
        title: "The Deployment",
        description: "Our white-glove team installs the infrastructure with surgical precision. We respect your home, creating zero dust and leaving zero trace—except for a perfect system.",
        detail: "Output: Final Commissioning"
    },
    {
        number: "05",
        title: "The Stewardship",
        description: "True luxury is reliability. We remotely monitor your system health 24/7 (without seeing your personal data) to fix issues before you even notice them.",
        detail: "Output: Quarterly Health Reports"
    }
];

export default function ProcessPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">
            <Header />

            {/* Background Texture */}
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden z-10">
                <Container>
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-6 block"
                        >
                            Methodology
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12"
                        >
                            Precision <br />
                            <span className="text-brand-white/50">Engineering.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed max-w-2xl border-l-2 border-brand-accent pl-8"
                        >
                            A Polk System is not installed; it is commissioned. We follow a military-grade protocol to ensure that your system performs flawlessly from Day One to Year Ten.
                        </motion.p>
                    </div>
                </Container>
            </section>

            {/* The Process Timeline */}
            <section className="py-24 relative z-10 border-t border-white/5">
                <Container>
                    <div className="space-y-0">
                        {PROCESS_STEPS.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-b border-white/10 py-16 md:py-24 hover:bg-white/[0.02] transition-colors"
                            >
                                {/* Active Indicator Line */}
                                <div className="absolute left-0 bottom-0 top-0 w-1 bg-brand-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />

                                {/* Number */}
                                <div className="md:col-span-2">
                                    <span className="text-6xl md:text-7xl font-black text-white/5 group-hover:text-brand-accent/20 transition-colors font-mono">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-6">
                                    <h3 className="text-3xl font-black uppercase tracking-tight mb-6 flex items-center gap-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-brand-text-muted text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Detail/Output */}
                                <div className="md:col-span-4 flex items-end md:justify-end">
                                    <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl">
                                        <span className="block text-[10px] font-black uppercase tracking-widest text-brand-accent mb-1">Deliverable</span>
                                        <span className="block text-sm font-medium text-white">{step.detail}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* The Guarantee */}
            <section className="py-32 bg-brand-dark-grey relative z-10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-6 block"
                            >
                                The Promise
                            </motion.span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                                Zero Stress.<br />Guaranteed.
                            </h2>
                            <p className="text-brand-text-muted text-lg leading-relaxed mb-8">
                                We are so confident in our engineering process that we offer the industry's most comprehensive support package. If a component fails within the first year, we replace it. If the software glitches, we fix it remote-instantly.
                            </p>
                        </div>
                        <div className="relative h-64 md:h-full min-h-[300px] border border-white/10 rounded-[40px] flex items-center justify-center bg-brand-black overflow-hidden">
                            {/* Abstract Visualization of 'Certified' */}
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                            <div className="w-48 h-48 rounded-full border-2 border-brand-accent flex items-center justify-center relative">
                                <div className="absolute inset-0 border border-brand-accent rounded-full animate-ping opacity-20" />
                                <div className="text-center">
                                    <div className="text-5xl font-black text-white mb-1">100%</div>
                                    <div className="text-[10px] uppercase tracking-widest text-brand-accent">Uptime Goal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-32 relative z-10">
                <Container className="text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-10">
                        We are ready to build.
                    </h2>
                    <Link
                        href="/get-started"
                        className="inline-block bg-brand-accent text-brand-black px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:scale-105 hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(255,145,77,0.3)]"
                    >
                        Initiate Assessment
                    </Link>
                </Container>
            </section>

            <Footer />
        </div>
    );
}
