import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/story");

export default function StoryLayout({ children }: { children: React.ReactNode }) {
    return children;
}
