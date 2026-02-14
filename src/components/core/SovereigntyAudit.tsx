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
                { text: "In my home", value: 100 },
                { text: "On the cloud", value: 0 },
                { text: "I'm not sure", value: 20 }
            ]
        },
        {
            q: "Do you pay a monthly fee for your gear?",
            options: [
                { text: "No monthly fees", value: 100 },
                { text: "I pay for a sub", value: 0 }
            ]
        },
        {
            q: "Does your home work without internet?",
            options: [
                { text: "Always works", value: 100 },
                { text: "Requires a connection", value: 0 }
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
        <section id="home-assessment" className="relative overflow-hidden py-32 bg-white text-black min-h-screen flex items-center">
            {/* Subtle Clean Grid Overlay */}
            <div className="polk-grid-overlay-light absolute inset-0 opacity-5 pointer-events-none" />

            <Container className="relative z-10">
                {step < questions.length ? (
                    <div ref={formRef} className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-center border-b border-black/10 pb-10 mb-20 text-[10px] font-black uppercase tracking-[0.4em]">
                            <span className="text-brand-accent uppercase italic">Privacy Assessment</span>
                            <span className="opacity-40 uppercase">Question {step + 1} of {questions.length}</span>
                        </div>

                        <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-20">
                            {questions[step].q}
                        </h3>

                        <div className="grid grid-cols-1 gap-4">
                            {questions[step].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => nextStep(opt.value)}
                                    className="group text-left p-10 border border-black/5 hover:border-black transition-all duration-500 rounded-[32px] flex justify-between items-center shadow-premium bg-white"
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
                            <div className="pulse-dot w-4 h-4 bg-brand-accent rounded-full" />
                        </div>
                        <h3 className="text-[10px] font-black tracking-[0.5em] mb-10 text-brand-accent uppercase">Assessment Complete</h3>
                        <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
                            {Math.round((score / (questions.length * 100)) * 100)}% <br />
                            <span className="font-serif italic font-normal normal-case tracking-normal text-brand-accent">Private.</span>
                        </h2>
                        <p className="text-black/40 text-sm font-bold mt-12 max-w-lg mx-auto leading-relaxed uppercase">
                            Your result was calculated right here. <br />
                            Nothing was sent to our servers.
                        </p>
                        <button className="mt-20 bg-black text-white px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-brand-accent transition-all duration-500 transform hover:scale-105 shadow-2xl">
                            Request your report ↘
                        </button>
                    </div>
                )}
            </Container>
        </section>
    );
};
