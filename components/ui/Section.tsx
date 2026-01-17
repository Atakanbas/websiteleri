"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, children, ...props }, ref) => (
        <section
            ref={ref}
            className={cn("py-12 md:py-16 lg:py-20", className)}
            {...props}
        >
            {container ? (
                <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    )
);
Section.displayName = "Section";

export default Section;
