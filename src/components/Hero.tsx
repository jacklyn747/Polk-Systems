import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Hero() {
    return (
        <section className="relative min-h-screen bg-brand-black text-brand-white pt-24 pb-12 overflow-hidden">
            {/* Background Architectural Grid (Full Section) */}
            <div className="absolute inset-0 polk-architectural-grid opacity-20 pointer-events-none z-0"></div>

            <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                {/* Main Hero Content - Left Side (The Sovereign) */}
                <div className="lg:col-span-8 relative aspect-[4/3] lg:aspect-auto lg:h-[85vh] bg-brand-dark-grey rounded-[40px] overflow-hidden group border border-white/5 shadow-premium">
                    <Image
                        src="/hero-ultra-hd.png"
                        alt="Polk Sovereign Sanctuary"
                        fill
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-[3000ms] ease-out grayscale-[10%]"
                        priority
                    />

                    {/* The "GRIS" Technical Overlay - White Grid on Top */}
                    <div className="absolute inset-0 polk-grid-overlay opacity-40 pointer-events-none z-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10"></div>

                    {/* Architectural Plus Markers */}
                    <div className="polk-plus-marker top-12 left-12 text-white"></div>
                    <div className="polk-plus-marker top-12 right-12 text-white"></div>
                    <div className="polk-plus-marker bottom-12 left-12 text-white"></div>
                    <div className="polk-plus-marker bottom-12 right-12 text-white"></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-30">
                        <h1 className="text-[15vw] leading-[0.7] font-black tracking-tighter text-white mix-blend-overlay opacity-90 select-none uppercase mb-4">
                            Sovereign
                        </h1>
                        <div className="flex justify-between items-end w-full mt-8 border-t border-white/20 pt-10">
                            <div>
                                <h3 className="text-3xl font-black uppercase tracking-tight">Alpine Sanctuary</h3>
                                <p className="text-brand-accent text-[10px] font-black tracking-[0.4em] mt-3 uppercase">ARCHITECT_NODE_ACTIVE_01</p>
                            </div>
                            <Link href="/manifesto" className="text-[10px] font-black uppercase tracking-[0.4em] bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-full hover:bg-brand-accent hover:text-black hover:border-brand-accent transition-all duration-700">
                                The Manifesto ↘
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side Grid (The Home) */}
                <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                    <div className="flex-1 bg-brand-dark-grey rounded-[40px] relative overflow-hidden group min-h-[40vh] border border-white/5 shadow-premium">
                        <div className="absolute inset-0 polk-grid-overlay opacity-20 pointer-events-none z-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <h1 className="text-[14vw] lg:text-[12vw] leading-[0.8] font-black tracking-tighter text-white/5 group-hover:text-white/10 transition-colors select-none uppercase">
                                Home
                            </h1>
                        </div>

                        <div className="absolute top-12 left-12 z-30">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Secure_Link</span>
                            </div>
                        </div>

                        <div className="absolute bottom-12 left-12 z-30">
                            <h3 className="text-2xl font-black uppercase tracking-tight">Zero-Access</h3>
                            <p className="text-white/40 text-[9px] font-black tracking-[0.4em] mt-2 uppercase">Encrypted_P2P_Tunnel</p>
                        </div>

                        {/* Corner Markers */}
                        <div className="polk-plus-marker top-8 right-8 text-white/20"></div>
                        <div className="polk-plus-marker bottom-8 right-8 text-white/20"></div>
                    </div>

                    <div className="bg-brand-accent rounded-[40px] p-12 flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-700 group cursor-pointer h-64 shadow-2xl relative overflow-hidden">
                        {/* Subtle Grid on the CTA button too */}
                        <div className="absolute inset-0 polk-grid-overlay opacity-10 pointer-events-none z-0"></div>

                        <div className="flex justify-between items-start relative z-10">
                            <span className="text-5xl font-light scale-y-125 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-700">↗</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Protocol_[01]</span>
                        </div>
                        <div className="relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-60 block mb-2">Initiate Setup</span>
                            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">Get Started</h2>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Introduction Text Section (Stats / Value Prop) */}
            <Container className="mt-24 lg:mt-40 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter uppercase">
                            We build <span className="text-brand-accent font-serif italic font-normal normal-case tracking-normal">Sanctuaries</span> <br />
                            <span className="text-white/40">Not just systems.</span> <br />
                            Your data stays <span className="inline-block w-20 h-10 bg-brand-dark-grey rounded-full mx-2 align-middle relative overflow-hidden border border-white/10"><Image src="/nuc-detail.png" alt="" fill className="object-cover grayscale" /></span> Permanent.
                        </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-12 border-t border-white/10 pt-12">
                        <div>
                            <div className="text-5xl font-black text-white/10 tracking-tighter">000</div>
                            <div className="text-[10px] font-black mt-3 tracking-widest uppercase">Cloud Syncs</div>
                            <p className="text-[10px] text-white/30 mt-2 leading-relaxed font-bold uppercase">Zero external dependency.</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-white/10 tracking-tighter">100%</div>
                            <div className="text-[10px] font-black mt-3 tracking-widest uppercase">Local Logic</div>
                            <p className="text-[10px] text-white/30 mt-2 leading-relaxed font-bold uppercase">Physical sovereignty.</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-white/10 tracking-tighter">256</div>
                            <div className="text-[10px] font-black mt-3 tracking-widest uppercase">Bit AES</div>
                            <p className="text-[10px] text-white/30 mt-2 leading-relaxed font-bold uppercase">NIST Standard Security.</p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Side Labels (Figma Aesthetic) */}
            <div className="absolute top-1/2 left-6 -translate-y-1/2 polk-side-text hidden xl:block">
                Digital_Sanctuary_Standard_v2.0
            </div>
            <div className="absolute top-1/2 right-6 -translate-y-1/2 polk-side-text hidden xl:block">
                Sovereign_Logic_Operations
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-full h-[60vh] bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent pointer-events-none opacity-20 blur-[120px]"></div>
        </section>
    );
}
