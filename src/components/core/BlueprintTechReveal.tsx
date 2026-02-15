"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';

export const BlueprintTechReveal = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const realisticRef = useRef<HTMLDivElement>(null);
    const wireframeRef = useRef<HTMLDivElement>(null);
    const scanLineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !realisticRef.current || !wireframeRef.current || !scanLineRef.current) return;

        const ctx = gsap.context(() => {
            // Pin the section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=800%", // Significantly longer scroll distance (8x)
                    pin: true,
                    scrub: 1,
                }
            });

            // The Reveal Animation
            tl.fromTo(wireframeRef.current,
                { clipPath: "inset(0% 0% 100% 0%)" },
                { clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "none" } // Slower relative to total time
            )
                .to(scanLineRef.current,
                    { top: "100%", duration: 2, ease: "none" },
                    "<"
                )
                // HOLD PHASE: Keep the wireframe visible for 33% of the scroll distance
                .to({}, { duration: 1 });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen bg-black overflow-hidden">
            {/* 1. Base Layer: Realistic Home */}
            <div ref={realisticRef} className="absolute inset-0 z-10">
                <Image
                    src="/hero-realistic.png"
                    alt="Polk Home Realistic"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Dimmer */}
            </div>

            {/* 2. Top Layer: Wireframe Blueprint (Revealed via ClipPath) */}
            <div ref={wireframeRef} className="absolute inset-0 z-20 bg-black">
                <Image
                    src="/hero-wireframe.png"
                    alt="Polk Home Wireframe"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" /> {/* Blueprint Tint */}
            </div>

            {/* 3. The Scanning Laser Line */}
            <div
                ref={scanLineRef}
                className="absolute left-0 right-0 h-2 bg-brand-accent z-30 shadow-[0_0_50px_4px_rgba(255,87,34,0.8)]"
                style={{ top: "0%" }}
            />

            {/* 4. Text Overlay (Optional, sits on top) */}
            <Container className="relative z-40 h-full flex flex-col justify-center pointer-events-none">
                <h2 className="text-8xl text-white font-black uppercase tracking-tighter mix-blend-difference">
                    See the <br />
                    <span className="text-brand-accent">Unseen.</span>
                </h2>
            </Container>
        </section>
    );
};
