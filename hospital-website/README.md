# 🏥 MediCare Plus Hospital Website

A professional, SEO-optimised hospital website built with **Next.js 14** (App Router) and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout + SEO metadata
│   ├── globals.css           # Tailwind + custom styles
│   ├── sitemap.ts            # Auto-generated sitemap
│   ├── robots.ts             # Robots.txt
│   ├── about/page.tsx        # About Us page
│   ├── doctors/page.tsx      # Doctors & Specialists
│   ├── facilities/page.tsx   # Hospital Facilities
│   ├── contact/page.tsx      # Contact & Appointment Form
│   └── services/
│       ├── cardiology/       # Cardiology department page
│       ├── neurology/        # Neurology department page
│       ├── orthopedics/      # Orthopedics department page
│       ├── pediatrics/       # Pediatrics department page
│       ├── gynecology/       # Gynecology department page
│       └── oncology/         # Oncology department page
├── components/
│   ├── Navbar.tsx            # Sticky nav with dropdown + mobile menu
│   ├── Footer.tsx            # Full footer with newsletter
│   └── ServicePageTemplate.tsx  # Reusable service page component
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#0ea5e9` (Sky Blue) |
| Navy | `#0B2545` |
| Teal Accent | `#14b8a6` |
| Body Font | Inter |
| Display Font | Merriweather |

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services grid, doctors, testimonials |
| About | `/about` | Timeline, mission, values, leadership |
| Cardiology | `/services/cardiology` | Conditions, treatments, doctors, FAQ |
| Neurology | `/services/neurology` | Same structure |
| Orthopedics | `/services/orthopedics` | Same structure |
| Pediatrics | `/services/pediatrics` | Same structure |
| Gynecology | `/services/gynecology` | Same structure |
| Oncology | `/services/oncology` | Same structure |
| Doctors | `/doctors` | All doctors by department |
| Facilities | `/facilities` | Infrastructure, amenities |
| Contact | `/contact` | Appointment form, contact info |

---

## 🔍 SEO Features

- ✅ Unique `<title>` and `<meta description>` on every page
- ✅ Open Graph & Twitter card meta tags
- ✅ Canonical URLs
- ✅ XML Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Semantic HTML (h1, h2, aria-labels)
- ✅ Next.js Image optimisation ready
- ✅ Google Fonts with preconnect

---

## 🛠 Customisation

### Change Hospital Name / Contact Details
Edit `src/components/Navbar.tsx`, `src/components/Footer.tsx`, and `src/app/layout.tsx`.

### Add Real Images
Replace emoji placeholders with `<Image>` from `next/image`. Add your image folder to `public/images/`.

### Connect a Backend / CMS
The appointment form in `src/app/contact/page.tsx` can be connected to any API endpoint or form service (e.g. Formspree, EmailJS, custom API route).

### Update Google Maps
Replace the placeholder in `src/app/contact/page.tsx` with your actual Google Maps embed iframe.

---

## 📦 Tech Stack

- **Next.js 14** — App Router, SSG/SSR, metadata API
- **Tailwind CSS 3** — Utility-first styling
- **TypeScript** — Type safety
- **Google Fonts** — Inter + Merriweather

---

Built with ❤️ for MediCare Plus Hospital.
