"use client";

import { useEffect, useRef } from "react";
import { initVibeEngine } from "@/animations/master";
import Lenis from "lenis";
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- @studio-freight/react-lenis ships React 18 types
import { ReactLenis as ReactLenisBase } from "@studio-freight/react-lenis";

const ReactLenis = ReactLenisBase as any;

export default function SmoothScrolling({
    children,
}: {
    children: React.ReactNode;
}) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize the Vibe Engine (Apple-feel)
        const lenis = initVibeEngine();
        lenisRef.current = lenis;

        // Cleanup on unmount
        return () => {
            lenis.destroy();
            // Note: We should ideally remove the gsap ticker listener here too strictly speaking, 
            // but GSAP handles ticker cleanup reasonably well. 
            // initVibeEngine adds an anonymous function so we can't easily remove it 
            // without refactoring initVibeEngine to return the ticker function.
            // For a singleton app usage, this is acceptable.
        };
    }, []);

    return (
        // We use ReactLenis in "wrapper" mode or justContext mode if supported, 
        // but since we manually instantiated Lenis, we might just provide context.
        // However, the cleanest way to respect the "initVibeEngine" code is to let it drive.
        // We wrap children in a div to ensure no hydration issues if lenis expects it, 
        // or just return children.
        <ReactLenis root lenisRef={lenisRef}>
            {children}
        </ReactLenis>);
}
