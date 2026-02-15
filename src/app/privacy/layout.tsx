import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/privacy");

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
