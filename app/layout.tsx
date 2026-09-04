import type { Metadata } from "next";
import { Anton, Archivo_Black, Inter, Sacramento } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SITE } from "@/lib/data";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const siteUrl = getSiteUrl();
const title = `${SITE.name} | Full Stack Developer`;
const description =
  "Portfolio of Abubakar Khan Lodhi — Full Stack Developer specializing in Laravel, React, Next.js, TypeScript, and scalable web applications. Based in Lahore, Pakistan.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description,
  applicationName: "Abubakar Khan Lodhi Portfolio",
  authors: [{ name: SITE.name, url: siteUrl }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "Abubakar Khan Lodhi",
    "Abubakar Lodhi",
    "Full Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Lahore",
    "Pakistan",
    "Portfolio",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${SITE.name} Portfolio`,
    title,
    description,
    images: [
      {
        url: SITE.image,
        width: 1200,
        height: 1200,
        alt: `${SITE.name} — Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [SITE.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: SITE.name,
      url: siteUrl,
      image: `${siteUrl}${SITE.image}`,
      jobTitle: SITE.role,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      sameAs: [SITE.github, SITE.linkedin],
      knowsAbout: [
        "Full Stack Development",
        "Laravel",
        "React",
        "Next.js",
        "TypeScript",
        "PHP",
        "AI and Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${SITE.name} Portfolio`,
      description,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: title,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      description,
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivoBlack.variable} ${inter.variable} ${sacramento.variable}`}
    >
      <body className="min-w-0 overflow-x-clip bg-ink font-body text-cream antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
