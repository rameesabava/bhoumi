"use client";

/*
  This page uses form state, so it is a client component (no `export const metadata`).
  For the page title, add app/contact/layout.tsx:

    import type { Metadata } from "next";
    export const metadata: Metadata = {
      title: "Contact | Bhoumi Consultancy",
      description: "Contact Bhoumi Consultancy for health insurance guidance on Star Health and HDFC ERGO plans.",
    };
    export default function Layout({ children }: { children: React.ReactNode }) {
      return children;
    }

  The form submits to /api/contact (app/api/contact/route.ts), which emails
  bhoumiconsultancy@gmail.com.
*/

import { useState, type FormEvent, type ReactNode } from "react";
import Icon from "@/components/Icon";

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

const INSURANCE_OPTIONS = [
  "Individual health insurance plans",
  "Family floater health insurance plans",
  "Health insurance options for senior citizens",
  "Plans with specified or enhanced coverage features, where available",
  "Top-up or super top-up options, where available",
  "Other eligible health insurance products offered by Star Health or HDFC ERGO",
  "Travel Insurance",
  "Corporate & Group Health Insurance",
];

const CONTACT_METHODS = ["WhatsApp", "Phone Call"];

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

const SendIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="M14.5 21.7a.5.5 0 0 0 .93-.04L22 2.5a.5.5 0 0 0-.65-.65L2.34 8.43a.5.5 0 0 0-.04.93l7.5 3.08a2 2 0 0 1 1.1 1.1z" />
    <path d="m21.85 2.15-10.94 10.94" />
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

const ChevronDownIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
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

const labelCls =
  "mb-2 block text-[12px] font-bold uppercase tracking-[0.06em] text-[#0f1f45]";
const inputCls =
  "w-full rounded-xl border border-slate-200 bg-[#f7f8fa] px-4 py-3 text-[14px] text-[#0f1f45] placeholder:text-slate-400 transition focus:border-[#1456c1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1456c1]/20 sm:text-[15px]";

/* ───────────────────────── Page ───────────────────────── */

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMsg(json?.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

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
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,31,69,0.06)] sm:p-10">
              <h2 className={`${HEADING} text-xl font-bold leading-snug sm:text-2xl`}>
                Let’s Find the Right Health Insurance Option for You
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                Bhoumi Consultancy helps individuals and families explore health
                insurance plans offered by Star Health and HDFC ERGO.
              </p>

              {status === "success" ? (
                <div
                  role="status"
                  className="mt-8 rounded-2xl border border-[#bfe7cd] bg-[#f0fbf4] p-6 text-center"
                >
                  <p className="text-lg font-bold text-[#14532d]">
                    Thank you. Your enquiry has been sent.
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#166534]">
                    Our team will contact you using your preferred method.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-5 rounded-lg border border-[#bfe7cd] bg-white px-5 py-2.5 text-[13px] font-bold text-[#14532d] transition hover:bg-[#e6f7ec]"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate={false}>
                  {/* Honeypot: real users never see or fill this */}
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Leave this field empty
                      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="fullName" className={labelCls}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      placeholder="Your Full Name"
                      className={inputCls}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelCls}>
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        inputMode="tel"
                        pattern="[0-9+\-\s()]{10,18}"
                        title="Enter a valid phone number (at least 10 digits)"
                        autoComplete="tel"
                        placeholder="e.g. 99950 67188"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>
                        Email{" "}
                        <span className="font-medium normal-case tracking-normal text-slate-500">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        maxLength={120}
                        autoComplete="email"
                        placeholder="e.g. name@example.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="insuranceOption" className={labelCls}>
                        Health Insurance Option
                      </label>
                      <div className="relative">
                        <select
                          id="insuranceOption"
                          name="insuranceOption"
                          defaultValue={INSURANCE_OPTIONS[0]}
                          className={`${inputCls} appearance-none truncate pr-10`}
                        >
                          {INSURANCE_OPTIONS.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                        <ChevronDownIcon
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0f1f45]"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contactMethod" className={labelCls}>
                        Preferred Contact Method
                      </label>
                      <div className="relative">
                        <select
                          id="contactMethod"
                          name="contactMethod"
                          defaultValue={CONTACT_METHODS[0]}
                          className={`${inputCls} appearance-none pr-10`}
                        >
                          {CONTACT_METHODS.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                        <ChevronDownIcon
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0f1f45]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>
                      Message{" "}
                      <span className="font-medium normal-case tracking-normal text-slate-500">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      maxLength={2000}
                      placeholder="Your requirements or questions regarding Star Health or HDFC ERGO..."
                      className={`${inputCls} resize-y`}
                    />
                  </div>

                  <label className="flex items-start gap-3 text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 accent-[#1456c1]"
                    />
                    <span>
                      I acknowledge that this information will be used by Bhoumi
                      Consultancy to respond to my health insurance advisory
                      enquiry.
                    </span>
                  </label>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700"
                    >
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#1456c1] px-5 py-3.5 text-[15px] font-bold text-white shadow-[0_6px_16px_rgba(20,86,193,0.25)] transition hover:bg-[#0f47a3] disabled:cursor-not-allowed disabled:opacity-70 sm:text-[16px]"
                  >
                    <SendIcon size={18} />
                    {status === "sending" ? "Sending..." : "Submit Health Insurance Enquiry"}
                  </button>
                </form>
              )}
            </div>
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
