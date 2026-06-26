# MagoGo — Smart Organic Waste Management

> Turning organic waste into smart growth through IoT and circular economy technology.

A production-quality website for **MagoGo**, an IoT-powered smart chamber that converts organic waste into valuable biomass through intelligent monitoring and automation.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** | React framework (App Router) |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |
| **Space Grotesk** | Display typeface |
| **Inter** | Body typeface |
| **Space Mono** | Monospace / data typeface |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens, custom cursor, animations
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (composes all sections)
└── components/
    ├── Cursor.tsx         # Custom glowing cursor + ring
    ├── Navbar.tsx         # Sticky nav with mobile menu
    ├── Hero.tsx           # Full-screen hero with floating metric cards
    ├── WasteCounter.tsx   # Real-time organic waste counter (animated)
    ├── ProductShowcase.tsx # 3-card product features + tech banner
    ├── DashboardDemo.tsx  # Interactive dashboard simulation
    ├── HowItWorks.tsx     # 5-step process with scroll animations
    ├── Pricing.tsx        # Product + upgrade pricing cards
    ├── Partners.tsx       # Ecosystem / partner section
    ├── Instagram.tsx      # Social proof / Instagram preview grid
    ├── Contact.tsx        # Glass contact form + info cards
    └── Footer.tsx         # Full footer with nav + social links
```

---

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Done ✅

No environment variables needed for the base deployment.

---

## 🖼️ Adding Product Images

The hero section has a device visualization built in CSS/SVG. To replace it with a real product photo:

1. Add your image to `/public/` (e.g. `product.png`)
2. Open `src/components/Hero.tsx`
3. Replace the `<div className="animate-float relative">` block with:

```tsx
import Image from 'next/image'

<Image
  src="/product.png"
  alt="MagoGo Smart Chamber"
  width={400}
  height={500}
  className="object-contain animate-float"
  priority
/>
```

---

## 🎨 Design System

### Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Forest | `#1a3a2a` | Primary text, backgrounds |
| Emerald | `#2d7a4f` | Secondary accent |
| Emerald Light | `#3dbd6f` | Highlights, active states |
| Lime | `#a8ff3e` | Glow accent, CTAs on dark |
| Off-white | `#f4f6f2` | Page background |

### Typography

- **Display** — Space Grotesk (headings)
- **Body** — Inter (paragraphs)
- **Mono** — Space Mono (labels, data, tags)

---

## 📝 Customization

### Update Contact Info
Edit `src/components/Contact.tsx` and `src/components/Footer.tsx` — replace `hello@magogo.io` and `@magogo.io` with real values.

### Update Pricing
Edit `src/components/Pricing.tsx` — update the `Rp` prices, feature lists, and CTA href.

### Update the Waste Counter Rate
Edit `src/components/WasteCounter.tsx`:
```ts
const KG_PER_SECOND = 63700 // adjust to your preferred estimate
```

---

## 📄 License

MIT — feel free to use and adapt for MagoGo.
