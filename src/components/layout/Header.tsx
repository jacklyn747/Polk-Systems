"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Menu Variants
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

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Our Story", href: "/story" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Why We're Different", href: "/why-we-are-different" },
        { name: "The Process", href: "/process" },
        { name: "Get in Touch", href: "#get-in-touch" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${scrolled && !isOpen
                ? "py-4 bg-brand-black/80 backdrop-blur-xl border-white/10 shadow-premium"
                : "py-8 bg-transparent border-transparent"
                }`}
        >
            <Container className="flex justify-between items-center relative z-[101]">
                <Link href="/" className="group flex flex-col">
                    <span className="text-xl font-black tracking-[-0.05em] uppercase text-white group-hover:text-brand-accent transition-colors">POLK</span>
                    <span className="text-[0.6rem] font-black tracking-[0.4em] uppercase text-white/30 group-hover:text-white transition-colors -mt-1">SYSTEMS</span>
                </Link>

                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex gap-8">
                        {navLinks.map(link => {
                            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                            return (
                                <Link key={link.name} href={link.href} className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all border-b ${isActive ? "text-white border-brand-accent" : "text-white/50 border-transparent hover:text-white hover:border-white/30"}`}>{link.name}</Link>
                            );
                        })}
                    </div>

                    <Link
                        href="/get-started"
                        className="bg-brand-accent text-black px-8 py-4 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-premium ml-4 border-l border-white/10"
                    >
                        Home Assessment ↘
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 p-4 border border-white/10 bg-white/5 relative z-[101] group"
                    onClick={() => {
                        console.log("Header: Toggle menu clicked. Prev state:", isOpen);
                        setIsOpen(!isOpen);
                    }}
                    aria-label="Toggle Menu"
                >
                    <motion.div
                        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                        className="w-6 h-[1px] bg-white transition-colors group-hover:bg-brand-accent"
                    />
                    <motion.div
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-6 h-[1px] bg-brand-accent transition-colors group-hover:bg-white"
                    />
                    <motion.div
                        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                        className="w-6 h-[1px] bg-white transition-colors group-hover:bg-brand-accent"
                    />
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
                        className="fixed inset-0 bg-brand-black z-[90] overflow-y-auto"
                    >
                        {/* Background Elements */}
                        <div className="absolute inset-0 polk-grid-overlay opacity-20 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-brand-accent/5 to-transparent pointer-events-none" />

                        <Container className="min-h-full pt-32 pb-12 flex flex-col justify-between">
                            <div className="grid grid-cols-1 gap-8">
                                {/* Links Column */}
                                <div className="flex flex-col items-start gap-6">
                                    {navLinks.map((link) => (
                                        <motion.div key={link.name} variants={linkVariants}>
                                            <Link
                                                href={link.href}
                                                className={`text-3xl sm:text-4xl font-black uppercase tracking-tight transition-all duration-500 block ${pathname === link.href ? "text-white" : "text-white/40 hover:text-white"}`}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}

                                    <motion.div variants={linkVariants} className="pt-4">
                                        <Link
                                            href="/get-started"
                                            className="inline-block bg-brand-accent text-black px-8 py-4 text-xs font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-premium"
                                        >
                                            Home Assessment ↘
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Footer Area inside Menu */}
                            <motion.div
                                variants={linkVariants}
                                className="flex flex-col gap-4 border-t border-white/10 pt-8 mt-12"
                            >
                                <div className="flex gap-8">
                                    {[
                                        { name: "Instagram", href: "https://instagram.com/polksystems" },
                                        { name: "LinkedIn", href: "https://linkedin.com/company/polksystems" },
                                    ].map(social => (
                                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors">
                                            {social.name}
                                        </a>
                                    ))}
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 italic">
                                    © {new Date().getFullYear()} POLK SYSTEMS
                                </p>
                            </motion.div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
