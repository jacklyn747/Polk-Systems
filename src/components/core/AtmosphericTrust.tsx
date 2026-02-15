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
        desc: "Your home works even if the internet doesn't. Everything stays local.",
        icon: "WifiOff"
    },
    {
        id: "02",
        title: "Data you keep.",
        desc: "Your habits aren't a product. Sensor data stays in your home, and only your home.",
        icon: "ShieldAlert"
    },
    {
        id: "03",
        title: "One simple buy.",
        desc: "No monthly fees. No fine print. Just a better, more private home.",
        icon: "CreditCard"
    }
];

export const AtmosphericTrust = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !rightColRef.current || !featuresRef.current) return;

        const ctx = gsap.context(() => {
            // Feature Highlights on Scroll
            if (featuresRef.current) {
                const features = featuresRef.current.children;
                Array.from(features).forEach((feature, i) => {
                    gsap.fromTo(feature,
                        { opacity: 0.3, scale: 0.95 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.5,
                            scrollTrigger: {
                                trigger: feature,
                                start: "top center+=100",
                                end: "bottom center-=100",
                                toggleActions: "play reverse play reverse",
                            }
                        }
                    );
                });
            }

            // Image "Lighting Up" Effect on Scroll
            if (rightColRef.current) {
                const imageContainer = rightColRef.current.querySelector('.image-container');
                const glowOverlay = rightColRef.current.querySelector('.glow-overlay');

                if (imageContainer && glowOverlay) {
                    // Gradually remove grayscale and enhance colors
                    gsap.fromTo(imageContainer,
                        { filter: "grayscale(100%) contrast(125%)" },
                        {
                            filter: "grayscale(0%) contrast(110%) brightness(110%) saturate(150%)",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top center",
                                end: "center center",
                                scrub: 1,
                            }
                        }
                    );

                    // Reveal the warm glow overlay
                    gsap.fromTo(glowOverlay,
                        { opacity: 0 },
                        {
                            opacity: 1,
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top center",
                                end: "center center",
                                scrub: 1,
                            }
                        }
                    );
                }
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="why-we-are-different" ref={sectionRef} className="relative bg-white text-black border-t border-black/5">
            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* Left Side: Scrollable Content (Takes up 2/3) */}
                <div className="lg:w-2/3 px-8 md:px-20 py-32 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto lg:mx-0">
                        <div className="mb-24">
                            <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase block mb-6">Why we're different</span>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                                Privacy is the <br />
                                <span className="font-serif italic font-normal normal-case tracking-normal text-brand-accent">Standard.</span>
                            </h2>
                            <p className="text-black/40 text-xl font-medium mt-8 leading-relaxed">
                                We built Polk for the moments that matter most. <br />
                                <span className="text-brand-accent font-bold">Unseen. Unheard. Unbroken.</span>
                            </p>
                        </div>

                        <div ref={featuresRef} className="flex flex-col gap-12">
                            {points.map((p, i) => (
                                <div key={p.id} className="group border-l-2 border-black/5 pl-8 py-4 transition-all hover:border-brand-accent">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-black tracking-widest text-brand-accent/50 uppercase group-hover:text-brand-accent transition-all">
                                                0{i + 1}
                                            </span>
                                            <h3 className="text-3xl font-black uppercase tracking-tight group-hover:tracking-normal transition-all duration-500">
                                                {p.title}
                                            </h3>
                                        </div>
                                        <p className="text-black/50 text-base font-bold leading-relaxed uppercase group-hover:text-black transition-colors">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Sticky Image (Takes up 1/3, Full Bleed) */}
                <div ref={rightColRef} className="hidden lg:block lg:w-1/3 h-[50vh] lg:h-screen sticky top-0 right-0">
                    <div className="relative w-full h-full group overflow-hidden">
                        <div className="image-container absolute inset-0">
                            <Image
                                src="/hero-ultra-hd.png"
                                alt="The Sanctuary"
                                fill
                                className="object-cover group-hover:contrast-110 group-hover:brightness-110 group-hover:saturate-150 transition-all duration-[2000ms] ease-out"
                            />
                        </div>

                        {/* Warm Glow Overlay (Fire/Lighting Simulation) */}
                        <div className="glow-overlay absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/40 via-transparent to-transparent mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-[2000ms] ease-out pointer-events-none" />

                        {/* Dark Gradient for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000"></div>

                        <div className="absolute bottom-12 left-12 z-20">
                            <div className="text-white text-6xl font-black tracking-tighter uppercase mb-2 group-hover:text-brand-accent transition-colors duration-1000">100%</div>
                            <div className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase group-hover:text-white transition-colors duration-1000">Local Execution</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
