import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SpotlightGrid } from "@/components/ui/SpotlightGrid";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
    return (
        <section className="relative min-h-screen bg-brand-black text-brand-white pt-24 pb-12 overflow-hidden">
            {/* Immersive Canvas Grid */}
            <SpotlightGrid />

            <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full mt-4">
                {/* Main Hero Card - Left Side */}
                <div className="lg:col-span-8 relative aspect-[4/3] lg:aspect-auto lg:h-[85vh] bg-brand-dark-grey rounded-[40px] overflow-hidden group border border-white/5 shadow-premium">
                    <Image
                        src="/hero-ultra-hd.png"
                        alt="Polk Home"
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
                        priority
                    />

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 polk-grid-overlay opacity-20 pointer-events-none z-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-30">
                        <h1 className="text-[10vw] md:text-[8vw] leading-[0.95] font-black tracking-tighter text-white select-none uppercase mb-8">
                            Your home.<br />Truly yours.
                        </h1>
                        <div className="flex justify-between items-end w-full mt-4 border-t border-white/10 pt-10">
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-tight">The Sovereign Collection</h3>
                                <p className="text-brand-white/50 text-sm font-medium mt-2">Privacy built into every room.</p>
                            </div>
                            <MagneticButton>
                                <Link href="/manifesto" className="inline-block text-xs font-black uppercase tracking-widest bg-white text-black px-10 py-5 rounded-full hover:bg-brand-accent hover:text-white transition-all duration-500">
                                    Read our story
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>

                {/* Right Side Grid - The Local Brain Feature */}
                <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                    <Link href="/technology" className="flex-1 bg-brand-dark-grey rounded-[40px] relative overflow-hidden group min-h-[40vh] border border-white/5 shadow-premium block hover:border-brand-accent/30 transition-all duration-700">
                        <div className="absolute inset-0 polk-grid-overlay opacity-10 pointer-events-none z-20"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-12 text-center text-balance">
                            <h2 className="text-5xl lg:text-6xl leading-[1] font-black tracking-tighter text-white uppercase group-hover:scale-105 transition-transform duration-700">
                                The Local <br />
                                <span className="text-brand-accent italic font-serif normal-case tracking-normal">Brain.</span>
                            </h2>
                            <div className="mt-8 text-xs font-black uppercase tracking-widest text-brand-white/40 group-hover:text-white transition-colors">
                                Explore The Core ↗
                            </div>
                        </div>

                        <div className="absolute bottom-12 left-12 z-30">
                            <h3 className="text-xl font-black uppercase tracking-tight">Zero Cloud</h3>
                            <p className="text-white/40 text-xs font-medium mt-1">No WiFi needed for core privacy.</p>
                        </div>

                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </Link>

                    <div className="bg-brand-accent rounded-[40px] p-12 flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-700 group cursor-pointer h-64 shadow-2xl relative overflow-hidden">
                        <div className="flex justify-between items-start relative z-10">
                            <span className="text-5xl font-light scale-y-125 group-hover:translate-x-3 transition-transform duration-700">↗</span>
                        </div>
                        <div className="relative z-10">
                            <span className="text-xs font-black uppercase tracking-widest opacity-60 block mb-2">Next Step</span>
                            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">Get Started</h2>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Simple Stats Section */}
            <Container className="mt-24 lg:mt-40 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase">
                            Smart homes should be <br />
                            <span className="text-brand-accent font-serif italic font-normal normal-case tracking-normal text-6xl">simple.</span> <br />
                            <span className="text-white/40">And completely local.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-12 border-t border-white/10 pt-12">
                        <div>
                            <div className="text-4xl font-black text-white/20 tracking-tighter">0</div>
                            <div className="text-[10px] font-black mt-3 tracking-widest uppercase mb-1">Subscriptions</div>
                            <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wide">One time buy.</p>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-white/20 tracking-tighter">100%</div>
                            <div className="text-[10px] font-black mt-3 tracking-widest uppercase mb-1">Local Control</div>
                            <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wide">Works offline.</p>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-white/20 tracking-tighter">AES</div>
                            <div className="text-[10px] font-black mt-3 tracking-widest uppercase mb-1">Encrypted</div>
                            <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-wide">Total security.</p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-full h-[60vh] bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent pointer-events-none opacity-20 blur-[120px]"></div>
        </section>
    );
}
