"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";

export const SovereigntyAudit = () => {
    const [step, setStep] = useState(0);
    const formRef = useRef<HTMLDivElement>(null);
    const [score, setScore] = useState(0);

    const questions = [
        {
            q: "Where is your camera footage stored?",
            options: [
                { text: "Local Hardware", value: 100 },
                { text: "Cloud / Third Party", value: 0 },
                { text: "I don't know", value: 20 }
            ]
        },
        {
            q: "Do you pay a monthly fee for your devices?",
            options: [
                { text: "No Subscriptions", value: 100 },
                { text: "Monthly Rent", value: 0 }
            ]
        },
        {
            q: "Can your home function offline?",
            options: [
                { text: "100% Offline Access", value: 100 },
                { text: "Cloud Dependent", value: 0 }
            ]
        }
    ];

    const nextStep = (value: number) => {
        setScore(prev => prev + value);

        gsap.to(formRef.current, {
            opacity: 0,
            x: -20,
            duration: 0.3,
            onComplete: () => {
                if (step < questions.length) {
                    setStep(prev => prev + 1);
                    gsap.fromTo(formRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5 });
                }
            }
        });
    };

    return (
        <section className="relative overflow-hidden py-32 bg-white text-black min-h-screen flex items-center">
            {/* Geometric Grid Overlay (Light) */}
            <div className="polk-grid-overlay-light absolute inset-0 opacity-10 pointer-events-none" />

            <Container className="relative z-10">
                {step < questions.length ? (
                    <div ref={formRef} className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-center border-b border-black/10 pb-10 mb-20 text-[10px] font-black uppercase tracking-[0.4em]">
                            <span className="text-brand-accent">[ 04 ] SOVEREIGNTY AUDIT</span>
                            <span className="opacity-40">STEP {step + 1} OF {questions.length}</span>
                        </div>

                        <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-20">
                            {questions[step].q}
                        </h3>

                        <div className="grid grid-cols-1 gap-4">
                            {questions[step].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => nextStep(opt.value)}
                                    className="group text-left p-10 border border-black/5 hover:border-black transition-all duration-500 rounded-[32px] flex justify-between items-center"
                                >
                                    <span className="text-xl font-black uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500">{opt.text}</span>
                                    <span className="text-3xl font-light text-brand-accent group-hover:opacity-100 opacity-20 transition-opacity">→</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center mb-12">
                            <div className="pulse-dot w-4 h-4 bg-brand-accent rounded-full shadow-[0_0_20px_rgba(255,116,37,0.5)]" />
                        </div>
                        <h3 className="text-[10px] font-black tracking-[0.5em] mb-10 text-brand-accent uppercase">Audit Complete</h3>
                        <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
                            {Math.round((score / (questions.length * 100)) * 100)}% <br />
                            <span className="font-serif italic font-normal normal-case tracking-normal text-brand-accent">Sovereign</span>
                        </h2>
                        <p className="text-black/40 text-sm font-bold mt-12 max-w-lg mx-auto leading-relaxed uppercase">
                            Your result has been calculated locally. <br />
                            No data has left your network.
                        </p>
                        <button className="mt-20 bg-black text-white px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-brand-accent transition-all duration-500 transform hover:scale-105 shadow-2xl">
                            Request Full Report ↘
                        </button>
                    </div>
                )}
            </Container>
        </section>
    );
};
