"use client";

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
    {
        id: "01",
        title: "Sovereignty Audit",
        desc: "We analyze your physical architecture and digital vulnerabilities to design your custom local-mesh."
    },
    {
        id: "02",
        title: "Cortex Deployment",
        desc: "Private installation of your local NUC node. No cloud configuration. No external pinging."
    },
    {
        id: "03",
        title: "Edge Activation",
        desc: "Your devices are bridged to the local LAN, encrypted with AES-256, and air-gapped from corporate servers."
    },
    {
        id: "04",
        title: "Sanctuary Handover",
        desc: "Zero-knowledge encryption keys are generated and handed over. You are the only person with access."
    }
];

export const ProcessSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".process-step",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section id="the-process" ref={sectionRef} className="py-32 bg-brand-black text-brand-white border-y border-white/5 relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 polk-grid-overlay opacity-10 pointer-events-none" />

            <Container>
                <div className="flex flex-col items-center text-center mb-24">
                    <span className="text-brand-accent text-xs font-black tracking-[0.5em] uppercase mb-4">[ 04 ] THE_PROTOCOL</span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                        Our <span className="font-serif italic normal-case tracking-normal text-brand-accent">Sovereign</span> Process
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="process-step group p-8 bg-brand-dark-grey rounded-[40px] border border-white/5 hover:border-brand-accent transition-all duration-500 flex flex-col h-full">
                            <span className="text-brand-accent text-xs font-black tracking-widest mb-12">STEP / {step.id}</span>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-6 mt-auto">{step.title}</h3>
                            <p className="text-white/40 text-sm font-bold leading-relaxed uppercase">{step.desc}</p>

                            <div className="mt-8 pt-8 border-t border-white/5 group-hover:border-brand-accent/20 transition-colors">
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] group-hover:bg-brand-accent group-hover:text-black transition-all">
                                    →
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
