# 🏥 Patil Multispeciality Hospital — Next.js Website

A production-ready, SEO-optimized hospital website built with **Next.js 14 App Router**, **Tailwind CSS**, **MongoDB**, and **Nodemailer**.

---

## 🚀 Tech Stack

| Layer        | Technology                   |
|--------------|------------------------------|
| Framework    | Next.js 14 (App Router)      |
| Styling      | Tailwind CSS                 |
| Forms        | React Hook Form + Zod        |
| Database     | MongoDB + Mongoose           |
| Email        | Nodemailer (Gmail SMTP)      |
| Icons        | Lucide React                 |
| Deployment   | Vercel                       |

---

## 📦 Getting Started

### 1. Clone & Install

```bash
cd hospital-website
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

**Required variables:**
- `MONGODB_URI` — MongoDB connection string
- `SMTP_USER` / `SMTP_PASS` — Gmail credentials (use App Password)
- `NEXT_PUBLIC_SITE_URL` — Your production domain

### 3. Run Development Server

```bash
npm run dev
# Open http://localhost:3000
```

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.js             # Home page
│   ├── about/              # About Us
│   ├── doctors/            # Doctors listing + [slug]
│   ├── services/           # Services listing + [slug]
│   ├── facilities/         # Facilities listing + [slug]
│   ├── appointment/        # Book Appointment
│   ├── contact/            # Contact Us
│   ├── blog/               # Health Blog
│   ├── faq/                # FAQ
│   ├── privacy-policy/     # Privacy Policy
│   ├── terms-condition/    # Terms & Conditions
│   ├── api/                # API Routes
│   │   ├── appointment/    # POST /api/appointment
│   │   └── contact/        # POST /api/contact
│   ├── sitemap.js          # Auto-generated XML sitemap
│   └── robots.js           # robots.txt
│
├── components/
│   ├── common/             # Navbar, Footer, Button, etc.
│   ├── home/               # Hero, About, Services, etc.
│   ├── doctors/            # DoctorCard, DoctorProfile
│   ├── services/           # ServiceCard, ServiceDetails
│   ├── facilities/         # FacilityCard, FacilityDetails
│   ├── forms/              # AppointmentForm, ContactForm
│   └── seo/                # JsonLd
│
├── data/                   # Static data (doctors, services, etc.)
├── lib/                    # DB, mail, SEO, validations
└── utils/                  # Constants, helpers
```

---

## ✅ Features

- **SEO-optimized** — Dynamic metadata, JSON-LD schema, sitemap, robots.txt
- **Appointment Booking** — Full form with Zod validation, MongoDB storage, email confirmation
- **Contact Form** — With server-side validation and email notification
- **Doctor Profiles** — Individual SEO-friendly URLs (`/doctors/dr-name-specialty`)
- **Service Pages** — Detailed pages for each specialization
- **Facility Pages** — Dedicated pages for each facility
- **WhatsApp Float** — Sticky WhatsApp chat button
- **Emergency Button** — Always-visible emergency call CTA
- **Security Headers** — XSS, CSRF, HSTS headers configured
- **Responsive** — Mobile-first design
- **Google Analytics** — Ready to connect via `NEXT_PUBLIC_GA_ID`

---

## 🔧 Customization

### Change Hospital Details
Edit `src/utils/constants.js` — update name, phone, address, social links.

### Add More Doctors
Edit `src/data/doctors.js` — add a new object following the existing schema.

### Add More Services
Edit `src/data/services.js` — pages are auto-generated via `generateStaticParams`.

### Replace Placeholder Images
Add real photos to `public/images/doctors/`, `public/images/services/`, etc.
Use filenames matching the `image` field in each data file.

---

## 🌐 Deployment (Vercel)

```bash
npm install -g vercel
vercel
```

Set all environment variables in the Vercel dashboard under **Settings → Environment Variables**.

---

## 📧 Gmail SMTP Setup

1. Enable 2FA on your Google account
2. Go to **Google Account → Security → App Passwords**
3. Generate an App Password for "Mail"
4. Use it as `SMTP_PASS` in `.env.local`

---

## 📄 License

MIT — free to use for commercial and personal projects.
