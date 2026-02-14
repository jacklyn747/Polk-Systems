"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

const products = [
    {
        id: "01",
        name: "Cortex Node",
        desc: "The central nervous system. Local compute, zero cloud sync.",
        image: "/nuc-polk.png",
        color: "bg-brand-dark-grey"
    },
    {
        id: "02",
        name: "Sovereign Cam",
        desc: "AES-256 encrypted local optics. No backdoors.",
        image: "/prod-cam-orange.png",
        color: "bg-brand-black"
    },
    {
        id: "03",
        name: "Bio-Light",
        desc: "Circadian lighting via local hardware logic.",
        image: "/prod-light-orange.png",
        color: "bg-brand-dark-grey"
    },
    {
        id: "04",
        name: "The Vault",
        desc: "Physical kill-switch and local biometric access.",
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
                <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-12">
                    <div>
                        <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase">[ 03 ] THE HARDWARE</span>
                        <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tighter uppercase">Our Sovereign <br />Collection</h2>
                    </div>
                    <div className="hidden md:block max-w-sm text-right">
                        <p className="text-white/40 text-sm font-bold leading-relaxed uppercase">
                            Every device is engineered for local-first autonomy. No subscriptions. No cloud dependency.
                        </p>
                    </div>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className={`${product.color} rounded-[40px] aspect-[3/4] p-10 flex flex-col justify-between group cursor-pointer border border-white/5 hover:border-brand-accent/30 transition-all duration-700 relative overflow-hidden`}>
                            <div className="relative z-10">
                                <span className="text-xs font-black tracking-widest opacity-40 uppercase group-hover:text-brand-accent group-hover:opacity-100 transition-colors">/{product.id}</span>
                                <h3 className="text-2xl font-black mt-4 tracking-tight uppercase">{product.name}</h3>
                                <p className="text-white/40 text-xs font-bold mt-4 leading-relaxed uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">{product.desc}</p>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>

                            <div className="relative z-10 flex justify-end">
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase border-b border-white/20 pb-2 group-hover:border-brand-accent transition-colors">
                                    See More ↗
                                </span>
                            </div>

                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
