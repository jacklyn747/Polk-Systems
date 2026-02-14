"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

const brands = [
    { name: "HomeKit", logo: "/Compatitble/Homekit.png" },
    { name: "Matter", logo: "/Compatitble/Matter.png" },
    { name: "Zigbee", logo: "/Compatitble/Z-Wave.png" }, // Using Z-Wave as Zigbee proxy if missing
    { name: "Homebridge", logo: "/Compatitble/Homebridge.png" },
    { name: "Hues", logo: "/Compatitble/Hues.png" },
    { name: "Level", logo: "/Compatitble/Level.png" }
];

export const BrandGrid = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".brand-item",
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-brand-black border-y border-white/5">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
                    {brands.map((brand, i) => (
                        <div key={i} className="brand-item border-l border-white/10 last:border-r py-12 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group">
                            <div className="relative w-24 h-12">
                                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black tracking-widest uppercase text-white/20 group-hover:text-brand-accent transition-colors">{brand.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
