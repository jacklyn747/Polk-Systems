import Link from "next/link";
import { Container } from "@/components/ui/Container";

const socialLinks = [
    { name: "Telegram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Behance", href: "#" },
    { name: "WhatsApp", href: "#" }
];

export function Footer() {
    return (
        <footer id="get-in-touch" className="bg-brand-black text-brand-white border-t border-white/5 py-32">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
                    <div>
                        <span className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase opacity-60">Connect</span>
                        <h2 className="text-5xl md:text-7xl font-black mt-8 uppercase tracking-tighter leading-[0.85]">
                            Let's build your <br />
                            <span className="font-serif italic font-normal normal-case tracking-normal text-brand-accent">Sanctuary.</span>
                        </h2>

                        <div className="flex flex-col gap-8 max-w-md mt-16">
                            <div className="group relative">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-transparent border-b border-white/10 py-6 text-brand-white focus:outline-none focus:border-brand-accent transition-all placeholder:text-white/20 font-bold uppercase text-xs tracking-widest"
                                />
                            </div>
                            <div className="group relative">
                                <input
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full bg-transparent border-b border-white/10 py-6 text-brand-white focus:outline-none focus:border-brand-accent transition-all placeholder:text-white/20 font-bold uppercase text-xs tracking-widest"
                                />
                            </div>
                            <button className="self-end mt-8 text-xs font-black uppercase tracking-[0.4em] hover:text-brand-accent transition-all group flex items-center gap-4">
                                Send Message <span className="group-hover:translate-x-2 transition-transform duration-500">↘</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 content-end">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                className="border border-white/5 aspect-square flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-700 text-[10px] font-black uppercase tracking-[0.3em] group shadow-premium"
                            >
                                <span className="group-hover:scale-110 transition-transform">{social.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 border-t border-white/5 pt-12 gap-8 text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
                    <div>© Polk Systems {new Date().getFullYear()}</div>
                    <div className="md:col-span-2 flex justify-center gap-12">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent" />
                            <span>System Sovereign</span>
                        </div>
                    </div>
                    <div className="flex gap-8 justify-end text-white/40">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
