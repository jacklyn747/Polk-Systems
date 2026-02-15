import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/audit");

export default function AuditLayout({ children }: { children: React.ReactNode }) {
    return children;
}
