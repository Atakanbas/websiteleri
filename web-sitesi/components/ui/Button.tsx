"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "accent";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-bg hover:bg-primary-dark transition-colors",
            secondary: "bg-secondary text-bg hover:opacity-90 transition-opacity",
            ghost: "bg-transparent text-primary hover:bg-border-muted/20 transition-colors",
            accent: "bg-accent text-bg hover:opacity-90 transition-opacity",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-[10px] text-base font-medium",
            lg: "px-8 py-4 text-lg font-semibold",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none ring-offset-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
