import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/solutions");

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
