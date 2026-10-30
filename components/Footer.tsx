import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

const WHATSAPP_URL = `https://wa.me/919995067188?text=${encodeURIComponent(
  "Hello, I would like to know more about health insurance plans."
)}`;

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Health Insurance Plans", href: "/health-insurance-plans" },
  { label: "About Us", href: "/about-us" },
  { label: "FAQs & Resources", href: "/faqs-resources" },
  { label: "Contact", href: "/contact" },
];

const OFFICES = [
  {
    name: "Nilambur Office",
    lines: ["Madari Building", "Mini Bypass Road", "Nilambur, Malappuram, Kerala – 679329"],
  },
  {
    name: "Wandoor Office",
    lines: ["Arimbra Building", "Nilambur Road", "Wandoor, Malappuram, Kerala – 679328"],
  },
];

// Update this once a year (new Date() is not allowed during prerendering in Next 16)
const COPYRIGHT_YEAR = 2026;

const HEADING = "font-[family-name:var(--font-heading)]";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className={`${HEADING} mb-4 border-l-2 border-[#1456c1] py-1 pl-3 text-[15px] font-bold text-white`}
    >
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#112448] text-[#c9d3e8]">
      <div className="mx-auto max-w-[1280px] px-4 pb-8 pt-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.62fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Link
              href="/"
              aria-label="Bhoumi Consultancy – Home"
              className="flex h-[62px] w-full max-w-[260px] items-center rounded-xl bg-white px-5"
            >
              <Image
                src="/logo.avif"
                alt="Bhoumi Consultancy"
                width={120}
                height={56}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="mt-7 max-w-[385px] text-[15px] leading-relaxed">
              Bhoumi Consultancy helps individuals and families explore health
              insurance plans offered by Star Health and HDFC ERGO.
            </p>

            <ul className="mt-5 space-y-2.5 text-[14.5px] leading-snug text-white">
              <li className="flex items-center gap-3">
                <Icon name="phone" size={18} className="shrink-0 text-[#4a90e2]" />
                <span>
                  Phone:{" "}
                  <a href="tel:+919995067188" className="hover:text-[#7db4f5]">
                    +91 99950 67188
                  </a>
                  ,{" "}
                  <a href="tel:+918848151514" className="hover:text-[#7db4f5]">
                    8848151514
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" size={18} className="shrink-0 text-[#4a90e2]" />
                <span className="break-all">
                  Email:{" "}
                  <a
                    href="mailto:bhoumiconsultancy@gmail.com"
                    className="hover:text-[#7db4f5]"
                  >
                    bhoumiconsultancy@gmail.com
                  </a>
                </span>
              </li>
            </ul>
            <p className="mt-3 text-[13px] text-[#8d9bb8]">
              Website: bhoumiconsultancy.com
            </p>
          </div>

          {/* Navigation */}
          <div>
            <ColumnTitle>Navigation</ColumnTitle>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-start gap-2.5 text-[15px] leading-snug transition-colors hover:text-white"
                  >
                    <Icon
                      name="arrow-right"
                      size={14}
                      className="mt-[3px] shrink-0 text-[#6f7fa0]"
                    />
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <ColumnTitle>Offices</ColumnTitle>
            <div className="space-y-4">
              {OFFICES.map((o) => (
                <div
                  key={o.name}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-[15px] font-bold leading-snug text-white">
                      {o.name}
                    </h4>
                    <Icon name="map-pin" size={16} className="shrink-0 text-[#4a90e2]" />
                  </div>
                  <p className="mt-0.5 text-[13px] leading-relaxed">
                    {o.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Providers */}
          <div>
            <ColumnTitle>Insurance Providers</ColumnTitle>
            <div className="space-y-2.5">
              <div className="flex h-[63px] items-center rounded-xl border border-white/20 bg-[#1c64c2] px-4">
                <Image
                  src="/images/star-health.avif"
                  alt="Star Health Insurance"
                  width={140}
                  height={48}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="flex h-[63px] items-center rounded-xl border border-white/20 bg-[#ed1c24] px-4">
                <Image
                  src="/images/hdfc-ergo.avif"
                  alt="HDFC ERGO General Insurance"
                  width={140}
                  height={48}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center rounded-xl bg-[#1456c1] px-4 py-2.5 text-[13px] font-bold leading-tight text-white transition hover:bg-[#0f47a3]"
            >
              CALL / Whatsapp: 9995067188
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 sm:px-7">
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#dfe6f3]">
              Suggested Disclaimer
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-[#9aa8c4]">
              Bhoumi Consultancy provides assistance and guidance relating to
              health insurance products offered by Star Health and HDFC ERGO
              from Health Insurance Expert Mr.Sanju Palakkaparamaban. Product
              features, eligibility, premiums, underwriting, policy issuance,
              and claim decisions are subject to the respective insurer’s
              terms, conditions, and policy wording. Customers should review
              official policy documents before purchasing.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-[#9aa8c4] sm:flex-row sm:items-center sm:justify-between">
          <p>© {COPYRIGHT_YEAR} Bhoumi Consultancy. All rights reserved.</p>
          <p>Website: bhoumiconsultancy.com</p>
        </div>
      </div>
    </footer>
  );
}
