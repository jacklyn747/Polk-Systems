"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LABEL_MAP: Record<string, string> = {
    process: "The Process",
    discover: "Discovery",
    setup: "Setup",
    activate: "Activation",
    control: "Control",
};

export function Breadcrumb() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length < 2) return null;

    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em]">
                {segments.map((segment, index) => {
                    const href = "/" + segments.slice(0, index + 1).join("/");
                    const label = LABEL_MAP[segment] || segment.replace(/-/g, " ");
                    const isLast = index === segments.length - 1;

                    return (
                        <li key={href} className="flex items-center gap-2">
                            {index > 0 && (
                                <span className="text-white/20">/</span>
                            )}
                            {isLast ? (
                                <span className="text-white/60">{label}</span>
                            ) : (
                                <Link
                                    href={href}
                                    className="text-brand-accent hover:text-white transition-colors"
                                >
                                    {label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
