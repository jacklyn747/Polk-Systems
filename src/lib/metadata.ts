import type { Metadata } from "next";

type PageMeta = {
    title: string;
    description: string;
};

export const PAGE_METADATA: Record<string, PageMeta> = {
    "/": {
        title: "Polk Systems | One System. Zero Stress.",
        description: "Advanced home automation with strategic minimalism. Technology without the stress.",
    },
    "/story": {
        title: "Our Story | Polk Systems",
        description: "How a family's frustration with fragile smart home tech led to building infrastructure-grade home automation.",
    },
    "/how-it-works": {
        title: "How It Works | Polk Systems",
        description: "The Silent Orchestra — one cohesive system with local processing, unified control, and sovereign data.",
    },
    "/why-we-are-different": {
        title: "Why We're Different | Polk Systems",
        description: "We don't sell gadgets. We install building-grade infrastructure that runs locally, privately, and permanently.",
    },
    "/process": {
        title: "The Process | Polk Systems",
        description: "From discovery audit to stewardship — our five-phase sovereignty protocol for your home.",
    },
    "/get-started": {
        title: "Home Assessment | Polk Systems",
        description: "Initiate your project. Complete a secure assessment for a bespoke system architecture designed for your home.",
    },
    "/solutions": {
        title: "Solutions | Polk Systems",
        description: "Lighting, climate, security, and audio — unified under one sovereign system with zero cloud dependency.",
    },
    "/system": {
        title: "The System | Polk Systems",
        description: "A dedicated local server, enterprise networking, and commercial-grade sensors that disappear into your architecture.",
    },
    "/technology": {
        title: "Technology | Polk Systems",
        description: "The engineering behind Polk Systems — local processing, hardwired infrastructure, and lifetime reliability.",
    },
    "/contact": {
        title: "Contact | Polk Systems",
        description: "Get in touch with our team to discuss your home automation project.",
    },
    "/audit": {
        title: "Sovereignty Audit | Polk Systems",
        description: "Assess the sovereignty of your current home system with our diagnostic audit.",
    },
    "/privacy": {
        title: "Privacy Policy | Polk Systems",
        description: "How Polk Systems protects your data — locally processed, never sold, always sovereign.",
    },
    "/terms": {
        title: "Terms of Service | Polk Systems",
        description: "Terms governing the use of Polk Systems services and infrastructure.",
    },
    "/license": {
        title: "License | Polk Systems",
        description: "Software license agreement for Polk Systems local automation platform.",
    },
    "/warranty": {
        title: "Warranty | Polk Systems",
        description: "Polk Systems warranty coverage for hardware and installation services.",
    },
};

export function getMetadata(path: string): Metadata {
    const meta = PAGE_METADATA[path];
    if (!meta) return {};
    return {
        title: meta.title,
        description: meta.description,
    };
}
