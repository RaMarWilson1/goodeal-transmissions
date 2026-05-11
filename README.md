# Goodeal Discount Transmissions — Website

Production website for **Goodeal Discount Transmissions**, 261 N White Horse Pike, Hammonton, NJ. Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

To create a production build locally:
```bash
npm run build
npm start
```

---

## Common Updates

### Update Customer Reviews
Edit `src/data/reviews.ts`. Each review has:
- `name` — reviewer's display name
- `rating` — number 1–5
- `date` — ISO format, e.g. `"2025-01-15"`
- `text` — review body
- `avatar` — two-letter initials shown as a badge

### Update Phone, Address, or Hours
These appear in multiple places. Search the codebase for the old value and replace:
- **Main layout + JSON-LD**: `src/app/layout.tsx`
- **Footer**: `src/components/layout/Footer.tsx`
- **Header (phone CTA)**: `src/components/layout/Header.tsx`
- **Contact page**: `src/app/contact/page.tsx`
- **Contact strip (homepage)**: `src/components/home/ContactStrip.tsx`

### Add a New Service
Open `src/app/services/ServicesContent.tsx` and add an entry to the `services` array. Copy an existing item and fill in:
```ts
{
  icon: <YourIcon />,
  title: "Service Name",
  description: "Description paragraph...",
}
```
Add a matching SVG icon function at the bottom of the file.

### Add the Shop Photo
1. Drop your photo file into `/public/shop.jpg`
2. Open `src/app/about/AboutContent.tsx`
3. Replace the placeholder `<div>` with:
```tsx
import Image from "next/image";

<Image
  src="/shop.jpg"
  alt="Goodeal Discount Transmissions shop"
  width={600}
  height={400}
  className="rounded-lg"
  priority
/>
```

---

## Contact Form — Add Real Email Delivery

The form currently logs submissions to the server console. To send real emails:

1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Add your API key to `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```
3. Follow the TODO comment in `src/app/contact/actions.ts` to add the Resend call

---

## Deploying to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo
3. Vercel auto-detects Next.js — click **Deploy**

That's it. No configuration needed.

### Connect a Custom Domain
1. In the Vercel project dashboard, go to **Settings → Domains**
2. Add your domain (e.g. `goodealtransmissions.com`)
3. Update your domain registrar's DNS to point to Vercel's nameservers
4. Vercel handles SSL automatically

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx              Root layout: fonts, JSON-LD, nav, footer
│   ├── globals.css             CSS variables and base styles
│   ├── page.tsx                Homepage
│   ├── services/
│   │   ├── page.tsx            Services page (metadata)
│   │   └── ServicesContent.tsx Services page (animated content)
│   ├── about/
│   │   ├── page.tsx            About page (metadata)
│   │   └── AboutContent.tsx    About page (animated content)
│   ├── contact/
│   │   ├── page.tsx            Contact page
│   │   ├── ContactForm.tsx     Contact form (client component)
│   │   └── actions.ts          Server action for form submission
│   └── sitemap.ts              Auto-generated sitemap at /sitemap.xml
├── components/
│   ├── layout/
│   │   ├── Header.tsx          Sticky nav + mobile hamburger
│   │   └── Footer.tsx          Site footer
│   ├── home/
│   │   ├── Hero.tsx            Homepage hero
│   │   ├── ServicesStrip.tsx   6-icon services row
│   │   ├── WhyChooseUs.tsx     Trust signal cards
│   │   ├── Reviews.tsx         Customer review grid
│   │   └── ContactStrip.tsx    Address/hours/map strip
│   └── ui/
│       ├── Button.tsx          Reusable button
│       ├── StarRating.tsx      Star rating display
│       └── ReviewCard.tsx      Individual review card
├── data/
│   └── reviews.ts              Customer review data
└── lib/
    └── metadata.ts             Shared SEO metadata helper
public/
└── robots.txt                  Search engine directives
```
