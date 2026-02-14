"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

const vulnerabilities = [
    {
        id: "01",
        title: "The Cloud Trap",
        desc: "External servers are vulnerabilities. When their cloud goes down, your home dies with it."
    },
    {
        id: "02",
        title: "Data Harvesting",
        desc: "Mainstream 'smart' devices are corporate informants. Your habits are their product."
    },
    {
        id: "03",
        title: "Permanent Access",
        desc: "Without local sovereignty, you are a tenant in your own home, paying rent for privacy."
    }
];

export const AtmosphericTrust = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(contentRef.current?.children || [],
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                }
            }
        );
    }, []);

    return (
        <section id="why-we-are-different" ref={sectionRef} className="py-32 bg-brand-black text-brand-white border-t border-white/5">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left Side: Vunerabilities List (Figma FAQ Style) */}
                    <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-8">
                        <div>
                            <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase">[ 02 ] THE VULNERABILITY</span>
                            <h2 className="text-5xl md:text-7xl font-black mt-6 tracking-tighter uppercase leading-[0.85]">
                                The End of the <br />
                                <span className="font-serif italic font-normal normal-case tracking-normal text-brand-accent">Surveillance</span> Era.
                            </h2>
                        </div>

                        <div className="mt-12 flex flex-col gap-0">
                            {vulnerabilities.map((v) => (
                                <div key={v.id} className="group border-t border-white/10 py-10 transition-colors hover:bg-white/[0.02] px-4 cursor-help">
                                    <div className="flex gap-8 items-start">
                                        <span className="text-xs font-black tracking-widest opacity-20 uppercase group-hover:text-brand-accent group-hover:opacity-100 transition-all">/{v.id}</span>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">{v.title}</h3>
                                            <p className="text-white/40 text-sm font-bold mt-4 max-w-lg leading-relaxed uppercase">{v.desc}</p>
                                        </div>
                                        <span className="ml-auto text-2xl font-light opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Atmospheric Image */}
                    <div className="lg:col-span-5 relative aspect-[3/4] rounded-[40px] overflow-hidden group">
                        <Image
                            src="/assets/images/calm_interior.png"
                            alt="The Sanctuary"
                            fill
                            className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-12 left-12 right-12">
                            <h3 className="text-xl font-bold uppercase tracking-tight">The Handoff</h3>
                            <p className="text-brand-accent text-xs font-black tracking-[0.2em] mt-2 uppercase">Zero_Access_Interface</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
