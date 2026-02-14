import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1920px] px-8 md:px-16 lg:px-24",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
