import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Grid({ className, children, ...props }: GridProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export function Col({ className, children, span = 12, ...props }: ColProps) {
    // Basic mapping for desktop spans. Mobile defaults to full width (12) via CSS grid-cols-1 above.
    const spanClasses = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
        4: "md:col-span-4",
        5: "md:col-span-5",
        6: "md:col-span-6",
        7: "md:col-span-7",
        8: "md:col-span-8",
        9: "md:col-span-9",
        10: "md:col-span-10",
        11: "md:col-span-11",
        12: "md:col-span-12",
    };

    return (
        <div
            className={cn(spanClasses[span], className)}
            {...props}
        >
            {children}
        </div>
    );
}
