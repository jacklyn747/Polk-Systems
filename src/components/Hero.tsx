import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Hero() {
    return (
        <section className="relative min-h-screen bg-brand-black text-brand-white pt-24 pb-12 overflow-hidden">
            <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                {/* Main Hero Content - Left Side (The Sovereign) */}
                <div className="lg:col-span-8 relative aspect-[4/3] lg:aspect-auto lg:h-[80vh] bg-brand-dark-grey rounded-[40px] overflow-hidden group">
                    <Image
                        src="/hero-living-room.jpg"
                        alt="Polk Sovereign Interior"
                        fill
                        className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2000ms] ease-out grayscale-[20%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                        <h1 className="text-[14vw] leading-[0.75] font-black tracking-tighter text-white mix-blend-overlay opacity-80 select-none uppercase">
                            Sovereign
                        </h1>
                        <div className="flex justify-between items-end w-full mt-8 border-t border-white/10 pt-10">
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight">Alpine Sanctuary</h3>
                                <p className="text-brand-accent text-xs font-black tracking-[0.3em] mt-2 uppercase">Local_Node_Active</p>
                            </div>
                            <Link href="/manifesto" className="text-[10px] font-black uppercase tracking-[0.4em] border border-white/20 px-8 py-4 rounded-full hover:bg-brand-accent hover:border-brand-accent transition-all duration-500 backdrop-blur-sm">
                                The Manifesto ↘
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Grid Lines Overlay */}
                    <div className="absolute inset-0 polk-grid-overlay opacity-30 pointer-events-none"></div>
                </div>

                {/* Right Side Grid (The Home) */}
                <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                    <div className="flex-1 bg-brand-dark-grey rounded-[40px] relative overflow-hidden group min-h-[40vh]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-[14vw] lg:text-[10vw] leading-[0.8] font-black tracking-tighter text-white/5 group-hover:text-white/10 transition-colors select-none uppercase">
                                Home
                            </h1>
                        </div>
                        <div className="absolute bottom-12 left-12">
                            <h3 className="text-xl font-bold tracking-tight">Zero-Access</h3>
                            <p className="text-white/40 text-[10px] font-bold tracking-widest mt-2 uppercase">Encrypted_P2P_Tunnel</p>
                        </div>
                        <div className="absolute top-12 right-12">
                            <div className="w-16 h-0.5 bg-brand-accent/50"></div>
                        </div>
                    </div>

                    <div className="bg-brand-accent rounded-[40px] p-10 flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-700 group cursor-pointer h-56 shadow-2xl">
                        <div className="flex justify-between items-start">
                            <span className="text-4xl font-light scale-y-125 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">↗</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-60">Initiate Protocol</span>
                            <h3 className="text-2xl font-black mt-2 tracking-tight uppercase">Get Started</h3>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Introduction Text Section (Stats / Value Prop) */}
            <Container className="mt-24 lg:mt-40">
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

            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-full h-[60vh] bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent pointer-events-none opacity-20 blur-[120px]"></div>
        </section>
    );
}
