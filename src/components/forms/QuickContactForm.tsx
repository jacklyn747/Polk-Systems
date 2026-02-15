"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitLead } from "@/lib/leads";
import { ArrowRight, Check, Loader2 } from "lucide-react";

interface QuickContactFormProps {
    source?: string;
}

export function QuickContactForm({ source = "faq" }: QuickContactFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const canSubmit = name.trim() && email.trim() && message.trim();

    const handleSubmit = async () => {
        if (!canSubmit) return;
        setSubmitting(true);
        setError("");

        const result = await submitLead({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            source,
        });

        setSubmitting(false);
        if (result.success) {
            setSubmitted(true);
        } else {
            setError(result.error || "Something went wrong.");
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-brand-accent/30 bg-brand-accent/5 p-8"
            >
                <div className="flex items-center gap-3 mb-3">
                    <Check className="w-5 h-5 text-brand-accent" />
                    <span className="font-display text-lg text-brand-white">Message Sent.</span>
                </div>
                <p className="font-sans text-sm text-brand-text-muted">
                    We&apos;ll get back to you within 24 hours.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label htmlFor="quick-name" className="sr-only">Your name</label>
                <input
                    id="quick-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-transparent border border-white/10 px-4 py-4 text-brand-white font-sans text-sm placeholder:text-white/20 focus-visible:border-brand-accent focus-visible:outline-none transition-colors"
                />
                <label htmlFor="quick-email" className="sr-only">Your email</label>
                <input
                    id="quick-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full bg-transparent border border-white/10 px-4 py-4 text-brand-white font-sans text-sm placeholder:text-white/20 focus-visible:border-brand-accent focus-visible:outline-none transition-colors"
                />
            </div>
            <label htmlFor="quick-message" className="sr-only">Your message</label>
            <textarea
                id="quick-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="What can we help with?"
                className="w-full bg-transparent border border-white/10 px-4 py-4 text-brand-white font-sans text-sm placeholder:text-white/20 focus-visible:border-brand-accent focus-visible:outline-none transition-colors resize-none"
            />

            {error && (
                <p className="text-red-400 font-sans text-sm">{error}</p>
            )}

            <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmit || submitting}
                className={`flex items-center gap-2 px-6 py-4 font-display text-xs uppercase tracking-wider transition-all duration-200 ${canSubmit && !submitting
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
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </button>
        </div>
    );
}
