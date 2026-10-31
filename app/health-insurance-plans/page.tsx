import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Health Insurance Plans | Bhoumi Consultancy",
  description:
    "Explore health insurance plans from Star Health and HDFC ERGO. Bhoumi Consultancy helps individuals and families understand coverage, waiting periods, exclusions and the application process.",
};

/* ───────────────────────── Config ───────────────────────── */

const WHATSAPP_NUMBER = "919995067188";
const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const GENERAL_WA = waLink(
  "Hello, I would like to know more about health insurance plans."
);

const HEADING = "font-[family-name:var(--font-heading)] tracking-tight text-[#0f1f45]";

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#1456c1] px-5 py-3 text-[14px] font-bold text-white shadow-[0_6px_16px_rgba(20,86,193,0.25)] transition hover:bg-[#0f47a3]";

/* ───────────────────────── Data ───────────────────────── */

const OPTIONS: { title: string; icon: IconName; image: string }[] = [
  { title: "Individual health insurance plans", icon: "user", image: "/images/1.png" },
  { title: "Family floater health insurance plans", icon: "users", image: "/images/2.png" },
  { title: "Health insurance options for senior citizens", icon: "heart-pulse", image: "/images/3.png" },
  {
    title: "Plans with specified or enhanced coverage features, where available",
    icon: "shield-check",
    image: "/images/4.png",
  },
  { title: "Top-up or super top-up options, where available", icon: "arrow-up-circle", image: "/images/5.png" },
  {
    title: "Other eligible health insurance products offered by Star Health or HDFC ERGO",
    icon: "file-check",
    image: "/images/6.png",
  },
  { title: "Travel Insurance", icon: "plane", image: "/images/7.png" },
  { title: "Corporate & Group Health Insurance", icon: "building", image: "/images/8.png" },
];

const STEPS = [
  "Understand your health insurance needs and priorities",
  "Explain available plan features, benefits, limits, waiting periods, and exclusions",
  "Guide you through proposal forms and required information",
  "Explain premium and policy terms as stated by the insurer",
  "Help you understand policy documents, renewals, and servicing procedures",
  "Provide general guidance on claim procedures and required documentation",
];

const FRAMEWORK = [
  "Individual or family coverage requirements",
  "Coverage benefits and sub-limits",
  "Waiting periods, exclusions, and co-payment conditions, where applicable",
  "Premium and affordability",
  "Eligibility and underwriting requirements",
  "Customer priorities and the policy terms issued by the insurer",
];

const PROVIDERS = [
  {
    name: "Star Health and Allied Insurance Company Limited",
    short: "Star Health",
    logo: "/images/star-health.avif",
    logoAlt: "Star Health Insurance",
    logoBg: "bg-[#1c64c2]",
    website: "https://www.starhealth.in",
    message: "Hello, I would like to know more about Star Health plans.",
  },
  {
    name: "HDFC ERGO General Insurance Company Limited",
    short: "HDFC ERGO",
    logo: "/images/hdfc-ergo.avif",
    logoAlt: "HDFC ERGO General Insurance",
    logoBg: "bg-[#ed1c24]",
    website: "https://www.hdfcergo.com",
    message: "Hello, I would like to know more about HDFC ERGO plans.",
  },
];

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
    <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe0f7] bg-[#f3f7fe] px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#1456c1]">
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-[#1456c1]" />}
      {children}
    </span>
  );
}

function SectionHead({
  pill,
  title,
  children,
}: {
  pill: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Pill dot>{pill}</Pill>
      <h2
        className={`${HEADING} mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[44px]`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function ExternalIcon({ size = 16 }: { size?: number }) {
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
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

function AlertIcon({ size = 22 }: { size?: number }) {
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
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function HealthInsurancePlansPage() {
  return (
    <main className="font-sans text-[#0f1f45]">
      {/* 1 ── Health Insurance Solutions (hero) ─────────── */}
      <section className="bg-[#f8faff]">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.6fr_1fr] lg:gap-12 lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.06em] text-[#1456c1]">
              <Icon name="shield-check" size={16} />
              Health Insurance Solutions
            </span>

            <h1
              className={`${HEADING} mt-6 text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[34px] lg:text-[32px] xl:text-[40px]`}
            >
              <span className="block sm:whitespace-nowrap">
                Health Insurance Guidance for
              </span>
              <span className="block">Individuals and Families</span>
            </h1>

            <p className="mt-6 max-w-[760px] text-base leading-relaxed text-slate-600 sm:text-lg xl:text-xl">
              Choosing a health insurance policy involves more than comparing
              premiums. It is important to understand what is covered,
              applicable limits, waiting periods, exclusions, and the
              conditions that apply when making a claim.
            </p>

            <p className="mt-6 max-w-[760px] text-[15px] leading-relaxed text-slate-600 sm:text-base">
              Bhoumi Consultancy helps customers explore suitable health
              insurance options offered by Star Health and HDFC ERGO, based on
              their stated needs and the terms of the available plans.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={GENERAL_WA}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtn}
              >
                <Icon name="chat" size={17} />
                CALL / Whatsapp: 9995067188
              </a>
              <a
                href="tel:+919995067188"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-[#f7f8fa] px-5 py-3 text-[14px] font-bold text-[#0f1f45] transition hover:border-[#1456c1]/40 hover:bg-[#eef4fd]"
              >
                <Icon name="phone" size={16} className="text-[#1456c1]" />
                Call +91 99950 67188
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-[0_16px_40px_rgba(15,31,69,0.15)]">
            {/* Replace with your hero image for this page */}
            <Image
              src="/images/Guidance.png"
              alt="Advisor discussing health insurance plans with customers"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* 2 ── Coverage Options ─────────────────────────── */}
      <section className="border-t border-slate-200 bg-white">
        <Container className="py-16 lg:py-20">
          <SectionHead pill="Coverage Options" title="Health Insurance Options" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OPTIONS.map((o) => (
              <article
                key={o.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_10px_rgba(15,31,69,0.04)] sm:p-6"
              >
                <span className="self-start whitespace-nowrap rounded-full border border-slate-200 bg-[#f1f4f9] px-4 py-2 text-[12px] font-bold uppercase leading-snug tracking-[0.06em] text-slate-500">
                  Star Health • HDFC ERGO
                </span>

                <h3 className="mt-5 text-[19px] font-semibold leading-snug tracking-tight text-[#0f1f45]">
                  {o.title}
                </h3>

                {/* Image grows to fill the leftover space, so no blank gap */}
                <div className="relative mt-5 aspect-[4/3] w-full grow overflow-hidden rounded-xl border border-[#d6e4f8] bg-[#eef4fd]">
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain object-center"
                  />
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <a
                    href={waLink(
                      `Hello, I would like to know more about: ${o.title}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-[#f7f9fc] px-3.5 py-3 text-[15px] font-semibold leading-snug text-[#0f1f45] transition-colors duration-200 hover:border-[#1456c1] hover:bg-[#1456c1] hover:text-white"
                  >
                    <Icon
                      name="chat"
                      size={16}
                      className="shrink-0 text-[#1456c1] transition-colors duration-200 group-hover:text-white"
                    />
                    <span className="flex-1">Ask About This Option</span>
                    <Icon
                      name="arrow-right"
                      size={14}
                      className="shrink-0 text-slate-500 transition-colors duration-200 group-hover:text-white"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 3 ── Our Support ──────────────────────────────── */}
      <section className="border-t border-slate-200 bg-[#f7f8fa]">
        <Container className="py-16 lg:py-20">
          <SectionHead pill="Our Support" title="How We Help" />

          <div className="mx-auto mt-12 grid max-w-[1100px] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((text, i) => {
              const n = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={n}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_2px_10px_rgba(15,31,69,0.04)] sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eef4fd] text-[15px] font-bold text-[#1456c1]">
                    {n}
                  </span>
                  <p className="text-[16px] font-medium leading-relaxed text-[#0f1f45]">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4 ── Review Framework ─────────────────────────── */}
      <section className="border-t border-slate-200 bg-white">
        <Container className="py-16 lg:py-20">
          <SectionHead pill="Review Framework" title="Our Approach">
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We help customers review relevant plan information from Star
              Health and HDFC ERGO and consider factors such as:
            </p>
          </SectionHead>

          <div className="mx-auto mt-12 grid max-w-[1000px] gap-4 md:grid-cols-2">
            {FRAMEWORK.map((text) => (
              <div
                key={text}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#f7f8fa] px-5 py-5 sm:px-6"
              >
                <Icon
                  name="check-circle"
                  size={24}
                  className="mt-0.5 shrink-0 text-[#1456c1]"
                />
                <p className="text-[16px] font-semibold leading-snug text-[#0f1f45]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5 ── Official Insurers ────────────────────────── */}
      <section className="border-t border-slate-200 bg-[#f7f8fa]">
        <Container className="py-16 lg:py-20">
          <SectionHead pill="Official Insurers" title="Insurance Providers" />

          <div className="mx-auto mt-12 grid max-w-[1000px] gap-6 md:grid-cols-2">
            {PROVIDERS.map((p) => (
              <article
                key={p.short}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,31,69,0.06)] sm:p-8"
              >
                <div className="border-b border-slate-200 pb-5">
                  <div
                    className={`flex h-[72px] w-[216px] max-w-full items-center justify-center overflow-hidden rounded-xl px-3 ${p.logoBg}`}
                  >
                    <Image
                      src={p.logo}
                      alt={p.logoAlt}
                      width={180}
                      height={56}
                      className="h-14 w-auto max-w-full object-contain"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <Pill>Insurance Provider</Pill>
                </div>

                <h3
                  className={`${HEADING} mt-4 flex-1 text-2xl font-bold leading-snug sm:text-[26px]`}
                >
                  {p.name}
                </h3>

                <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
                  <a
                    href={waLink(p.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#1456c1] px-5 py-3.5 text-[15px] font-bold leading-snug text-white shadow-[0_6px_16px_rgba(20,86,193,0.25)] transition hover:bg-[#0f47a3]"
                  >
                    <Icon name="chat" size={16} className="shrink-0" />
                    <span>Ask About {p.short} Plans</span>
                  </a>
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-[#f7f8fa] px-5 py-3.5 text-[15px] font-semibold text-slate-600 transition hover:border-[#1456c1]/40 hover:bg-[#eef4fd] hover:text-[#1456c1]"
                  >
                    Official Website
                    <ExternalIcon size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-[1000px] items-start gap-4 rounded-2xl border border-[#f5e6b3] bg-[#fffaea] px-5 py-5 sm:px-6">
            <span className="mt-0.5 shrink-0 text-[#d4850a]">
              <AlertIcon size={24} />
            </span>
            <p className="text-[15px] leading-relaxed text-[#7a3b0c] sm:text-base">
              <strong className="font-bold">Important:</strong> Plan
              availability, benefits, premiums, underwriting decisions, and
              claim outcomes are determined by the respective insurer and the
              policy wording. Please review the latest policy documents before
              purchasing.
            </p>
          </div>
        </Container>
      </section>

      {/* 6 ── Closing call-to-action ───────────────────── */}
      <section className="bg-[#1456b0]">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="mx-auto max-w-5xl font-[family-name:var(--font-heading)] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-[36px]">
            <span className="block sm:whitespace-nowrap">
              Health Insurance Guidance for
            </span>
            <span className="block">Individuals and Families</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#dbe7fb] sm:text-lg">
            Bhoumi Consultancy helps customers explore suitable health
            insurance options offered by Star Health and HDFC ERGO.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={GENERAL_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-6 py-4 text-[16px] font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition hover:bg-[#1fb957]"
            >
              <Icon name="chat" size={18} />
              CALL / Whatsapp: 9995067188
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-4 text-[16px] font-bold text-white transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
