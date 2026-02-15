import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/warranty");

export default function WarrantyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
