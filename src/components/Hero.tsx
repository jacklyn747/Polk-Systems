"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { SpotlightGrid } from "@/components/ui/SpotlightGrid";
import { MagneticButton } from "@/components/ui/MagneticButton";

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
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase border border-white/10 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
            <div className={`w-2 h-2 rounded-full ${progress > 0.6 ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-brand-accent animate-pulse'}`}></div>
            <span className={`${color} transition-colors duration-300`}>{status}</span>
        </div>
    );
};

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const mainCardRef = useRef<HTMLDivElement>(null);
    const sideCardRef = useRef<HTMLAnchorElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
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

            // Parallax Effects
            gsap.to(mainCardRef.current, {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.to(sideCardRef.current, {
                yPercent: -15, // Move differently to create depth
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
                yPercent: 30,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "50% top",
                    scrub: true,
                },
            });

            // Stats Reveal
            gsap.from(statsRef.current ? statsRef.current.children : [], {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 90%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen bg-brand-black text-brand-white pt-24 pb-12 overflow-hidden">
            {/* Immersive Canvas Grid */}
            <SpotlightGrid />

            <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full mt-4">
                {/* Main Hero Card - Left Side */}
                <div ref={mainCardRef} className="lg:col-span-8 relative aspect-[4/3] lg:aspect-auto lg:h-[85vh] bg-brand-dark-grey rounded-[40px] overflow-hidden group border border-white/5 shadow-premium will-change-transform">
                    <Image
                        src="/hero-ultra-hd.png"
                        alt="Polk Home"
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
                        priority
                    />

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 polk-grid-overlay opacity-20 pointer-events-none z-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

                    {/* System Status Ticker */}
                    <div className="absolute top-8 left-8 z-30 opacity-80 hover:opacity-100 transition-opacity">
                        <SystemStatus progress={scrollProgress} />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-30">

                        <h1 ref={textRef} className="text-[10vw] md:text-[8vw] leading-[0.95] font-black tracking-tighter text-white select-none uppercase mb-8 will-change-transform">
                            Your home.<br />Truly yours.
                        </h1>
                        <div className="flex justify-between items-end w-full mt-4 border-t border-white/10 pt-10">
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-tight">The Sovereign Collection</h3>
                                <p className="text-brand-white/50 text-sm font-medium mt-2">Privacy built into every room.</p>
                            </div>
                            <MagneticButton>
                                <Link href="/manifesto" className="inline-block text-xs font-black uppercase tracking-widest bg-white text-black px-10 py-5 rounded-full hover:bg-brand-accent hover:text-white transition-all duration-500">
                                    Read our story
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>

                {/* Right Side Grid - The Local Brain Feature */}
                <div className="lg:col-span-4 flex flex-col gap-6 h-full pointer-events-none lg:pointer-events-auto">
                    <Link ref={sideCardRef} href="/technology" className="flex-1 bg-brand-dark-grey rounded-[40px] relative overflow-hidden group min-h-[40vh] border border-white/5 shadow-premium block hover:border-brand-accent/30 transition-all duration-700 will-change-transform">
                        <div className="absolute inset-0 polk-grid-overlay opacity-10 pointer-events-none z-20"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-12 text-center text-balance">
                            <h2 className="text-5xl lg:text-6xl leading-[1] font-black tracking-tighter text-white uppercase group-hover:scale-105 transition-transform duration-700">
                                The Local <br />
                                <span className="text-brand-accent italic font-serif normal-case tracking-normal">Brain.</span>
                            </h2>
                            <div className="mt-8 text-xs font-black uppercase tracking-widest text-brand-white/40 group-hover:text-white transition-colors">
                                Explore The Core ↗
                            </div>
                        </div>

                        <div className="absolute bottom-12 left-12 z-30">
                            <h3 className="text-xl font-black uppercase tracking-tight">Zero Cloud</h3>
                            <p className="text-white/40 text-xs font-medium mt-1">No WiFi needed for core privacy.</p>
                        </div>

                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </Link>

                    <Link href="/get-started" className="bg-brand-accent rounded-[40px] p-12 flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-700 group cursor-pointer h-64 shadow-2xl relative overflow-hidden">
                        <div className="flex justify-between items-start relative z-10">
                            <span className="text-5xl font-light scale-y-125 group-hover:translate-x-3 transition-transform duration-700">↗</span>
                        </div>
                        <div className="relative z-10">
                            <span className="text-xs font-black uppercase tracking-widest opacity-60 block mb-2">Next Step</span>
                            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">Get Started</h2>
                        </div>
                    </Link>
                </div>
            </Container>

            {/* Simple Stats Section */}
            <Container className="mt-24 lg:mt-40 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase text-white/80">
                            Smart homes should be <br />
                            <span className="text-brand-accent font-serif italic font-normal normal-case tracking-normal text-6xl">simple.</span> <br />
                            <span className="text-white/40">And completely local.</span>
                        </h2>
                    </div>
                    <div ref={statsRef} className="grid grid-cols-3 gap-12 border-t border-white/10 pt-12">
                        <div>
                            <div className="text-4xl font-black text-white/50 tracking-tighter">0</div>
                            <div className="text-[10px] font-black mt-3 tracking-widest uppercase mb-1">Subscriptions</div>
                            <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wide">One time buy.</p>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-white/50 tracking-tighter">100%</div>
                            <div className="text-[10px] font-black mt-3 tracking-widest uppercase mb-1">Local Control</div>
                            <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wide">Works offline.</p>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-white/50 tracking-tighter">AES</div>
                            <div className="text-[10px] font-black mt-3 tracking-widest uppercase mb-1">Encrypted</div>
                            <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wide">Total security.</p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-full h-[60vh] bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent pointer-events-none opacity-20 blur-[120px]"></div>
        </section>
    );
}
