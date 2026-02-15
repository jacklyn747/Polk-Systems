import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/system");

export default function SystemLayout({ children }: { children: React.ReactNode }) {
    return children;
}
