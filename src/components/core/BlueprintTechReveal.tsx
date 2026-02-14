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
                    src="/assets/images/calm_interior.png"
                    alt="Luxury Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* The "Technical" Blueprint Layer (Revealed via ClipPath) */}
            <div
                ref={xrayRef}
                className="absolute inset-0 z-20 overflow-hidden"
                style={{ clipPath: "inset(0% 100% 0% 0%)" }} // Starts hidden from right
            >
                <div className="w-full h-full bg-brand-black polk-grid-overlay opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="polk-plus-marker text-brand-accent w-24 h-24" />
                    {/* Simplified "Wireframe" HUD elements */}
                    <div className="absolute top-1/4 left-1/4 p-4 border border-brand-accent/20 text-brand-accent font-black text-[0.6rem] tracking-widest uppercase">
                        HVAC_CONTROL_NODE_01
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 p-4 border border-brand-accent/20 text-brand-accent font-black text-[0.6rem] tracking-widest uppercase">
                        ENCRYPTED_SIGNAL_V.2
                    </div>
                </div>
            </div>

            {/* Label Blocks */}
            <div className="absolute top-12 left-12 z-30 flex flex-col gap-1">
                <span className="text-brand-accent font-black text-[0.7rem] tracking-widest uppercase">[ X-RAY_PROTOCOL ]</span>
                <h3 className="text-white text-3xl font-black uppercase tracking-tighter">Invisible <br /> Infrastructure</h3>
            </div>

            <div className="absolute bottom-12 right-12 z-30 text-white/40 text-[0.6rem] font-bold tracking-[0.3em] uppercase">
                SCROLL_TO_AUDIT_TECH
            </div>

        </section>
    );
};
