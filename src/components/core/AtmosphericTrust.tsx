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
                        { opacity: 0.1, x: -20 },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            scrollTrigger: {
                                trigger: feature,
                                start: "top 80%",
                                end: "bottom 20%",
                                toggleActions: "play reverse play reverse",
                            }
                        }
                    );
                });
            }

            // Image Hover Interaction
            const imageContainer = rightColRef.current?.querySelector('.image-container');
            const glowOverlay = rightColRef.current?.querySelector('.glow-overlay');

            if (imageContainer && glowOverlay) {
                gsap.set(imageContainer, { filter: "grayscale(100%) contrast(125%)" });
                gsap.set(glowOverlay, { opacity: 0 });

                const handleMouseEnter = () => {
                    gsap.to(imageContainer, {
                        filter: "grayscale(0%) contrast(110%) brightness(110%) saturate(150%)",
                        duration: 1.5,
                        ease: "power2.out"
                    });
                    gsap.to(glowOverlay, {
                        opacity: 1,
                        duration: 1.5,
                        ease: "power2.out"
                    });
                };

                const handleMouseLeave = () => {
                    gsap.to(imageContainer, {
                        filter: "grayscale(100%) contrast(125%)",
                        duration: 1.5,
                        ease: "power2.inOut"
                    });
                    gsap.to(glowOverlay, {
                        opacity: 0,
                        duration: 1.5,
                        ease: "power2.inOut"
                    });
                };

                rightColRef.current?.addEventListener('mouseenter', handleMouseEnter);
                rightColRef.current?.addEventListener('mouseleave', handleMouseLeave);
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="why-we-are-different" ref={sectionRef} className="relative bg-brand-black text-brand-white border-t border-white/10 overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 polk-architectural-grid opacity-10 pointer-events-none" />

            <div className="flex flex-col lg:flex-row min-h-screen relative z-10">

                {/* Left Side: Scrollable Content (Takes up 2/3) */}
                <div className="lg:w-2/3 px-8 md:px-24 py-32 flex flex-col justify-center">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <div className="mb-24">
                            <span className="text-brand-accent text-[10px] font-black tracking-[0.4em] uppercase block mb-8">Why we're different</span>
                            <h2 className="text-5xl md:text-[8vw] font-black tracking-tighter uppercase leading-[0.8] mb-12">
                                Absolute <br />
                                <span className="text-white/20">Sovereignty.</span>
                            </h2>
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose max-w-lg mb-12">
                                We built Polk for the moments that matter most. <br />
                                Private by nature. Built for local autonomy.
                            </p>
                        </div>

                        <div ref={featuresRef} className="space-y-px bg-white/10 border border-white/10">
                            {points.map((p, i) => (
                                <div key={p.id} className="polk-hover-line group bg-brand-black p-12 transition-all hover:bg-white/[0.02]">
                                    <div className="polk-hover-line-content flex flex-col gap-6">
                                        <div className="flex items-center gap-6">
                                            <span className="text-[8px] font-black tracking-widest text-brand-accent uppercase">
                                                PROTOCOL_0{i + 1}
                                            </span>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-brand-accent transition-colors duration-500">
                                                {p.title}
                                            </h3>
                                        </div>
                                        <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose max-w-md">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Sticky Image (Takes up 1/3, Full Bleed) */}
                <div ref={rightColRef} className="hidden lg:block lg:w-1/3 h-[50vh] lg:h-screen sticky top-0 right-0 border-l border-white/10">
                    <div className="relative w-full h-full group overflow-hidden">
                        <div className="image-container absolute inset-0">
                            <Image
                                src="/hero-ultra-hd.png"
                                alt="The Sanctuary"
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-cover group-hover:contrast-110 group-hover:brightness-110 group-hover:saturate-150 transition-all duration-[2000ms] ease-out"
                            />
                        </div>

                        {/* Warm Glow Overlay */}
                        <div className="glow-overlay absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-[2000ms] ease-out pointer-events-none" />

                        {/* Dark Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>

                        <div className="absolute bottom-12 left-12 z-20">
                            <div className="text-white text-6xl font-black tracking-tighter uppercase mb-2 group-hover:text-brand-accent transition-colors duration-1000">100%</div>
                            <div className="text-brand-accent text-[10px] font-black tracking-[0.4em] uppercase group-hover:text-white transition-colors duration-1000">Local Execution</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
