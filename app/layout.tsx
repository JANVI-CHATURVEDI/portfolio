import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import { portfolio } from "@/lib/portfolio";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-pixelify",
  display: "swap",
});

const title = `${portfolio.name} — ${portfolio.title}`;
const description = `${portfolio.tagline} ${portfolio.bio}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s — ${portfolio.name}`,
  },
  description,
  authors: [{ name: portfolio.name, url: "https://github.com/JANVI-CHATURVEDI" }],
  keywords: [
    "Janvi Chaturvedi",
    "Full-Stack Developer",
    "Software Engineer",
    "Django Developer",
    "React Developer",
    "Python",
    "Portfolio",
    "Kanpur",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: portfolio.name,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} ${pixelify.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  );
}
