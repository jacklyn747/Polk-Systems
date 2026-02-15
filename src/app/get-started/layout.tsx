import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/get-started");

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
    return children;
}
