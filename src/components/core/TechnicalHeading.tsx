"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TechnicalHeadingProps {
    text: string;
    className?: string;
    delay?: number;
    triggerOnce?: boolean;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    variant?: "default" | "subtle";
}

const GLYPHS = "01/";

export const TechnicalHeading = ({
    text,
    className = "",
    delay = 0,
    triggerOnce = true,
    as: Tag = "h1",
    variant = "default"
}: TechnicalHeadingProps) => {
    const containerRef = useRef<HTMLHeadingElement>(null);
    const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
    const [displayText, setDisplayText] = useState(text);
    const [isResolved, setIsResolved] = useState(false);
    const isSubtle = variant === "subtle";

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const element = containerRef.current;
        if (!element) return;

        const animateSubtle = () => {
            const chars = charsRef.current.filter(Boolean);
            gsap.fromTo(chars,
                {
                    opacity: 0,
                    y: 20,
                    filter: "blur(12px)",
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    scale: 1,
                    duration: 1.5,
                    stagger: {
                        amount: 0.8,
                        from: "start"
                    },
                    ease: "expo.out",
                    onComplete: () => setIsResolved(true)
                }
            );
        };

        const animateDefault = () => {
            const originalText = text;
            const duration = 0.8;
            const steps = 12;
            let currentStep = 0;

            const interval = setInterval(() => {
                const scrambled = originalText
                    .split("")
                    .map((char, index) => {
                        if (char === " " || char === "\n") return char;
                        const progress = currentStep / steps;
                        const threshold = index / originalText.length;

                        if (progress > threshold + 0.05) return char;
                        if (progress > threshold - 0.2) {
                            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                        }
                        return "";
                    })
                    .join("");

                setDisplayText(scrambled);
                currentStep++;

                if (currentStep > steps) {
                    clearInterval(interval);
                    setDisplayText(originalText);
                    setIsResolved(true);
                }
            }, (duration * 1000) / steps);
        };

        ScrollTrigger.create({
            trigger: element,
            start: "top 90%",
            onEnter: () => {
                if (isSubtle) {
                    gsap.delayedCall(delay, animateSubtle);
                } else {
                    gsap.delayedCall(delay, animateDefault);
                    gsap.fromTo(element,
                        { opacity: 0, y: 15, filter: "blur(8px)" },
                        {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            duration: 1.2,
                            ease: "power3.out",
                            delay: delay
                        }
                    );
                }
            },
            once: triggerOnce,
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => {
                if (t.trigger === element) t.kill();
            });
        };
    }, [text, delay, triggerOnce, variant]);

    return (
        <Tag
            ref={containerRef}
            className={`font-black uppercase tracking-tighter leading-[1] relative overflow-visible ${className}`}
            style={{
                display: 'block',
                width: '100%',
                opacity: isSubtle ? 1 : 0,
                whiteSpace: 'pre-wrap'
            }}
        >
            <span className="relative z-10 block">
                {variant === "subtle" ? (
                    text.split(" ").map((word, wordIndex, wordArr) => (
                        <span key={wordIndex} className="inline-block whitespace-nowrap">
                            {word.split("").map((char, charIndex) => {
                                // Calculate a global index for the character to maintain the stagger
                                const globalIndex = text.split(" ").slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0) + charIndex;
                                return (
                                    <span
                                        key={charIndex}
                                        ref={(el) => { charsRef.current[globalIndex] = el; }}
                                        className="inline-block"
                                        style={{ opacity: 0 }}
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                            {/* Add a space after the word unless it's the last word */}
                            {wordIndex < wordArr.length - 1 && (
                                <span className="inline-block">&nbsp;</span>
                            )}
                        </span>
                    ))
                ) : (
                    <>
                        {displayText}
                        {!isResolved && (
                            <span className="inline-block w-[1ch] h-[0.8em] bg-brand-accent/50 ml-1 animate-pulse align-middle" />
                        )}
                    </>
                )}
            </span>

            {/* Subtle accent glow that appears on resolution */}
            <div className={`absolute -inset-x-4 -inset-y-2 bg-brand-accent/5 blur-xl transition-opacity duration-1000 pointer-events-none ${isResolved ? 'opacity-100' : 'opacity-0'}`} />
        </Tag>
    );
};
