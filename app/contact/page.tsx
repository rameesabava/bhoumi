import type { Metadata } from "next";
import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import EnquiryForm from "./EnquiryForm";

export const metadata: Metadata = {
  title: "Contact | Bhoumi Consultancy",
  description:
    "Contact Bhoumi Consultancy for health insurance guidance on Star Health and HDFC ERGO plans. Visit our Nilambur or Wandoor office, call, WhatsApp, or send an enquiry.",
};

/* ───────────────────────── Config ───────────────────────── */

const WHATSAPP_NUMBER = "919995067188";
const waLink = (message: string, number = WHATSAPP_NUMBER) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

const HEADING = "font-[family-name:var(--font-heading)] tracking-tight text-[#0f1f45]";

const PHONES = [
  { label: "+91 99950 67188", href: "tel:+919995067188" },
  { label: "+91 88481 51514", href: "tel:+918848151514" },
];

const EMAIL = "bhoumiconsultancy@gmail.com";
const WEBSITE = "bhoumiconsultancy.com";

const CTAS = [
  {
    label: "Request a Call Back (WhatsApp)",
    href: waLink("Hello, I would like to request a call back about health insurance."),
  },
  {
    label: "Ask About Star Health Plans (WhatsApp)",
    href: waLink("Hello, I would like to know more about Star Health plans."),
  },
  {
    label: "Ask About HDFC ERGO Plans (WhatsApp)",
    href: waLink("Hello, I would like to know more about HDFC ERGO plans."),
  },
];

const OFFICES = [
  {
    name: "Nilambur Office",
    lines: ["Madari Building", "Mini Bypass Road", "Nilambur, Malappuram", "Kerala – 679329"],
    phone: "+91 99950 67188",
    tel: "tel:+919995067188",
    wa: "919995067188",
    map: "Madari Building, Mini Bypass Road, Nilambur, Malappuram, Kerala 679329",
  },
  {
    name: "Wandoor Office",
    lines: ["Arimbra Building", "Nilambur Road", "Wandoor, Malappuram", "Kerala – 679328"],
    phone: "+91 88481 51514",
    tel: "tel:+918848151514",
    wa: "918848151514",
    map: "Arimbra Building, Nilambur Road, Wandoor, Malappuram, Kerala 679328",
  },
];

/* ───────────────────────── Inline icons ───────────────────────── */

type SvgProps = { size?: number; className?: string };

function Svg({ size = 20, className, children }: SvgProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

const MailIcon = (p: SvgProps) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Svg>
);

const GlobeIcon = (p: SvgProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </Svg>
);

const PinIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);

const ExternalIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </Svg>
);

const NavigateIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="m3 11 19-9-9 19-2-8z" />
  </Svg>
);

/* ───────────────────────── Small pieces ───────────────────────── */

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

function Pill({ children, dot = false }: { children: ReactNode; dot?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe0f7] bg-[#f3f7fe] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#1456c1]">
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-[#1456c1]" />}
      {children}
    </span>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-[#f7f8fa] p-3.5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1456c1] text-white">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-slate-500">
          {label}
        </p>
        <div className="mt-0.5 break-words text-[15px] font-bold text-[#0f1f45] sm:text-[16px]">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function ContactPage() {
  return (
    <main className="font-sans text-[#0f1f45]">
      {/* 1 ── Contact Bhoumi Consultancy ───────────────── */}
      <section className="bg-[#f8faff]">
        <Container className="py-12 lg:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[#1456c1]">
            <Icon name="phone" size={15} />
            Contact Bhoumi Consultancy
          </span>

          <h1
            className={`${HEADING} mt-6 text-[24px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[30px] lg:text-[28px] xl:text-[36px]`}
          >
            <span className="block sm:whitespace-nowrap">Let’s Find the Right Health</span>
            <span className="block">Insurance Option for You</span>
          </h1>

          <p className="mt-5 max-w-[760px] text-[14px] leading-[1.6] text-slate-600 sm:text-[15px] xl:text-[16px]">
            Bhoumi Consultancy helps individuals and families explore health
            insurance plans offered by Star Health and HDFC ERGO.
          </p>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
            {/* Left column */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,31,69,0.06)] sm:p-8">
                <h2 className={`${HEADING} text-xl font-bold sm:text-2xl`}>Get in Touch</h2>
                <div className="mt-4 space-y-3 border-t border-slate-200 pt-5">
                  <InfoRow icon={<Icon name="phone" size={20} />} label="Phone Numbers">
                    <div className="flex flex-wrap items-center gap-x-2">
                      {PHONES.map((p, i) => (
                        <span key={p.href} className="inline-flex items-center gap-2">
                          <a href={p.href} className="transition hover:text-[#1456c1]">
                            {p.label}
                          </a>
                          {i < PHONES.length - 1 && (
                            <span className="text-slate-400">,</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </InfoRow>

                  <InfoRow icon={<MailIcon size={20} />} label="Email">
                    <a href={`mailto:${EMAIL}`} className="transition hover:text-[#1456c1]">
                      {EMAIL}
                    </a>
                  </InfoRow>

                  <InfoRow icon={<GlobeIcon size={20} />} label="Website">
                    <a
                      href={`https://${WEBSITE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-[#1456c1]"
                    >
                      {WEBSITE}
                    </a>
                  </InfoRow>
                </div>
              </div>

              <div className="rounded-3xl bg-[#112448] p-6 sm:p-8">
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Suggested Calls to Action
                </h2>
                <div className="mt-5 space-y-3">
                  <a
                    href="tel:+919995067188"
                    className="flex items-center justify-center gap-2.5 rounded-xl bg-[#1456c1] px-4 py-3.5 text-center text-[14px] font-bold text-white transition hover:bg-[#1a63d8] sm:text-[15px]"
                  >
                    <Icon name="phone" size={18} />
                    Call Us for Health Insurance Guidance
                  </a>
                  {CTAS.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-center text-[14px] font-bold text-white transition hover:bg-white/20 sm:text-[15px]"
                    >
                      <Icon name="chat" size={18} className="shrink-0 text-[#25d366]" />
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: enquiry form */}
            <EnquiryForm />
          </div>
        </Container>
      </section>

      {/* 2 ── Our Locations ────────────────────────────── */}
      <section className="border-t border-slate-200 bg-[#f7f8fa]">
        <Container className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Pill dot>Our Locations</Pill>
            <h2
              className={`${HEADING} mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-[34px]`}
            >
              Bhoumi Consultancy Offices
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-[980px] gap-6 md:grid-cols-2">
            {OFFICES.map((o) => (
              <article
                key={o.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,31,69,0.06)] sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4fd] text-[#1456c1]">
                    <PinIcon size={22} />
                  </span>
                  <span className="rounded-full border border-[#cfe0f7] bg-[#f3f7fe] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#2f6fd0]">
                    Advisory Desk
                  </span>
                </div>

                <h3 className={`${HEADING} mt-5 text-xl font-bold sm:text-2xl`}>{o.name}</h3>

                <address className="mt-4 space-y-1.5 text-[14px] not-italic leading-snug text-slate-600 sm:text-[15px]">
                  {o.lines.map((line, i) => (
                    <p key={line} className={i === 0 ? "font-bold text-[#0f1f45]" : ""}>
                      {line}
                    </p>
                  ))}
                </address>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <p className="text-[13px] text-slate-500">Direct Phone</p>
                  <a
                    href={o.tel}
                    className="mt-1 inline-flex items-center gap-2 text-[17px] font-bold text-[#1456c1] transition hover:text-[#0f47a3] sm:text-[19px]"
                  >
                    <Icon name="phone" size={18} />
                    {o.phone}
                  </a>
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.map)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-[#f7f8fa] px-4 py-3 text-[14px] font-bold text-[#0f1f45] transition hover:border-[#1456c1]/40 hover:bg-[#eef4fd]"
                  >
                    <NavigateIcon size={16} className="text-[#1456c1]" />
                    View on Map
                    <ExternalIcon size={14} className="text-slate-500" />
                  </a>
                  <a
                    href={waLink(`Hello, I would like to know more about health insurance (${o.name}).`, o.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#1456c1] px-4 py-3 text-[14px] font-bold text-white shadow-[0_6px_16px_rgba(20,86,193,0.25)] transition hover:bg-[#0f47a3]"
                  >
                    Chat with Office
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
