import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/terms");

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
