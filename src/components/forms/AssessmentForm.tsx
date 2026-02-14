"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FormStep } from "./FormStep";
import { submitLead } from "@/lib/leads";
import { ArrowRight, ArrowLeft, Check, Loader2, Home, Wrench, MessageSquare } from "lucide-react";

interface FormData {
    project_type: string;
    home_size: string;
    room_count: string;
    property_type: string;
    systems: string[];
    name: string;
    email: string;
    phone: string;
    preferred_contact: "email" | "phone" | "either";
    message: string;
}

const INITIAL: FormData = {
    project_type: "",
    home_size: "",
    room_count: "",
    property_type: "",
    systems: [],
    name: "",
    email: "",
    phone: "",
    preferred_contact: "email",
    message: "",
};

const PROJECT_TYPES = [
    { value: "new_build", label: "New Construction", desc: "Building from the ground up", icon: Home },
    { value: "retrofit", label: "Retrofit Existing", desc: "Upgrading your current home", icon: Wrench },
    { value: "consultation", label: "Consultation Only", desc: "Expert guidance on your options", icon: MessageSquare },
];

const HOME_SIZES = ["Under 2,000 sq ft", "2,000 – 4,000 sq ft", "4,000 – 8,000 sq ft", "8,000+ sq ft"];
const ROOM_COUNTS = ["1 – 5 rooms", "6 – 10 rooms", "11 – 20 rooms", "20+ rooms"];
const PROPERTY_TYPES = ["Single Family", "Estate", "Condo / Townhome", "Commercial"];

const SYSTEMS = [
    { value: "lighting", label: "Smart Lighting" },
    { value: "climate", label: "Climate Control" },
    { value: "security", label: "Security & Cameras" },
    { value: "audio", label: "Whole-Home Audio" },
    { value: "shading", label: "Automated Shading" },
    { value: "energy", label: "Energy Monitoring" },
    { value: "network", label: "Network Infrastructure" },
    { value: "theater", label: "Home Theater" },
];

interface AssessmentFormProps {
    source?: string;
}

export function AssessmentForm({ source = "contact" }: AssessmentFormProps) {
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const [data, setData] = useState<FormData>(INITIAL);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const totalSteps = 4;

    const update = useCallback((field: keyof FormData, value: string | string[]) => {
        setData((prev) => ({ ...prev, [field]: value }));
    }, []);

    const toggleSystem = useCallback((sys: string) => {
        setData((prev) => ({
            ...prev,
            systems: prev.systems.includes(sys)
                ? prev.systems.filter((s) => s !== sys)
                : [...prev.systems, sys],
        }));
    }, []);

    const next = () => {
        setDirection(1);
        setStep((s) => Math.min(s + 1, totalSteps));
    };

    const back = () => {
        setDirection(-1);
        setStep((s) => Math.max(s - 1, 0));
    };

    const canProceed = () => {
        switch (step) {
            case 0: return !!data.project_type;
            case 1: return !!data.home_size;
            case 2: return data.systems.length > 0;
            case 3: return !!data.name.trim() && !!data.email.trim();
            default: return false;
        }
    };

    const handleSubmit = async () => {
        if (!canProceed()) return;
        setSubmitting(true);
        setError("");

        const result = await submitLead({
            ...data,
            source,
        });

        setSubmitting(false);
        if (result.success) {
            setSubmitted(true);
        } else {
            setError(result.error || "Something went wrong. Please try again.");
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
            >
                <div className="w-20 h-20 bg-brand-accent flex items-center justify-center mx-auto mb-8">
                    <Check className="w-10 h-10 text-brand-black" strokeWidth={3} />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-brand-white mb-4">
                    Assessment Received.
                </h3>
                <p className="font-sans text-brand-text-muted text-lg max-w-md mx-auto mb-2">
                    A Polk Systems engineer will review your project and respond within 24 hours.
                </p>
                <p className="font-sans text-brand-text-muted/60 text-sm">
                    Check your inbox at <span className="text-brand-white">{data.email}</span>
                </p>
            </motion.div>
        );
    }

    return (
        <div>
            {/* Progress Bar */}
            <div className="flex gap-2 mb-12">
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <div key={i} className="flex-1 h-[2px] bg-white/10 overflow-hidden">
                        <motion.div
                            className="h-full bg-brand-accent"
                            initial={false}
                            animate={{ width: i <= step ? "100%" : "0%" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                    </div>
                ))}
            </div>

            <FormStep stepKey={`step-${step}`} direction={direction}>
                {/* Step 0 — Project Type */}
                {step === 0 && (
                    <div>
                        <h3 className="font-display text-2xl md:text-3xl text-brand-white mb-2">
                            What brings you to Polk?
                        </h3>
                        <p className="font-sans text-brand-text-muted mb-10">
                            Select the option that best describes your project.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {PROJECT_TYPES.map((pt) => {
                                const Icon = pt.icon;
                                return (
                                    <button
                                        key={pt.value}
                                        type="button"
                                        onClick={() => update("project_type", pt.value)}
                                        className={`text-left border p-6 transition-all duration-200 group ${data.project_type === pt.value
                                                ? "border-brand-accent bg-brand-accent/5"
                                                : "border-white/10 hover:border-white/30"
                                            }`}
                                    >
                                        <Icon
                                            className={`w-6 h-6 mb-4 ${data.project_type === pt.value
                                                    ? "text-brand-accent"
                                                    : "text-brand-text-muted group-hover:text-brand-white"
                                                } transition-colors`}
                                        />
                                        <span className="block font-display text-lg text-brand-white mb-1">
                                            {pt.label}
                                        </span>
                                        <span className="block font-sans text-sm text-brand-text-muted">
                                            {pt.desc}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Step 1 — Property Details */}
                {step === 1 && (
                    <div>
                        <h3 className="font-display text-2xl md:text-3xl text-brand-white mb-2">
                            Tell us about your property.
                        </h3>
                        <p className="font-sans text-brand-text-muted mb-10">
                            This helps us scope the right system for your space.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4 font-sans">
                                    Home Size
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {HOME_SIZES.map((size) => (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => update("home_size", size)}
                                            className={`border p-4 font-sans text-sm transition-all ${data.home_size === size
                                                    ? "border-brand-accent text-brand-white bg-brand-accent/5"
                                                    : "border-white/10 text-brand-text-muted hover:border-white/30"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4 font-sans">
                                    Room Count
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {ROOM_COUNTS.map((count) => (
                                        <button
                                            key={count}
                                            type="button"
                                            onClick={() => update("room_count", count)}
                                            className={`border p-4 font-sans text-sm transition-all ${data.room_count === count
                                                    ? "border-brand-accent text-brand-white bg-brand-accent/5"
                                                    : "border-white/10 text-brand-text-muted hover:border-white/30"
                                                }`}
                                        >
                                            {count}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4 font-sans">
                                    Property Type
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {PROPERTY_TYPES.map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => update("property_type", type)}
                                            className={`border p-4 font-sans text-sm transition-all ${data.property_type === type
                                                    ? "border-brand-accent text-brand-white bg-brand-accent/5"
                                                    : "border-white/10 text-brand-text-muted hover:border-white/30"
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2 — Systems of Interest */}
                {step === 2 && (
                    <div>
                        <h3 className="font-display text-2xl md:text-3xl text-brand-white mb-2">
                            Which systems interest you?
                        </h3>
                        <p className="font-sans text-brand-text-muted mb-10">
                            Select all that apply. Every Polk System is modular.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {SYSTEMS.map((sys) => (
                                <button
                                    key={sys.value}
                                    type="button"
                                    onClick={() => toggleSystem(sys.value)}
                                    className={`border p-5 text-left transition-all duration-200 ${data.systems.includes(sys.value)
                                            ? "border-brand-accent bg-brand-accent/5"
                                            : "border-white/10 hover:border-white/30"
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-sans text-sm text-brand-white">{sys.label}</span>
                                        {data.systems.includes(sys.value) && (
                                            <Check className="w-4 h-4 text-brand-accent" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3 — Contact Info */}
                {step === 3 && (
                    <div>
                        <h3 className="font-display text-2xl md:text-3xl text-brand-white mb-2">
                            How should we reach you?
                        </h3>
                        <p className="font-sans text-brand-text-muted mb-10">
                            A Polk engineer will follow up within 24 hours.
                        </p>

                        <div className="space-y-6 max-w-lg">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-2 font-sans">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => update("name", e.target.value)}
                                    placeholder="Greg Polk"
                                    className="w-full bg-transparent border border-white/10 px-4 py-4 text-brand-white font-sans text-base placeholder:text-white/20 focus:border-brand-accent focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-2 font-sans">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => update("email", e.target.value)}
                                    placeholder="greg@example.com"
                                    className="w-full bg-transparent border border-white/10 px-4 py-4 text-brand-white font-sans text-base placeholder:text-white/20 focus:border-brand-accent focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-2 font-sans">
                                    Phone <span className="text-white/30">(Optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) => update("phone", e.target.value)}
                                    placeholder="(555) 000-0000"
                                    className="w-full bg-transparent border border-white/10 px-4 py-4 text-brand-white font-sans text-base placeholder:text-white/20 focus:border-brand-accent focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-2 font-sans">
                                    Preferred Contact
                                </label>
                                <div className="flex gap-3">
                                    {(["email", "phone", "either"] as const).map((method) => (
                                        <button
                                            key={method}
                                            type="button"
                                            onClick={() => update("preferred_contact", method)}
                                            className={`flex-1 border p-3 font-sans text-sm capitalize transition-all ${data.preferred_contact === method
                                                    ? "border-brand-accent text-brand-white bg-brand-accent/5"
                                                    : "border-white/10 text-brand-text-muted hover:border-white/30"
                                                }`}
                                        >
                                            {method}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-2 font-sans">
                                    Anything else? <span className="text-white/30">(Optional)</span>
                                </label>
                                <textarea
                                    value={data.message}
                                    onChange={(e) => update("message", e.target.value)}
                                    rows={3}
                                    placeholder="Tell us about your vision..."
                                    className="w-full bg-transparent border border-white/10 px-4 py-4 text-brand-white font-sans text-base placeholder:text-white/20 focus:border-brand-accent focus:outline-none transition-colors resize-none"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </FormStep>

            {/* Error Message */}
            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 font-sans text-sm mt-6"
                >
                    {error}
                </motion.p>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
                <div>
                    {step > 0 && (
                        <button
                            type="button"
                            onClick={back}
                            className="flex items-center gap-2 text-brand-text-muted hover:text-brand-white transition-colors font-sans text-sm uppercase tracking-widest"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-xs text-brand-text-muted/50 font-sans">
                        {step + 1} / {totalSteps}
                    </span>
                    {step < totalSteps - 1 ? (
                        <button
                            type="button"
                            onClick={next}
                            disabled={!canProceed()}
                            className={`flex items-center gap-2 px-8 py-4 font-display text-sm uppercase tracking-wider transition-all duration-200 ${canProceed()
                                    ? "bg-brand-accent text-brand-black hover:bg-white"
                                    : "bg-white/5 text-white/20 cursor-not-allowed"
                                }`}
                        >
                            Continue
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={!canProceed() || submitting}
                            className={`flex items-center gap-2 px-8 py-4 font-display text-sm uppercase tracking-wider transition-all duration-200 ${canProceed() && !submitting
                                    ? "bg-brand-accent text-brand-black hover:bg-white"
                                    : "bg-white/5 text-white/20 cursor-not-allowed"
                                }`}
                        >
                            {submitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Submit Assessment
                                    <Check className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
