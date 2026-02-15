"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MagneticEffect } from '../ui/MagneticEffect';

export const PrivacyReveal = () => {
    const [isPowered, setIsPowered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial "Sleep" state to "Awake" flow
        const tl = gsap.timeline({ delay: 0.8 });

        // 1. Power On Pulse
        tl.to(containerRef.current, {
            "--atmosphere-exposure": 1.0,
            duration: 3,
            ease: "power2.inOut",
            onStart: () => setIsPowered(true)
        })
            .fromTo(".hero-side-text", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1 }, "-=1")
            .fromTo(".hero-title-part", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, stagger: 0.2, ease: "expo.out" }, "-=1.5")
            .fromTo(".hero-block-item", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.5, stagger: 0.15 }, "-=1");

    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen bg-black overflow-hidden select-none polk-atmosphere-layer"
            style={{ "--atmosphere-exposure": 0.15 } as any}
        >

            {/* 1. Background Image (The Canvas) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                    src="/assets/images/calm_interior.png"
                    alt="Polk Sanctuary"
                    className="w-full h-full object-cover grayscale-[0.1]"
                />
            </div>

            {/* Power Status Marker (Floating) */}
            <div className="absolute top-12 right-12 z-50 flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full transition-all duration-1000 ${isPowered ? 'bg-brand-accent shadow-[0_0_15px_#FF7425]' : 'bg-white/10'}`} />
                <span className="text-[0.6rem] font-black tracking-widest text-white/40 uppercase">
                    System_{isPowered ? 'Active' : 'Standby'}
                </span>
            </div>

            {/* 2. Vertical Sidebar */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-12 hero-side-text">
                <div className="whitespace-nowrap -rotate-90 origin-center text-[0.65rem] font-bold tracking-[0.4em] text-white opacity-40">
                    ▾ SANCTUARY_PROTOCOL ▴
                </div>
                <div className="h-24 w-px bg-white/20" />
                <div className="whitespace-nowrap -rotate-90 origin-center text-[0.6rem] font-bold tracking-[0.2em] text-white opacity-40 uppercase">
                    © polksystems.io
                </div>
            </div>

            {/* 3. The Geometric Grid Layer */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
                <div className="polk-grid-container h-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="polk-grid-cell" />
                    ))}
                </div>
            </div>

            {/* 4. Asymmetrical Content Layer */}
            <div className="relative z-30 h-full w-full polk-grid-container">

                <div className="polk-grid-cell col-span-2 flex items-center">
                    <span className="text-white font-black text-xl tracking-tighter">polk</span>
                </div>
                <div className="polk-grid-cell col-span-8"></div>
                <div className="polk-grid-cell col-span-2 flex items-center justify-end pr-8">
                    <div className="flex flex-col items-end gap-1">
                        <div className="w-6 h-0.5 bg-white" />
                        <div className="w-4 h-0.5 bg-white" />
                    </div>
                </div>

                <div className="polk-grid-cell col-span-1 row-span-4"></div>
                <div className="polk-grid-cell col-span-10 row-span-4 flex flex-col justify-center border-none">
                    <div className="flex flex-col" style={{ transform: 'translateY(-5%)' }}>
                        <h1 className="hero-title-part text-[clamp(4rem,18vw,14rem)] font-black text-white leading-[0.7] tracking-[-0.05em] uppercase">
                            Sovereign
                        </h1>
                        <h1 className="hero-title-part text-[clamp(4rem,18vw,14rem)] font-black text-white leading-[0.7] tracking-[-0.05em] uppercase pl-[15vw]">
                            Home
                        </h1>
                    </div>
                </div>
                <div className="polk-grid-cell col-span-1 row-span-4"></div>

                {/* Scattered Info Blocks */}
                <div className="polk-grid-cell col-span-3 hero-block-item flex flex-col justify-end pb-8">
                    <div className="text-brand-accent text-[0.65rem] font-black tracking-[0.3em] mb-2">[ 01 ] OFFLINE_PROTOCOL</div>
                    <div className="text-white/60 text-[0.75rem] font-bold uppercase leading-relaxed">
                        The ultimate luxury is <br />
                        absolute invisibility.
                    </div>
                    <MagneticEffect strength={0.2} radius={80}>
                        <div className="mt-4 text-white text-[0.65rem] font-black tracking-widest border-b border-white/20 w-max pb-1 cursor-pointer hover:border-brand-accent transition-colors">
                            LEARN MORE ↘
                        </div>
                    </MagneticEffect>
                </div>

                <div className="polk-grid-cell col-span-6 flex items-center justify-center">
                    <div className="polk-plus-marker text-white/20 w-12 h-12" />
                </div>

                {/* The "CONTACT US" Magnetic Block */}
                <div className="polk-grid-cell col-span-3 bg-black/60 backdrop-blur-md hero-block-item group border-l-brand-accent/30 overflow-hidden">
                    <MagneticEffect strength={0.15} radius={150}>
                        <div className="h-full w-full p-8 flex flex-col justify-between items-start cursor-pointer transition-all hover:bg-brand-accent/5">
                            <div className="text-white/40 text-[0.6rem] font-bold tracking-[0.2em]">[ 02 ] START_CONSULT</div>
                            <div className="mb-4">
                                <div className="text-brand-accent text-3xl font-light mb-2">↘</div>
                                <div className="text-white font-black text-xl tracking-widest uppercase">
                                    Launch The Node
                                </div>
                            </div>
                        </div>
                    </MagneticEffect>
                </div>

                <div className="polk-grid-cell col-span-12 row-span-1 flex items-center justify-between px-8 text-white/10">
                    <div className="text-[0.55rem] font-bold tracking-widest uppercase">NODE_ARCHITECTURE_V.04</div>
                    <div className="text-[0.55rem] font-bold tracking-widest uppercase">EST_2026</div>
                </div>

            </div>

        </div>
    );
};
