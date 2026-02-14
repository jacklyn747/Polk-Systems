"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "The System", href: "/system" },
        { name: "The Story", href: "/story" },
        { name: "Contact", href: "/contact" },
    ];

    const menuVariants: Variants = {
        closed: {
            y: "-100%",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                when: "afterChildren",
            },
        },
        open: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                when: "beforeChildren",
                staggerChildren: 0.05,
            },
        },
    };

    const linkVariants: Variants = {
        closed: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.4 },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${scrolled && !isOpen
                ? "polk-glass py-4 md:py-4 translate-y-2 max-w-[95%] left-1/2 -translate-x-1/2 border border-white/10"
                : "py-8 md:py-12"
                }`}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-4 group relative z-[60]">
                    <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-none transition-colors duration-500 ${i === 4 ? 'bg-brand-accent' : 'bg-brand-white'
                                    }`}
                            />
                        ))}
                    </div>
                    <span
                        className="font-display font-medium text-base tracking-[0.2em] transition-colors duration-500 uppercase text-brand-white"
                    >
                        POLK SYSTEMS
                    </span>
                </Link>

                {/* Custom Menu Toggle */}
                <button
                    className="group flex items-center gap-4 z-[60] relative focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            className="w-8 h-[1px] transition-colors duration-500 bg-brand-white"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                            className="w-8 h-[1px] transition-colors duration-500 bg-brand-white"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            className="w-8 h-[1px] transition-colors duration-500 bg-brand-white"
                        />
                    </div>

                    <span
                        className="text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 hidden sm:block text-brand-white/60 group-hover:text-brand-white font-sans"
                    >
                        {isOpen ? "Close" : "Menu"}
                    </span>
                </button>
            </Container>

            {/* Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-brand-black z-50 overflow-hidden"
                    >
                        {/* Background Elements */}
                        <div className="absolute inset-0 polk-grid-overlay opacity-20" />
                        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-brand-accent/5 to-transparent" />

                        <Container className="h-full pt-32 pb-12 flex flex-col">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-grow items-center">
                                {/* Links Column */}
                                <div className="flex flex-col items-start gap-4">
                                    {navLinks.map((link) => (
                                        <motion.div key={link.name} variants={linkVariants}>
                                            <Link
                                                href={link.href}
                                                className={`group relative text-5xl md:text-7xl font-display font-medium tracking-tighter transition-all duration-500 hover:pl-6 ${pathname === link.href ? "text-brand-white" : "text-brand-white/40 hover:text-brand-white"
                                                    }`}
                                            >
                                                {link.name}
                                                {pathname === link.href && (
                                                    <motion.span
                                                        layoutId="activeLink"
                                                        className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-[2px] bg-brand-accent"
                                                    />
                                                )}
                                                <span className="absolute -left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-brand-accent transition-all duration-500 group-hover:w-4" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Details / Contact Column */}
                                <motion.div
                                    variants={linkVariants}
                                    className="hidden lg:flex flex-col gap-12 border-l border-white/10 pl-16 py-8"
                                >
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text-muted font-sans">Inquiries</span>
                                        <div className="flex flex-col gap-2 font-display">
                                            <a href="mailto:hello@polksystems.com" className="text-xl hover:text-brand-accent transition-colors italic">hello@polksystems.com</a>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text-muted font-sans">Location</span>
                                        <p className="text-brand-white/60 leading-relaxed uppercase tracking-widest text-xs font-sans">
                                            Houston, TX
                                        </p>
                                    </div>

                                    <div className="pt-8">
                                        <Link href="/contact">
                                            <Button variant="outline" className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black transition-all duration-500 font-display">
                                                Schedule Consultation
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Footer Area inside Menu */}
                            <motion.div
                                variants={linkVariants}
                                className="flex flex-col sm:flex-row justify-between items-end gap-8 border-t border-white/10 pt-12"
                            >
                                <div className="flex gap-8">
                                    {[
                                        { name: "Instagram", href: "https://instagram.com/polksystems" },
                                        { name: "LinkedIn", href: "https://linkedin.com/company/polksystems" },
                                    ].map(social => (
                                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text-muted hover:text-brand-white transition-colors font-sans">
                                            {social.name}
                                        </a>
                                    ))}
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-white/20 italic font-sans">
                                    © {new Date().getFullYear()} POLK SYSTEMS
                                </p>
                            </motion.div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
}
