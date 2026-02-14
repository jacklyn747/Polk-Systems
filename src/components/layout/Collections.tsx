"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface Product {
    category: string;
    name: string;
    image: string;
    link: string;
}

const products: Product[] = [
    { category: "Smart Lighting", name: "Lumina X", image: "/prod-light-orange.png", link: "/system" },
    { category: "Climate Control", name: "Aero Thermo", image: "/prod-thermo-orange.png", link: "/system" },
    { category: "Security", name: "Yale Lock", image: "/prod-lock-orange.png", link: "/system" },
    { category: "Monitoring", name: "Polk Cam", image: "/prod-cam-orange.png", link: "/system" },
];

export function Collections() {
    return (
        <section id="collections" className="bg-brand-black text-brand-white relative overflow-hidden border-t border-white/10 scroll-mt-32 pt-12 md:pt-0">
            {/* Grid Overlay for section */}
            <div className="absolute inset-0 polk-architectural-grid opacity-10 pointer-events-none" />

            {/* Section Header with vertical alignment */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-[1px] bg-white/10 border-b border-white/10">
                <div className="md:col-span-1 border-r border-white/10 flex items-center justify-center py-12 md:py-0">
                    <span className="polk-side-text">COLLECTION 2026</span>
                </div>
                <div className="md:col-span-7 bg-brand-black p-12 md:p-20 relative">
                    <div className="absolute top-0 left-0 polk-plus-marker" />
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-brand-accent font-sans">Hardware Series <sup>01</sup></h2>
                        <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight max-w-2xl leading-[1.1] text-white">
                            Curated hardware built for <span className="text-brand-text-muted italic">architectural longevity.</span>
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* Products Grid - Strict 1px alignment */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border-b border-white/10 relative">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-brand-black aspect-[3/4] overflow-hidden cursor-pointer"
                    >
                        {/* Intersection Marker */}
                        <div className="absolute top-0 left-0 polk-plus-marker z-20 opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Side vertical text for card */}
                        <div className="absolute left-4 top-12 z-20 md:opacity-0 md:group-hover:opacity-100 transition-all md:transform md:-translate-x-4 md:group-hover:translate-x-0">
                            <span className="polk-side-text !text-[8px] !text-brand-accent font-sans">{product.category}</span>
                        </div>

                        <div className="absolute top-12 right-12 z-20 text-right">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text-muted block mb-2 font-sans">{String(index + 1).padStart(2, '0')}</span>
                            <h3 className="text-xl font-display font-medium tracking-[0.1em] uppercase md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:transform md:translate-y-4 md:group-hover:translate-y-0 text-white">
                                {product.name}
                            </h3>
                        </div>

                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-[0.16, 1, 0.3, 1] grayscale group-hover:grayscale-0"
                        />

                        {/* Interaction Overlay */}
                        <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/5 transition-colors duration-500" />

                        <div className="absolute bottom-12 left-12 z-20">
                            <Link href={product.link} className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text-muted hover:text-brand-accent transition-colors flex items-center gap-4 group/link font-sans">
                                SEE SPECIFICATION <span className="transform group-hover/link:translate-x-2 transition-transform">→</span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Technical Specifications Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[1px] bg-white/10">
                {[
                    "802.11ax Support", "AES-256 Local", "<5ms Latency Grid",
                    "Post-Quantum Ready", "Offline Core", "Neural Engine v4"
                ].map((spec, i) => (
                    <div key={i} className="bg-brand-black p-6 flex flex-col gap-2 group hover:bg-white/5 transition-colors">
                        <span className="text-brand-accent/40 text-[9px] font-mono">SPEC_{i + 1}</span>
                        <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold group-hover:text-white transition-colors font-sans">
                            {spec}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

