import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-none border-[1px] px-8 py-4 text-[10px] font-bold tracking-[0.2em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent disabled:opacity-50 disabled:pointer-events-none uppercase font-sans",
                    variant === "primary"
                        ? "bg-brand-black border-brand-black text-brand-white hover:bg-white hover:text-brand-black"
                        : "bg-transparent border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white",
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
