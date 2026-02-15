import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/why-we-are-different");

export default function WhyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
