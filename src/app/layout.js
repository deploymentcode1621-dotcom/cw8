import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Nunito } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Script from "next/script";
import { SITE_CONFIG } from "@/utils/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Best Multispeciality Hospital in Latur`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Patil Multispeciality Hospital provides world-class healthcare with expert doctors, advanced technology, and compassionate care. Available 24/7 for emergencies.",
  keywords: [
    "multispeciality hospital",
    "hospital in Latur",
    "best hospital Maharashtra",
    "24/7 emergency care",
    "specialist doctors",
    "advanced diagnostics",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Best Multispeciality Hospital in Latur`,
    description:
      "Patil Multispeciality Hospital provides world-class healthcare with expert doctors, advanced technology, and compassionate care.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Best Multispeciality Hospital in Latur`,
    description:
      "World-class healthcare with expert doctors and advanced technology.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${nunito.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="font-medical antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        {/* <AppointmentSticky /> */}

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
