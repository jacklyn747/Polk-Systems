"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${scrolled
                ? "py-4 bg-brand-black/80 backdrop-blur-xl border-white/10 shadow-premium"
                : "py-8 bg-transparent border-transparent"
                }`}
        >
            <Container className="flex justify-between items-center">
                <Link href="/" className="group flex flex-col">
                    <span className="text-xl font-black tracking-[-0.05em] uppercase text-white group-hover:text-brand-accent transition-colors">POLK</span>
                    <span className="text-[0.6rem] font-black tracking-[0.4em] uppercase text-white/30 group-hover:text-white transition-colors -mt-1">SYSTEMS</span>
                </Link>

                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex gap-8">
                        <Link href="/" className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all">Home</Link>
                        <Link href="/story" className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all">Our Story</Link>
                        <Link href="#how-it-works" className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all">How it Works</Link>
                        <Link href="#why-we-are-different" className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all">Why We're Different</Link>
                        <Link href="#the-process" className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all">The Process</Link>
                        <Link href="#get-in-touch" className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all">Get in Touch</Link>
                    </div>

                    <Link
                        href="#home-assessment"
                        className="bg-brand-accent text-black px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-premium ml-4"
                    >
                        Home Assessment ↘
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden flex flex-col gap-1.5 p-2 bg-white/5 rounded-full px-4">
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-brand-accent"></div>
                </button>
            </Container>
        </nav>
    );
};
