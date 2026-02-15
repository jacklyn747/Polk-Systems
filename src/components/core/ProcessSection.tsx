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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <Link href={step.href} key={step.id} className="process-step group p-10 bg-brand-dark-grey rounded-[40px] border border-white/5 hover:border-brand-accent transition-all duration-500 flex flex-col h-full shadow-premium cursor-pointer relative overflow-hidden">
                            <span className="text-brand-accent text-xs font-black tracking-widest mb-12">{step.id}</span>
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-4 mt-auto group-hover:text-brand-accent transition-colors">{step.title}</h3>
                            <p className="text-white/40 text-sm font-bold leading-relaxed uppercase group-hover:text-white transition-colors">{step.desc}</p>

                            <div className="mt-8 pt-8 border-t border-white/5 group-hover:border-brand-accent/20 transition-colors">
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm group-hover:bg-brand-accent group-hover:text-black transition-all">
                                    →
                                </div>
                            </div>

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
};
