"use client";

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const steps = [
    {
        id: "01",
        title: "Discover.",
        desc: "We learn how you live to design a home system that works for you.",
        href: "/process/discover"
    },
    {
        id: "02",
        title: "Setup.",
        desc: "Our experts install your local core. Everything stays in your home.",
        href: "/process/setup"
    },
    {
        id: "03",
        title: "Activate.",
        desc: "Your devices are linked to your private network. Secure and fast.",
        href: "/process/activate"
    },
    {
        id: "04",
        title: "Control.",
        desc: "You have the keys. We don't. That's what true privacy feels like.",
        href: "/process/control"
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
            {/* Subtle Clean Grid Overlay */}
            <div className="absolute inset-0 polk-grid-overlay opacity-5 pointer-events-none" />

            <Container>
                <div className="flex flex-col items-center text-center mb-24">
                    <span className="text-brand-accent text-xs font-black tracking-[0.5em] uppercase mb-4">The Process</span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                        How we build your <br />
                        <span className="font-serif italic normal-case tracking-normal text-brand-accent">Sanctuary.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
                    {steps.map((step) => (
                        <Link href={step.href} key={step.id} className="process-step polk-hover-line group p-12 lg:p-16 border-r border-white/10 last:border-r-0 border-b lg:border-b-0 hover:bg-white/5 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
                            <div className="polk-hover-line-content flex flex-col h-full">
                                <span className="text-brand-accent text-[10px] font-black tracking-[0.3em] uppercase mb-16 block">Phase_{step.id}</span>
                                <h3 className="text-3xl font-black uppercase tracking-tight mb-6 mt-auto text-white/40 group-hover:text-white transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-white/30 text-[10px] font-black leading-loose uppercase tracking-widest group-hover:text-white/60 transition-colors">
                                    {step.desc}
                                </p>

                                <div className="mt-12 flex items-center gap-4 transition-all duration-500">
                                    <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-brand-accent/50 transition-colors" />
                                    <span className="text-[10px] font-black tracking-widest uppercase text-white/20 group-hover:text-brand-accent">
                                        Expand ↗
                                    </span>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
};
