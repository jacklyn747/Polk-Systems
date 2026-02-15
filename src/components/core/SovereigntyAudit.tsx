"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import Link from 'next/link';

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
        <section id="home-assessment" className="relative overflow-hidden py-32 bg-brand-black text-brand-white min-h-screen flex items-center selection:bg-brand-accent selection:text-black">
            {/* Architectural Grid Overlay */}
            <div className="polk-architectural-grid absolute inset-0 opacity-10 pointer-events-none" />

            <Container className="relative z-10">
                {step < questions.length ? (
                    <div ref={formRef} className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-center border-b border-white/10 pb-10 mb-20 text-[10px] font-black uppercase tracking-[0.4em]">
                            <span className="text-brand-accent uppercase">Privacy_Assessment_V1</span>
                            <span className="opacity-40 uppercase">Index {step + 1} of {questions.length}</span>
                        </div>

                        <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-20">
                            {questions[step].q}
                        </h3>

                        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
                            {questions[step].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => nextStep(opt.value)}
                                    className="polk-hover-line group text-left p-12 bg-brand-black hover:bg-white/[0.02] transition-all duration-300 flex justify-between items-center relative overflow-hidden"
                                >
                                    <div className="polk-hover-line-content flex justify-between items-center w-full">
                                        <span className="text-xl md:text-3xl font-black uppercase tracking-tight">{opt.text}</span>
                                        <span className="text-xs font-black text-brand-accent group-hover:-translate-x-4 transition-transform">PROCEED_↘</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center mb-12">
                            <div className="w-12 h-2 bg-brand-accent mx-auto" />
                        </div>
                        <h3 className="text-[10px] font-black tracking-[0.5em] mb-10 text-brand-accent uppercase">Assessment_Complete_Index_01</h3>
                        <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
                            {Math.round((score / (questions.length * 100)) * 100)}% <br />
                            <span className="text-white/20">Private_</span>
                        </h2>
                        <p className="text-white/60 text-[10px] font-black mt-12 max-w-lg mx-auto leading-loose uppercase tracking-widest">
                            Your result was calculated right here. <br />
                            Nothing was sent to our servers.
                        </p>
                        <Link href="/get-started" className="inline-block mt-20 bg-white text-black px-16 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-brand-accent hover:text-white transition-all duration-500 overflow-hidden relative group">
                            <span className="relative z-10">Request report ↘</span>
                            <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </div>
                )}
            </Container>
        </section>
    );
};
