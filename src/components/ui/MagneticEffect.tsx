"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export const MagneticEffect = ({ children, radius = 100, strength = 0.5 }: {
    children: React.ReactNode,
    radius?: number,
    strength?: number
}) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const trigger = triggerRef.current;
        const target = targetRef.current;
        if (!trigger || !target) return;

        const xTo = gsap.quickTo(target, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(target, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = trigger.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const distanceX = clientX - centerX;
            const distanceY = clientY - centerY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            if (distance < radius) {
                xTo(distanceX * strength);
                yTo(distanceY * strength);
            } else {
                xTo(0);
                yTo(0);
            }
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        window.addEventListener("mousemove", handleMouseMove);
        trigger.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            trigger.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [radius, strength]);

    return (
        <div ref={triggerRef} className="polk-magnetic-trigger inline-block">
            <div ref={targetRef} className="polk-magnetic-target">
                {children}
            </div>
        </div>
    );
};
