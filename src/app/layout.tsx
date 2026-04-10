import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Facundo Sura | Full Stack Web Developer | Remote Worldwide",
  description: "Full Stack Web Developer specializing in cutting-edge web solutions. Remote worldwide available. Expert in React, Next.js, Node.js, TypeScript, and modern web technologies.",
  keywords: [
    "Full Stack Web Developer",
    "Web Developer",
    "Remote Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Freelance Developer",
    "Argentina Developer",
    "Worldwide Remote",
  ],
  authors: [{ name: "Facundo Sura" }],
  creator: "Facundo Sura",
  publisher: "Facundo Sura",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://facundosura.com",
    siteName: "Facundo Sura Portfolio",
    title: "Facundo Sura | Full Stack Web Developer | Remote Worldwide",
    description: "Full Stack Web Developer specializing in cutting-edge web solutions. Remote worldwide available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Facundo Sura - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facundo Sura | Full Stack Web Developer",
    description: "Full Stack Web Developer specializing in cutting-edge web solutions. Remote worldwide available.",
    creator: "@facundosura",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://facundosura.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Facundo Sura",
              jobTitle: "Full Stack Web Developer",
              url: "https://facundosura.com",
              email: "facundosura@example.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
              },
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "PostgreSQL",
                "AWS",
              ],
              availability: "https://schema.org/OnlineOnly",
            }),
          }}
        />
      </head>
      <body className="antialiased bg-black">
        {children}
      </body>
    </html>
  );
}
