// Simple in-memory rate limiter (for development)
// In production, use Redis or a proper rate limiting service

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX || "3", 10);
const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000", 10); // 15 minutes

export function checkRateLimit(identifier: string): {
    allowed: boolean;
    remaining: number;
    resetTime: number;
} {
    const now = Date.now();
    const entry = rateLimitMap.get(identifier);

    if (!entry || now > entry.resetTime) {
        // New window
        const resetTime = now + WINDOW_MS;
        rateLimitMap.set(identifier, { count: 1, resetTime });
        return { allowed: true, remaining: MAX_REQUESTS - 1, resetTime };
    }

    if (entry.count >= MAX_REQUESTS) {
        // Rate limit exceeded
        return { allowed: false, remaining: 0, resetTime: entry.resetTime };
    }

    // Increment count
    entry.count++;
    rateLimitMap.set(identifier, entry);
    return { allowed: true, remaining: MAX_REQUESTS - entry.count, resetTime: entry.resetTime };
}

// Cleanup old entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitMap.entries()) {
        if (now > entry.resetTime) {
            rateLimitMap.delete(key);
        }
    }
}, WINDOW_MS);
