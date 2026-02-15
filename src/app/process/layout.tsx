import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/process");

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
    return children;
}
