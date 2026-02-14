"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

const points = [
    {
        id: "01",
        title: "No Cloud. No Trap.",
        desc: "Your home works even if the internet doesn't. Everything stays local."
    },
    {
        id: "02",
        title: "Data you keep.",
        desc: "Your habits aren't a product. Sensor data stays in your home, and only your home."
    },
    {
        id: "03",
        title: "One simple buy.",
        desc: "No monthly fees. No fine print. Just a better, more private home."
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
        <section id="why-we-are-different" ref={sectionRef} className="py-32 bg-white text-black border-t border-black/5">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left Side: Points List */}
                    <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-8">
                        <div>
                            <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase">Why we're different</span>
                            <h2 className="text-5xl md:text-7xl font-black mt-6 tracking-tighter uppercase leading-[0.85]">
                                Privacy is the <br />
                                <span className="font-serif italic font-normal normal-case tracking-normal text-brand-accent text-6xl md:text-8xl">Standard.</span>
                            </h2>
                            <p className="text-black/40 text-lg font-medium mt-8 max-w-lg uppercase italic">We built Polk for the moments that matter most.</p>
                        </div>

                        <div className="mt-12 flex flex-col gap-0 border-t border-black/10">
                            {points.map((p) => (
                                <div key={p.id} className="group border-b border-black/10 py-10 transition-colors hover:bg-black/[0.02] px-4">
                                    <div className="flex gap-8 items-start">
                                        <span className="text-xs font-black tracking-widest opacity-20 uppercase group-hover:text-brand-accent group-hover:opacity-100 transition-all">{p.id}</span>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase tracking-tight">{p.title}</h3>
                                            <p className="text-black/50 text-sm font-bold mt-3 max-w-lg leading-relaxed uppercase">{p.desc}</p>
                                        </div>
                                        <span className="ml-auto text-2xl font-light opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="lg:col-span-5 relative aspect-[3/4] rounded-[40px] overflow-hidden group shadow-premium">
                        <Image
                            src="/hero-ultra-hd.png"
                            alt="The Sanctuary"
                            fill
                            className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
                        <div className="absolute bottom-12 left-12 right-12 z-10">
                            <h3 className="text-xl font-bold uppercase tracking-tight text-white">Truly Private</h3>
                            <p className="text-brand-accent text-xs font-black tracking-[0.2em] mt-2 uppercase">Local First Operations</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
