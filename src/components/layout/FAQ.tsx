"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { useState } from "react";
import { QuickContactForm } from "@/components/forms/QuickContactForm";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: "01",
        question: "How long does it take?",
        answer: "Most projects take 4 to 8 weeks. This depends on how much you want to build."
    },
    {
        id: "02",
        question: "Do I need to be there during the work?",
        answer: "No. We handle everything from start to finish. We will send you updates often."
    },
    {
        id: "03",
        question: "Can I add more later?",
        answer: "Yes. Our system is easy to update. You can add new devices whenever you want."
    },
    {
        id: "04",
        question: "Do you offer just design help?",
        answer: "Yes. We can help you plan your smart home even if you are not ready to build yet."
    },
    {
        id: "05",
        question: "How do I start?",
        answer: "Contact us through our site. We will schedule a time to talk about your home."
    }
];

function FAQAccordionItem({ faq, idx }: { faq: FAQItem; idx: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            key={faq.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-10 hover:bg-white/[0.02] transition-all relative cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            role="button"
            aria-expanded={isOpen}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }
            }}
        >
            <div className="absolute top-0 left-0 polk-plus-marker opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex gap-12 items-start">
                <span className="text-[8px] font-mono text-brand-accent pt-1">DATA_{faq.id}</span>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h3 className={`text-lg font-bold tracking-widest uppercase mb-4 transition-colors font-sans ${isOpen ? "text-brand-accent" : "text-white/80 group-hover:text-brand-accent"}`}>
                            {faq.question}
                        </h3>
                        <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-brand-accent text-xl font-light flex-shrink-0 ml-4"
                        >
                            +
                        </motion.span>
                    </div>
                    <motion.div
                        initial={false}
                        animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="text-brand-text-muted text-sm leading-relaxed max-w-md font-medium uppercase tracking-wider font-sans pb-2">
                            {faq.answer}
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export function FAQ() {
    return (
        <section id="faq" className="bg-brand-black text-brand-white relative overflow-hidden scroll-mt-32 pt-12 md:pt-0">
            {/* Grid Overlay */}
            <div className="absolute inset-0 polk-architectural-grid opacity-10 pointer-events-none" />

            {/* Support Header Grid Row */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-[1px] bg-white/10 border-b border-white/10 relative z-10">
                <div className="md:col-span-1 border-r border-white/10 flex items-center justify-center py-12 md:py-0">
                    <span className="polk-side-text">SUPPORT CORE</span>
                </div>
                <div className="md:col-span-7 bg-brand-black p-12 md:p-20 relative">
                    <div className="absolute top-0 left-0 polk-plus-marker" />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-brand-accent font-sans">Support Guide <sup>04</sup></h2>
                        <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight max-w-2xl leading-[1.1] text-white">
                            Common <span className="text-brand-text-muted italic">Questions.</span>
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* FAQ List Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-[1px] bg-white/10 border-b border-white/10 relative z-10">
                <div className="lg:col-span-1 bg-brand-black border-r border-white/10 flex lg:flex-col items-center justify-between p-8">
                    <span className="polk-side-text !rotate-0 [writing-mode:horizontal-tb] !text-[8px]">LOG_01</span>
                    <span className="polk-side-text hidden lg:block">REFERENCE GUIDES</span>
                    <span className="polk-side-text !rotate-0 [writing-mode:horizontal-tb] !text-[8px]">LOG_05</span>
                </div>

                <div className="lg:col-span-4 bg-brand-black">
                    <div className="divide-y divide-white/10">
                        {faqs.map((faq, idx) => (
                            <FAQAccordionItem key={faq.id} faq={faq} idx={idx} />
                        ))}
                    </div>
                </div>

                {/* Concierge Right Block */}
                <div className="lg:col-span-3 bg-brand-black flex flex-col items-stretch">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex-grow p-12 border-l border-white/10 relative flex flex-col justify-between group cursor-pointer overflow-hidden"
                    >
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />

                        <div>
                            <span className="text-brand-accent text-[9px] font-mono block mb-2">INTERFACE_CONCIERGE</span>
                            <h3 className="text-3xl font-display font-light tracking-tight leading-tight uppercase text-white">
                                Talk To A <span className="text-brand-text-muted">Designer.</span>
                            </h3>
                        </div>

                        <div className="relative aspect-video bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors my-12 overflow-hidden">
                            <div className="absolute inset-0 polk-grid-overlay opacity-20" />
                            <span className="text-[10px] font-bold tracking-[1em] text-white/20 uppercase font-sans">Scanning Protocol</span>
                            <div className="absolute bottom-4 left-4 flex gap-1">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-1 h-3 bg-brand-accent animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-6 font-sans">Still have questions?</p>
                            <QuickContactForm source="faq" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Status Bar Footer */}
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white/10 gap-[1px]">
                {[
                    { l: "Doc Version", v: "4.12.0" },
                    { l: "Last Synced", v: "2m ago" },
                    { l: "Uptime", v: "99.998%" },
                    { l: "Global Nodes", v: "Active" }
                ].map((stat, i) => (
                    <div key={i} className="bg-brand-black p-6 flex flex-col gap-1">
                        <span className="text-brand-text-muted text-[8px] uppercase tracking-widest font-bold">{stat.l}</span>
                        <span className="text-white text-[10px] font-bold tracking-widest uppercase">{stat.v}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
