# Mafsoft Corporate Website

Modern, SEO-optimized corporate website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ **Dynamic Sector-Based Color System**: Each business sector has its own accent color while maintaining corporate identity
- ✅ **SEO Optimized**: Comprehensive metadata, JSON-LD structured data, sitemap, robots.txt
- ✅ **Accessibility**: WCAG AA compliant with keyboard navigation and ARIA labels
- ✅ **Performance**: Optimized for Core Web Vitals (LCP, INP, CLS)
- ✅ **Security**: OWASP secure headers, CSP, rate limiting, honeypot anti-spam
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Form Handling**: Server Actions with Zod validation

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: shadcn/ui + Radix UI
- **Form Validation**: Zod + React Hook Form
- **Icons**: Lucide React + Simple Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update environment variables in `.env`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Mafsoft
EMAIL_FROM=noreply@mafsoft.com
EMAIL_TO=info@mafsoft.com
RESEND_API_KEY=your_api_key_here
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── actions/           # Server Actions
│   ├── iletisim/          # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles + design system
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── ui/               # Base UI components (shadcn/ui)
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero section
│   ├── SectorCards.tsx   # Sector cards with dynamic accents
│   ├── ContactForm.tsx   # Contact form
│   └── ...
├── lib/                   # Utilities and helpers
│   ├── accents.ts        # Sector accent color system
│   ├── seo.ts            # SEO helpers
│   ├── schema.ts         # JSON-LD schema builders
│   ├── validators.ts     # Zod schemas
│   ├── rateLimit.ts      # Rate limiting
│   └── utils.ts          # General utilities
├── public/               # Static assets
│   └── logo.png         # Company logo
└── ...config files
```

## Dynamic Color System

The website uses a unique dynamic accent color system where each business sector has its own color:

- **Health/Medical**: Turkuaz (#14B8A6)
- **CRM/ERP**: Blue (#2563EB)
- **WhatsApp Bot**: Green (#22C55E)
- **Electronics**: Amber (#F59E0B)
- **Booking**: Purple (#7C3AED)
- **B2B**: Indigo (#4F46E5)

Colors are applied via CSS custom properties and `data-accent` attributes on section elements.

## Form Handling

The contact form uses Next.js Server Actions with:
- Zod validation (client + server)
- Honeypot anti-spam field
- Rate limiting (3 requests per 15 minutes)
- KVKK consent checkbox
- Accessible error messages with `aria-describedby`

To enable email notifications, configure your email service (Resend, SMTP, etc.) in `app/actions/contact.ts`.

## SEO

- Metadata on all pages (title, description, OG tags)
- JSON-LD structured data (Organization, WebSite, Service, etc.)
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Semantic HTML and proper heading hierarchy

## Security

Security headers configured in `next.config.mjs`:
- HSTS (Strict-Transport-Security)
- CSP (Content-Security-Policy-Report-Only)
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The project is a standard Next.js application and can be deployed to any platform that supports Node.js.

## License

© 2026 Mafsoft. All rights reserved.
