"use client";

import React, { useEffect, useState } from "react";

export function AnalogClock() {
    const [time, setTime] = useState<Date | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTime(new Date());
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!mounted || !time) {
        return <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px]" />;
    }

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondsDegrees = (seconds / 60) * 360;
    const minutesDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hoursDegrees = (((hours % 12) + minutes / 60) / 12) * 360;

    // Slot data: Only two statuses
    const slots = [
        { status: "busy" }, { status: "free" }, { status: "busy" },
        { status: "busy" }, { status: "free" }, { status: "free" },
        { status: "busy" }, { status: "free" }, { status: "busy" },
        { status: "free" }, { status: "free" }, { status: "busy" },
    ];

    return (
        <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] group flex items-center justify-center">
            {/* Soft Ambient Glow */}
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] opacity-10 pointer-events-none" />

            {/* Main Dial Container */}
            <div className="relative w-[90%] h-[90%] rounded-full border border-primary/10 bg-white/40 backdrop-blur-3xl shadow-[0_40px_80px_-20px_rgba(4,24,50,0.15)] overflow-hidden">

                {/* 1. Appointment Ring (Two-Color Only) */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full transform -rotate-90">
                    {slots.map((slot, i) => {
                        const isBusy = slot.status === "busy";
                        return (
                            <circle
                                key={i}
                                cx="50" cy="50" r="44"
                                fill="none"
                                stroke={isBusy ? "var(--color-accent)" : "rgba(4, 24, 50, 0.05)"}
                                strokeWidth="12"
                                strokeDasharray="21.5 100"
                                strokeDashoffset={-(i * 23.2) + 4}
                                className="transition-all duration-500"
                            />
                        );
                    })}
                </svg>

                {/* 2. Inner Dial / Hands Area */}
                <div className="absolute inset-[15%] rounded-full border border-primary/5 bg-white/10 flex items-center justify-center">

                    {/* Tick Marks */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                        {[...Array(12)].map((_, i) => (
                            <line
                                key={i}
                                x1="50" y1="8" x2="50" y2="12"
                                stroke="currentColor"
                                className="text-primary/20"
                                strokeWidth="1"
                                transform={`rotate(${i * 30} 50 50)`}
                            />
                        ))}
                    </svg>

                    {/* Clock Hands - CENTERED AT 50% / 50% */}
                    <div className="absolute inset-0">
                        {/* Hour Hand */}
                        <div
                            className="absolute top-1/2 left-1/2 w-0 h-0 transition-transform duration-500"
                            style={{ transform: `rotate(${hoursDegrees}deg)` }}
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-16 md:h-22 bg-primary rounded-full shadow-lg" />
                        </div>

                        {/* Minute Hand */}
                        <div
                            className="absolute top-1/2 left-1/2 w-0 h-0 transition-transform duration-500"
                            style={{ transform: `rotate(${minutesDegrees}deg)` }}
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-24 md:h-32 bg-primary/80 rounded-full" />
                        </div>

                        {/* Second Hand */}
                        <div
                            className="absolute top-1/2 left-1/2 w-0 h-0"
                            style={{ transform: `rotate(${secondsDegrees}deg)` }}
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-28 md:h-36 bg-accent rounded-full" />
                            {/* Hand Tip */}
                            <div className="absolute bottom-[28px] md:bottom-[36px] left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full border border-white shadow-sm" />
                        </div>

                        {/* Center Cap (Fixes the origin look) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-primary/10 shadow-md flex items-center justify-center z-10">
                            <div className="w-1.5 h-1.5 bg-primary/20 rounded-full" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Legend (Positioned clearly outside the dial) */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-6 text-[10px] md:text-[11px] font-bold tracking-widest uppercase opacity-70 transition-opacity group-hover:opacity-100">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-primary truncate">Dolu</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/20" />
                    <span className="text-primary truncate">Müsait</span>
                </div>
            </div>
        </div>
    );
}
