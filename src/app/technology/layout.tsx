import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/technology");

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
