"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useEffect, useState } from "react";

const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/polksystems" },
    { name: "LinkedIn", href: "https://linkedin.com/company/polksystems" },
];

const siteLinks = {
    company: [
        { name: "Our Story", href: "/story" },
        { name: "Contact", href: "/contact" },
    ],
    services: [
        { name: "How It Works", href: "/how-it-works" },
        { name: "Solutions", href: "/solutions" },
        { name: "Technology", href: "/technology" },
        { name: "The System", href: "/system" },
    ],
    legal: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "License", href: "/license" },
        { name: "Warranty", href: "/warranty" },
        { name: "Audit", href: "/audit" },
    ],
};

export function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer id="get-in-touch" className="bg-brand-black text-brand-white border-t border-white/5 py-32">
            <Container>
                {/* Contact Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
                    <div>
                        <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase opacity-60">Connect</span>
                        <h2 className="text-5xl md:text-7xl font-black mt-8 uppercase tracking-tighter leading-[0.85]">
                            Let&apos;s build your <br />
                            <span className="font-serif italic font-normal normal-case tracking-normal text-brand-accent">Sanctuary.</span>
                        </h2>

                        <div className="flex flex-col gap-8 max-w-md mt-16">
                            <div className="group relative">
                                <label htmlFor="footer-email" className="sr-only">Email address</label>
                                <input
                                    id="footer-email"
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-transparent border-b border-white/10 py-6 text-brand-white focus-visible:outline-none focus-visible:border-brand-accent transition-all placeholder:text-white/20 font-bold uppercase text-xs tracking-widest"
                                />
                            </div>
                            <div className="group relative">
                                <label htmlFor="footer-message" className="sr-only">How can we help?</label>
                                <input
                                    id="footer-message"
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full bg-transparent border-b border-white/10 py-6 text-brand-white focus-visible:outline-none focus-visible:border-brand-accent transition-all placeholder:text-white/20 font-bold uppercase text-xs tracking-widest"
                                />
                            </div>
                            <button aria-label="Send message" className="self-end mt-8 text-xs font-black uppercase tracking-[0.4em] hover:text-brand-accent transition-all group flex items-center gap-4">
                                Send Message <span className="group-hover:translate-x-2 transition-transform duration-500">↘</span>
                            </button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="grid grid-cols-2 gap-4 content-end">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white/5 aspect-square flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-700 text-[10px] font-black uppercase tracking-[0.3em] group shadow-premium"
                            >
                                <span className="group-hover:scale-110 transition-transform">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Site Navigation Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 border-t border-white/5 pt-16 mb-16">
                    {/* Company */}
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 block mb-6">Company</span>
                        <ul className="flex flex-col gap-3">
                            {siteLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 block mb-6">Services</span>
                        <ul className="flex flex-col gap-3">
                            {siteLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 block mb-6">Legal</span>
                        <ul className="flex flex-col gap-3">
                            {siteLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/5 pt-12 gap-8 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
                    <div>© Polk Systems {year || 2026}</div>
                    <div className="flex justify-center gap-12">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent" />
                            <span>System Sovereign</span>
                        </div>
                    </div>
                    <div className="flex gap-8 justify-end text-white/60">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}

