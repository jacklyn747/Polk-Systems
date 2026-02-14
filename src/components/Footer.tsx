import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="bg-brand-black text-brand-white border-t border-white/10">
            <Container className="py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Let's Keep In Touch<br />With Us</h2>
                        <div className="flex flex-col gap-6 max-w-md">
                            <div className="group relative">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-brand-white focus:outline-none focus:border-white transition-colors placeholder:text-white/40"
                                />
                            </div>
                            <div className="group relative">
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-brand-white focus:outline-none focus:border-white transition-colors placeholder:text-white/40"
                                />
                            </div>
                            <button className="self-end mt-4 text-sm font-bold uppercase tracking-widest hover:text-white/70 transition-colors">
                                Submit ↗
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 content-end">
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="border border-white/10 aspect-square flex items-center justify-center hover:bg-white/5 transition-colors text-xs uppercase tracking-widest">Telegram</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="border border-white/10 aspect-square flex items-center justify-center hover:bg-white/5 transition-colors text-xs uppercase tracking-widest">YouTube</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="border border-white/10 aspect-square flex items-center justify-center hover:bg-white/5 transition-colors text-xs uppercase tracking-widest">Behance</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="border border-white/10 aspect-square flex items-center justify-center hover:bg-white/5 transition-colors text-xs uppercase tracking-widest">WhatsApp</Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 border-t border-white/10 pt-8 gap-8 text-xs text-white/40 uppercase tracking-widest">
                    <div>© Polk Systems 2026</div>
                    <div className="md:col-span-2"></div>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
