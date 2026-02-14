"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: scrolled ? '1.5rem 5%' : '2.5rem 5%',
                mixBlendMode: 'difference',
                color: 'white',
                transition: 'padding 0.4s ease-in-out'
            }}
        >
            <div style={{ fontWeight: '800', letterSpacing: '2px', fontSize: '1rem' }}>
                <Link href="/">POLK SYSTEMS</Link>
            </div>

            <div style={{ display: 'flex', gap: '3rem', fontSize: '0.75rem', textTransform: 'uppercase', alignItems: 'center', fontWeight: '600', letterSpacing: '2px' }}>
                <Link href="/technology" className="hover:opacity-50 transition-opacity">Technology</Link>
                <Link href="#the-node" className="hover:opacity-50 transition-opacity">The Node</Link>
                <Link
                    href="/audit"
                    style={{
                        border: '1px solid white',
                        padding: '0.6rem 1.5rem',
                        borderRadius: '0px', // Palette uses sharp corners
                        fontWeight: '700'
                    }}
                    className="hover:bg-white hover:text-black transition-all"
                >
                    Privacy Audit
                </Link>
            </div>
        </nav>
    );
};
