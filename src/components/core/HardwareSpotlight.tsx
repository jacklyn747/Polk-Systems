"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const products = [
    {
        id: "01",
        name: "The Brain",
        desc: "The brain of your home. Local compute, zero cloud sync.",
        image: "/the-node-core.jpg",
    },
    {
        id: "02",
        name: "The Vision",
        desc: "Encrypted optics. Your home has never looked safer.",
        image: "/prod-cam-orange.png",
    },
    {
        id: "03",
        name: "The Aura",
        desc: "Lighting that understands your day, naturally.",
        image: "/prod-light-orange.png",
    },
    {
        id: "04",
        name: "The Portal",
        desc: "Biometric access for physical peace of mind.",
        image: "/prod-lock-orange.png",
    }
];

export const HardwareSpotlight = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gridRef.current?.querySelectorAll('.product-cell') || [];

        gsap.fromTo(cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section id="how-it-works" ref={sectionRef} className="bg-brand-black text-brand-white border-b border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-4">
                {/* Header Cell */}
                <div className="lg:col-span-4 border-b border-white/10 p-12 md:p-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="max-w-4xl">
                        <span className="text-brand-accent text-[10px] font-black tracking-[0.4em] uppercase mb-8 block">The Ecosystem</span>
                        <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
                            Hardware for <br />
                            <span className="text-white/20">The Modern Home.</span>
                        </h2>
                    </div>
                    <div className="max-w-xs pb-4">
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-loose">
                            Private by nature. <br />
                            Built for local autonomy. <br />
                            No subscriptions needed.
                        </p>
                    </div>
                </div>

                {/* Product Cells */}
                {products.map((product) => (
                    <div key={product.id} className="product-cell group relative aspect-[4/5] border-r border-white/5 last:border-r-0 lg:[&:nth-child(n+1)]:border-b-0 border-b lg:border-b-0 cursor-pointer overflow-hidden transition-colors duration-500 hover:bg-white/5">
                        {/* Number Overlay */}
                        <div className="absolute top-12 left-12 z-20">
                            <span className="text-[10px] font-black tracking-widest text-brand-accent uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                                ITEM_{product.id}
                            </span>
                        </div>

                        {/* Image Container */}
                        <div className="absolute inset-0 flex items-center justify-center p-20 z-10">
                            <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                                />
                            </div>
                        </div>

                        {/* Content Overlay - Revealed on Hover */}
                        <div className="absolute inset-x-0 bottom-0 p-12 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo bg-gradient-to-t from-black via-black/80 to-transparent">
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{product.name}</h3>
                            <p className="text-white/60 text-xs font-bold leading-relaxed uppercase pr-8">
                                {product.desc}
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="h-[1px] flex-grow bg-brand-accent/30" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-brand-accent">
                                    Spec Sheet ↗
                                </span>
                            </div>
                        </div>

                        {/* Static Subtle Border on hover */}
                        <div className="absolute inset-0 border border-brand-accent/0 group-hover:border-brand-accent/20 transition-colors duration-500 pointer-events-none" />
                    </div>
                ))}
            </div>
        </section>
    );
};

