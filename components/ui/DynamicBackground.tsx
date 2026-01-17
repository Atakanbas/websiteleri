"use client";

import React, { useEffect, useState } from "react";

export function DynamicBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-40">
            <svg className="w-full h-full filter blur-[100px]" viewBox="0 0 1000 1000">
                <circle
                    className="animate-[pulse_10s_infinite]"
                    cx="20%" cy="20%" r="300" fill="var(--color-accent)"
                    style={{ opacity: 0.1 }}
                />
                <circle
                    className="animate-[pulse_15s_infinite_reverse]"
                    cx="80%" cy="80%" r="400" fill="var(--color-secondary)"
                    style={{ opacity: 0.05 }}
                />
                <circle
                    className="animate-[pulse_12s_infinite]"
                    cx="50%" cy="50%" r="350" fill="var(--color-primary)"
                    style={{ opacity: 0.03 }}
                />
            </svg>

            {/* Interactive Cursor Blob */}
            <div
                className="absolute w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] transition-transform duration-300 ease-out"
                style={{
                    left: 'var(--mouse-x)',
                    top: 'var(--mouse-y)',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </div>
    );
}
