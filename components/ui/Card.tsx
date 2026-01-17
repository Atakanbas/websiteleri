"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hover = false, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "bg-white rounded-2xl border border-border-muted p-6 shadow-sm",
                hover && "transition-transform hover:-translate-y-1 hover:shadow-md",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

export { Card };
