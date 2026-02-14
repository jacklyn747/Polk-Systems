"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const BlueprintTechReveal = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const xrayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!containerRef.current || !xrayRef.current) return;

        // X-Ray Wipe Scroll Animation
        gsap.to(xrayRef.current, {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });
    }, []);

    return (
        <section ref={containerRef} className="relative h-[80vh] w-full bg-black overflow-hidden border-y border-white/10">

            {/* The "Normal" High-End Photo Layer */}
            <div className="absolute inset-0 z-10 grayscale-[0.5]">
                <img
                    src="/hero-ultra-hd.png"
                    alt="Luxury Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* The "Technical" Blueprint Layer (Revealed via ClipPath) */}
            <div
                ref={xrayRef}
                className="absolute inset-0 z-20 overflow-hidden"
                style={{ clipPath: "inset(0% 100% 0% 0%)" }} // Starts hidden from right
            >
                <div className="w-full h-full bg-brand-black polk-grid-overlay opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Simplified Labels */}
                    <div className="absolute top-1/4 left-1/4 p-4 border border-brand-accent/20 text-brand-accent font-black text-[0.6rem] tracking-widest uppercase bg-black/40 backdrop-blur-sm rounded-full px-6">
                        Smart Climate
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 p-4 border border-brand-accent/20 text-brand-accent font-black text-[0.6rem] tracking-widest uppercase bg-black/40 backdrop-blur-sm rounded-full px-6">
                        Secure Signal
                    </div>
                </div>
            </div>

            {/* Label Blocks */}
            <div className="absolute top-12 left-12 z-30 flex flex-col gap-1">
                <span className="text-brand-accent font-black text-[0.7rem] tracking-widest uppercase">The System</span>
                <h3 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter">What you don't <br /> see matters.</h3>
            </div>

            <div className="absolute bottom-12 right-12 z-30 text-white/40 text-[0.6rem] font-bold tracking-[0.3em] uppercase">
                Scroll to explore
            </div>

        </section>
    );
};
