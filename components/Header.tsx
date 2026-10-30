"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Health Insurance Plans", href: "/health-insurance-plans" },
  { label: "About Us", href: "/about-us" },
  { label: "FAQs & Resources", href: "/faqs-resources" },
  { label: "Contact", href: "/contact" },
];

const PHONES = [
  { display: "+91 99950 67188", tel: "+919995067188" },
  { display: "+91 88481 51514", tel: "+918848151514" },
];

// WhatsApp number in international format, no "+" or spaces
const WHATSAPP_NUMBER = "919995067188";
const WHATSAPP_MESSAGE =
  "Hello, I would like to know more about health insurance plans.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

type IconProps = { className?: string; size?: number };

function PinIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChatIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-4.95A9 9 0 1 1 8 19.35L3 21Z" />
    </svg>
  );
}

function PhoneIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* ───────── Top info bar (desktop only) ───────── */}
      <div className="hidden bg-[#0f1f45] text-white lg:block">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-1.5 text-[12px]">
          <div className="flex min-w-0 items-center gap-x-6 text-[#d3dae8]">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <PinIcon size={14} className="shrink-0 text-[#4a90e2]" />
              <span>
                Nilambur Office <span className="mx-0.5">•</span> Wandoor Office (Kerala)
              </span>
            </div>
            <span className="hidden whitespace-nowrap xl:inline">
              Health Insurance Advisory <span className="mx-0.5">•</span> Star Health{" "}
              <span className="mx-0.5">•</span> HDFC ERGO
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
            <span className="text-[#c9d3e8]">Phone:</span>
            {PHONES.map((p, i) => (
              <span key={p.tel} className="flex items-center gap-2">
                <a
                  href={`tel:${p.tel}`}
                  className="font-semibold text-white transition-colors hover:text-[#7db4f5]"
                  aria-label={`Call ${p.display}`}
                >
                  {p.display}
                </a>
                {i < PHONES.length - 1 && <span className="text-[#c9d3e8]">,</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── Main nav bar ───────── */}
      <div className="bg-white shadow-[0_2px_12px_rgba(15,31,69,0.06)]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-2 sm:px-6">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)} aria-label="Bhoumi Consultancy – Home">
            <Image
              src="/logo.avif"
              alt="Bhoumi Consultancy"
              width={120}
              height={56}
              priority
              className="h-9 w-auto object-contain sm:h-10 xl:h-12"
            />
          </Link>

          {/* Desktop nav (shows from 1024px) */}
          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-[14px] font-medium transition-colors xl:px-3.5 xl:text-[15px] ${
                    active
                      ? "bg-[#eef4fd] text-[#1a5fd0]"
                      : "text-[#1b2540] hover:bg-[#f3f6fb] hover:text-[#1a5fd0]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 whitespace-nowrap rounded-lg bg-[#1456c1] px-3 py-2.5 text-[14px] font-bold text-white shadow-[0_4px_12px_rgba(20,86,193,0.3)] transition hover:bg-[#0f47a3] lg:flex xl:px-4"
            >
              <ChatIcon />
              <span className="xl:hidden">Call / WhatsApp</span>
              <span className="hidden xl:inline">CALL / Whatsapp: 9995067188</span>
            </a>

            {/* Mobile: call icon + menu toggle */}
            <a
              href={`tel:${PHONES[0].tel}`}
              aria-label={`Call ${PHONES[0].display}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#dbe6f7] bg-[#eef4fd] text-[#1b2540] lg:hidden"
            >
              <PhoneIcon size={16} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#dbe6f7] bg-[#eef4fd] text-[#1b2540] lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="border-t border-slate-100 lg:hidden">
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-[1280px] flex-col gap-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                      active
                        ? "bg-[#eef4fd] text-[#1a5fd0]"
                        : "text-[#1b2540] hover:bg-[#f3f6fb]"
                    }`}
                  >
                    {link.label}
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-[#1a5fd0]" />}
                  </Link>
                );
              })}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#1456c1] px-4 py-2.5 text-[14px] font-bold text-white"
              >
                <ChatIcon size={16} />
                <span>CALL / Whatsapp: 9995067188</span>
              </a>

              <a
                href={`tel:${PHONES[0].tel}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#dbe6f7] bg-white px-4 py-2.5 text-[14px] font-medium text-[#1b2540]"
              >
                <PhoneIcon size={15} />
                <span>Call {PHONES[0].display}</span>
              </a>

              <p className="mt-2 text-center text-[11px] text-slate-500">
                Nilambur <span className="mx-0.5">•</span> Wandoor <span className="mx-0.5">•</span> Star Health{" "}
                <span className="mx-0.5">•</span> HDFC ERGO
              </p>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
