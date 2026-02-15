import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function DiscoverPage() {
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
                            Discover.
                        </h1>
                        <p className="text-2xl md:text-3xl text-brand-white/60 font-medium max-w-4xl leading-relaxed">
                            A smart home shouldn't be guessed. <span className="text-brand-white">It should be measured.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/10 pt-16">
                        <div className="md:col-span-4">
                            <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent mb-4">Phase One</h3>
                            <p className="text-lg text-white/80 leading-relaxed">
                                We begin with a comprehensive audit of your digital and physical environment. We map your lifestyle patterns, analyze your electrical infrastructure, and identify potential privacy vulnerabilities.
                            </p>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Lifestyle Mapping</h4>
                                <p className="text-sm text-white/50 leading-relaxed">We interview you to understand how you actually live, not how a template says you should.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">RF Spectrum Analysis</h4>
                                <p className="text-sm text-white/50 leading-relaxed">We scan your home's radio frequencies to ensure your new local network will be interference-free.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Privacy Audit</h4>
                                <p className="text-sm text-white/50 leading-relaxed">We identify existing IoT devices that are leaking data and plan their containment or removal.</p>
                            </div>
                            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                                <h4 className="text-xl font-bold uppercase mb-4">Infrastructure Scan</h4>
                                <p className="text-sm text-white/50 leading-relaxed">We verify your wiring and power stability to guarantee 99.99% uptime for the Core.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 flex justify-end">
                        <Link href="/process/setup" className="group flex items-center gap-4 text-xl font-black uppercase tracking-widest hover:text-brand-accent transition-colors">
                            Next: Setup <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
