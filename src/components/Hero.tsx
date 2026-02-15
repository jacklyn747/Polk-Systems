"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TechnicalHeading } from "./core/TechnicalHeading";

const SystemStatus = ({ progress }: { progress: number }) => {
    const [status, setStatus] = useState("SYSTEM: ONLINE");
    const [color, setColor] = useState("text-brand-accent");

    useEffect(() => {
        if (progress < 0.3) {
            setStatus("SYSTEM: ONLINE");
            setColor("text-brand-accent");
        } else if (progress < 0.6) {
            setStatus("ENCRYPTING LOCAL DATA...");
            setColor("text-yellow-500");
        } else {
            setStatus("SECURE LINK ESTABLISHED");
            setColor("text-green-500");
        }
    }, [progress]);

    return (
        <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.2em] uppercase py-2">
            <div className={`w-1.5 h-1.5 rounded-none ${progress > 0.6 ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-brand-accent animate-pulse'}`}></div>
            <span className={`${color} transition-colors duration-300`}>{status}</span>
        </div>
    );
};

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const mainImageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Track Scroll Progress for System Status
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom center",
                onUpdate: (self) => setScrollProgress(self.progress),
            });

            // Parallax on Main Image
            gsap.to(mainImageRef.current, {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Text Parallax & Fade
            gsap.to(textRef.current, {
                yPercent: 20,
                opacity: 0.2,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "50% top",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen bg-brand-black text-brand-white border-b border-white/10 pt-20">
            {/* Main Hero Container: 4-Column Grid Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[calc(100vh-80px)]">

                {/* Left Header Cell (3 Columns) */}
                <div className="lg:col-span-3 relative border-r border-white/10 flex flex-col justify-between overflow-hidden">

                    {/* Top Meta Bar */}
                    <div className="border-b border-white/10 p-8 flex justify-between items-center bg-black/20 backdrop-blur-sm z-30">
                        <SystemStatus progress={scrollProgress} />
                        <div className="hidden lg:flex items-center gap-8 text-[10px] font-black tracking-widest text-white/60 uppercase">
                            <span>COORDS: 40.7128° N, 74.0060° W</span>
                            <span>VERSION: 2.0.4-STABLE</span>
                        </div>
                    </div>

                    {/* Background Image (Parallax) */}
                    <div ref={mainImageRef} className="absolute inset-0 z-10 scale-110">
                        <Image
                            src="/hero-ultra-hd.png"
                            alt="Polk Home"
                            fill
                            sizes="100vw"
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
                        <div className="absolute inset-0 polk-grid-overlay opacity-20" />
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-20 p-8 md:p-20 mt-auto">
                        <div ref={textRef} className="mb-12">
                            <TechnicalHeading
                                text="Your home."
                                className="text-[12vw] md:text-[10vw]"
                                delay={0.2}
                            />
                            <TechnicalHeading
                                text="Truly yours."
                                className="text-[12vw] md:text-[10vw] text-white/20"
                                delay={0.6}
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 items-baseline max-w-4xl">
                            <div className="flex-1">
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">The Sovereign Collection</h3>
                                <p className="text-white/60 text-xs font-bold leading-loose uppercase tracking-widest max-w-md">
                                    Privacy is no longer a feature. <br />
                                    It is the foundation of the modern sanctuary. <br />
                                    Built for local autonomy.
                                </p>
                            </div>
                            <Link href="/story" className="group flex items-center gap-6 text-xs font-black uppercase tracking-[0.4em] text-brand-accent hover:text-white transition-colors duration-500 pb-2 border-b border-brand-accent/30 hover:border-white">
                                Read our story
                                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Visual Coordinate Markers */}
                    <div className="absolute bottom-8 left-8 text-[8px] font-mono opacity-20 uppercase tracking-widest vertical-rl hidden lg:block">
                        LAT_40.71_LNG_-74.00_INDEX_001
                    </div>
                </div>

                {/* Right Feature Column (1 Column) */}
                <div className="lg:col-span-1 flex flex-col">

                    {/* Feature Cell 1: The Brain */}
                    <Link href="/technology" className="flex-1 border-b border-white/10 p-12 group hover:bg-white/5 transition-colors relative overflow-hidden">
                        <span className="text-brand-accent text-[10px] font-black tracking-widest uppercase mb-12 block">Tech_01</span>
                        <h2 className="text-4xl leading-[1] font-black tracking-tighter text-white uppercase mb-6 group-hover:scale-105 transition-transform duration-700">
                            The Local <br />
                            <span className="text-white/20">Brain.</span>
                        </h2>
                        <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-loose max-w-[200px]">
                            No WiFi needed for core privacy. Your data stays on-prem.
                        </p>
                        <div className="absolute bottom-12 right-12 text-2xl font-light opacity-0 group-hover:opacity-100 transition-opacity">↗</div>
                    </Link>

                    {/* Feature Cell 2: Get Started */}
                    <Link href="/get-started" className="h-64 md:h-80 bg-brand-accent p-12 group hover:bg-white transition-colors flex flex-col justify-between relative overflow-hidden">
                        <div className="flex justify-between items-start">
                            <span className="text-black text-[10px] font-black tracking-widest uppercase opacity-60">Action_02</span>
                            <span className="text-4xl text-black font-light group-hover:translate-x-2 transition-transform">→</span>
                        </div>
                        <div>
                            <span className="text-black text-[10px] font-black uppercase tracking-widest opacity-40 block mb-2">Next Step</span>
                            <h2 className="text-4xl text-black font-black uppercase tracking-tighter leading-none">Get Started</h2>
                        </div>
                    </Link>

                    {/* Stats Ticker (Hidden on mobile, visible on desktop at bottom of right col) */}
                    <div className="p-12 border-b border-white/10 hidden lg:block">
                        <div className="space-y-8">
                            <div>
                                <div className="text-2xl font-black text-white/50 tracking-tighter leading-none mb-2">0 SEC</div>
                                <div className="text-[10px] font-black tracking-widest uppercase text-white/30">Network Latency</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-white/50 tracking-tighter leading-none mb-2">100%</div>
                                <div className="text-[10px] font-black tracking-widest uppercase text-white/30">Data Retention</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient Background Glow (Subtle) */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
        </section>
    );
}

