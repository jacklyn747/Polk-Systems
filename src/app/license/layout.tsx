import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/license");

export default function LicenseLayout({ children }: { children: React.ReactNode }) {
    return children;
}
