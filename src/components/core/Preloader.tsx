"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Preloader = ({ onComplete }: { onComplete?: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [statusText, setStatusText] = useState("");
    const [isVisible, setIsVisible] = useState(true);

    const STATUS_MESSAGES = [
        "BOOTING_LOCAL_SOVEREIGN...",
        "ENCRYPTING_MESH_NODES...",
        "STABILIZING_SENSORY_ARRAY...",
        "SYSTEM_ARMED_V4.0",
        "WELCOME_HOME"
    ];

    useEffect(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({
            onComplete: () => {
                // Final reveal animation
                gsap.to(containerRef.current, {
                    y: "-100%",
                    duration: 1.2,
                    ease: "expo.inOut",
                    onComplete: () => {
                        setIsVisible(false);
                        if (onComplete) onComplete();
                        document.body.style.overflow = "auto";
                    }
                });
            }
        });

        // Lock scroll
        document.body.style.overflow = "hidden";

        // 1. Initial Line Draw
        tl.set(lineRef.current, { scaleX: 0, opacity: 1 });
        tl.to(lineRef.current, {
            scaleX: 1,
            duration: 0.8,
            ease: "circ.inOut"
        });

        // 2. Scan effect & Grid reveal
        tl.to(lineRef.current, {
            y: "50vh",
            duration: 0.4,
            opacity: 0.5,
            ease: "none"
        }, "+=0.1");
        
        tl.to(lineRef.current, {
            y: "-50vh",
            duration: 0.4,
            opacity: 0,
            ease: "none"
        });

        // 3. Logo Assembly
        const dots = logoRef.current?.querySelectorAll(".loader-dot");
        if (dots) {
            tl.fromTo(dots, 
                { opacity: 0, scale: 0 },
                { 
                    opacity: (i) => i === 4 ? 1 : 0.4, 
                    scale: 1, 
                    duration: 0.4, 
                    stagger: 0.05,
                    ease: "back.out(2)" 
                }, 
                "-=0.2"
            );
        }

        // 4. Status Text Narrative
        STATUS_MESSAGES.forEach((msg, i) => {
            tl.to({}, {
                duration: 0.35,
                onStart: () => setStatusText(msg)
            });
        });

        // 5. Success State
        tl.to(logoRef.current, {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
        });
        
        tl.to(".loader-dot-center", {
            backgroundColor: "#ff6b2b",
            boxShadow: "0 0 20px rgba(255, 107, 43, 0.5)",
            duration: 0.2
        });

    }, []);

    if (!isVisible) return null;

    return (
        <div 
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-brand-black flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Architectural Grid */}
            <div className="absolute inset-0 polk-architectural-grid opacity-10 pointer-events-none" />
            
            {/* Horizontal Scan Line */}
            <div 
                ref={lineRef}
                className="absolute w-full h-[1px] bg-brand-accent/50 z-20 top-1/2 left-0"
            />

            {/* Logo Mark */}
            <div ref={logoRef} className="relative z-10 mb-8">
                <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className={`loader-dot w-2 h-2 rounded-none bg-white transition-colors duration-500 ${
                                i === 4 ? "loader-dot-center" : ""
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Diagnostic Text */}
            <div className="h-4 flex items-center justify-center">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent animate-pulse">
                    {statusText}
                </p>
            </div>

            {/* Corner Coordinates */}
            <div className="absolute top-10 left-10 text-[8px] font-black tracking-widest text-white/20 uppercase">
                LAT: 29.7604° N <br />
                LNG: 95.3698° W
            </div>
            <div className="absolute bottom-10 right-10 text-[8px] font-black tracking-widest text-white/20 uppercase text-right">
                PK_HUB_01 <br />
                V4.0.2_LOCAL
            </div>
        </div>
    );
};
