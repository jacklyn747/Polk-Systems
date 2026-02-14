"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';
import { TiltCard } from "@/components/ui/TiltCard";

const products = [
    {
        id: "01",
        name: "The Brain",
        desc: "The brain of your home. Local compute, zero cloud sync.",
        image: "/the-node-core.jpg",
        color: "bg-brand-black"
    },
    {
        id: "02",
        name: "The Vision",
        desc: "Encrypted optics. Your home has never looked safer.",
        image: "/prod-cam-orange.png",
        color: "bg-brand-black"
    },
    {
        id: "03",
        name: "The Aura",
        desc: "Lighting that understands your day, naturally.",
        image: "/prod-light-orange.png",
        color: "bg-brand-black"
    },
    {
        id: "04",
        name: "The Portal",
        desc: "Biometric access for physical peace of mind.",
        image: "/prod-lock-orange.png",
        color: "bg-brand-black"
    }
];

export const HardwareSpotlight = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gridRef.current?.children || [];

        gsap.fromTo(cards,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                }
            }
        );
    }, []);

    return (
        <section id="how-it-works" ref={sectionRef} className="py-32 bg-brand-black text-brand-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-12 gap-8">
                    <div>
                        <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase">How it works</span>
                        <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tighter uppercase">Hardware for <br />the modern home.</h2>
                    </div>
                    <div className="max-w-sm">
                        <p className="text-white/40 text-sm font-bold leading-relaxed uppercase">
                            Private by nature. Built for local autonomy. No subscriptions needed.
                        </p>
                    </div>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="h-full perspective-1000">
                            <TiltCard className={`${product.color} rounded-[40px] aspect-[3/4] p-10 flex flex-col justify-between group cursor-pointer border border-white/5 hover:border-brand-accent/30 transition-all duration-700 relative overflow-hidden shadow-premium`}>
                                <div className="relative z-10 w-full" style={{ transform: "translateZ(20px)" }}>
                                    <span className="text-xs font-black tracking-widest opacity-40 uppercase group-hover:text-brand-accent group-hover:opacity-100 transition-colors">{product.id}</span>
                                    <h3 className="text-2xl font-black mt-4 tracking-tight uppercase">{product.name}</h3>
                                    <p className="text-white/40 text-xs font-bold mt-4 leading-relaxed uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">{product.desc}</p>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center p-12" style={{ transform: "translateZ(0px)" }}>
                                    <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                </div>

                                <div className="relative z-10 flex justify-end w-full" style={{ transform: "translateZ(30px)" }}>
                                    <span className="text-[10px] font-black tracking-widest uppercase border-b border-white/20 pb-2 group-hover:border-brand-accent transition-colors">
                                        Learn More ↗
                                    </span>
                                </div>

                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
