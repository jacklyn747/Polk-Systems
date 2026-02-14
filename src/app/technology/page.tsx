import { Footer } from "@/components/layout/Footer";

export default function TechnologyPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-brand-black">
            <div className="fixed inset-0 polk-architectural-grid opacity-10 pointer-events-none" />

            <main className="relative z-10 pt-32 pb-20 container mx-auto px-6">
                <header className="mb-20">
                    <span className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Architecture</span>
                    <h1 className="text-5xl md:text-7xl font-display font-medium uppercase tracking-tighter mb-8">
                        The Cortex <br className="hidden md:block" /> vs. The Cloud
                    </h1>
                    <p className="max-w-2xl text-xl text-brand-white/60 font-light leading-relaxed">
                        Most smart homes are dumb terminals connected to a distant server.
                        Polk Systems creates a Local Intelligence Mesh that operates entirely within your perimeter.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                    <div className="border-t border-white/20 pt-8">
                        <h3 className="text-2xl font-display uppercase tracking-widest mb-4 text-red-500">The Cloud Model</h3>
                        <p className="text-brand-white/40 mb-6">Traditional Smart Home</p>
                        <ul className="space-y-4 text-brand-white/60 font-light">
                            <li className="flex gap-4"><span className="text-red-500">×</span> Video feeds sent to external servers</li>
                            <li className="flex gap-4"><span className="text-red-500">×</span> System offline when internet fails</li>
                            <li className="flex gap-4"><span className="text-red-500">×</span> Data sold to advertisers/insurers</li>
                            <li className="flex gap-4"><span className="text-red-500">×</span> Monthly subscription rent-seeking</li>
                        </ul>
                    </div>

                    <div className="border-t border-brand-accent/50 pt-8">
                        <h3 className="text-2xl font-display uppercase tracking-widest mb-4 text-brand-accent">The Cortex Model</h3>
                        <p className="text-brand-white/40 mb-6">Polk Sovereign System</p>
                        <ul className="space-y-4 text-brand-white/80 font-light">
                            <li className="flex gap-4"><span className="text-brand-accent">✓</span> Video processed locally on NUC</li>
                            <li className="flex gap-4"><span className="text-brand-accent">✓</span> 100% functionality offline (Local LAN)</li>
                            <li className="flex gap-4"><span className="text-brand-accent">✓</span> You own your data. Period.</li>
                            <li className="flex gap-4"><span className="text-brand-accent">✓</span> One-time hardware purchase. No rent.</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-white/5 p-12 rounded-sm border border-white/10">
                    <h2 className="text-3xl font-display uppercase tracking-normal mb-6">Military-Grade Encryption</h2>
                    <p className="text-brand-white/70 leading-relaxed mb-8">
                        Your Polk NUC uses AES-256 encryption at rest and in transit (within your LAN).
                        We don't have the keys. Even if we were subpoenaed, we couldn't access your footage.
                        That is true sovereignty.
                    </p>
                </div>

            </main>
            <Footer />
        </div>
    );
}
