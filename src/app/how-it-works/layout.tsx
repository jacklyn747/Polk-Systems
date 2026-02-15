import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/how-it-works");

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
    return children;
}
