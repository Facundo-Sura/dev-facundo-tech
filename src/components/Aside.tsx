import React from "react";
import { Mail, Github, Linkedin, Facebook, FileDown } from "lucide-react";

/**
 * ResponsiveAside.tsx
 *
 * A responsive contact aside for Next.js + TypeScript + TailwindCSS.
 * - Desktop (>= lg): vertical floating bar on the left.
 * - Mobile (< lg): floating bottom action bar.
 *
 * How to use:
 * 1) Put your CV file at public/cv.pdf (or pass cvPath prop).
 * 2) Import and render <ResponsiveAside ...props /> anywhere (e.g., in layout.tsx or a page).
 * 3) Customize props below with your real links.
 */

type Props = {
  email?: string; // used for Gmail compose link
  gmailSubject?: string;
  gmailBody?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  cvPath?: string; // e.g., "/cv.pdf" in /public
};

const buildGmailHref = (to: string, subject?: string, body?: string) => {
  const params = new URLSearchParams();
  params.set("view", "cm");
  params.set("fs", "1");
  params.set("to", to);
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
};

export default function ResponsiveAside({
  email = "facu@example.com",
  gmailSubject = "Consulta desde tu portfolio",
  gmailBody = "Hola Facu, quiero saber más sobre tus servicios.",
  githubUrl = "https://github.com/Facundo-Sura",
  linkedinUrl = "https://www.linkedin.com/in/tu-usuario/",
  facebookUrl = "https://www.facebook.com/tu-usuario",
  cvPath = "/cv.pdf",
}: Props) {
  const gmailHref = buildGmailHref(email, gmailSubject, gmailBody);

  const items = [
    {
      label: "Gmail",
      href: gmailHref,
      icon: Mail,
      external: true,
    },
    {
      label: "GitHub",
      href: githubUrl,
      icon: Github,
      external: true,
    },
    {
      label: "LinkedIn",
      href: linkedinUrl,
      icon: Linkedin,
      external: true,
    },
    {
      label: "Facebook",
      href: facebookUrl,
      icon: Facebook,
      external: true,
    },
    {
      label: "Download CV",
      href: cvPath,
      icon: FileDown,
      external: false,
      download: true,
    },
  ];

  return (
    <>
      {/* Desktop / large screens: vertical aside on the left */}
      <aside
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3"
        aria-label="Quick contact links"
      >
        {items.map(({ label, href, icon: Icon, external, download }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            download={download}
            title={label}
            aria-label={label}
            className="group inline-flex items-center justify-center size-12 rounded-2xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <Icon className="size-5" />
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </aside>

      {/* Mobile: floating bottom bar */}
      <nav
        className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl rounded-2xl bg-white/90 backdrop-blur shadow-xl ring-1 ring-black/5 px-3 py-2"
        aria-label="Quick contact actions"
      >
        <ul className="flex items-center justify-between gap-1">
          {items.map(({ label, href, icon: Icon, external, download }) => (
            <li key={label} className="flex-1">
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                download={download}
                className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition"
                aria-label={label}
              >
                <Icon className="size-5" />
                <span className="text-[11px] leading-none">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
