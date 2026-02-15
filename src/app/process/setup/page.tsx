import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function SetupPage() {
    return (
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-accent selection:text-black">
            <Header />

            <main className="pt-48 pb-32">
                <Container>
                    <div className="mb-24">
                        <Link href="/#the-process" className="text-brand-accent text-xs font-black tracking-[0.4em] uppercase mb-8 inline-block hover:text-white transition-colors">
                            ← Back to Process
                        </Link>
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                            Setup.
                        </h1>
                        <p className="text-2xl md:text-3xl text-brand-white/60 font-medium max-w-4xl leading-relaxed">
                            We don't just plug it in. <span className="text-brand-white">We forge it.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/10 pt-16">
                        <div className="md:col-span-4">
                            <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent mb-4">Phase Two</h3>
                            <p className="text-lg text-white/80 leading-relaxed">
                                Our engineers build your custom "Home Core" off-site. We configure, text, and burn-in every server rack for 48 hours before it ever touches your home.
                            </p>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Core Fabrication</h4>
                                <p className="text-sm text-white/50 leading-relaxed">Your dedicated server rack is assembled in our lab, ensuring a perfect, dust-free build.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Zero-Trace Install</h4>
                                <p className="text-sm text-white/50 leading-relaxed">Our white-glove team installs the hardware with surgical precision. No mess. No noise.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Sensor Calibration</h4>
                                <p className="text-sm text-white/50 leading-relaxed">We fine-tune every motion, light, and climate sensor to match the unique physics of your rooms.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Network Hardening</h4>
                                <p className="text-sm text-white/50 leading-relaxed">We deploy enterprise-grade firewalls and separate VLANs for your IoT devices.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 flex justify-between">
                        <Link href="/process/discover" className="group flex items-center gap-4 text-sm font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                            <span className="group-hover:-translate-x-2 transition-transform">←</span> Previous: Discover
                        </Link>
                        <Link href="/process/activate" className="group flex items-center gap-4 text-xl font-black uppercase tracking-widest hover:text-brand-accent transition-colors">
                            Next: Activate <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
