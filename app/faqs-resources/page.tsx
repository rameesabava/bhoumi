import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import { FaqAccordion, ResourceCards } from "./FaqsInteractive";

export const metadata: Metadata = {
  title: "FAQs & Resources | Bhoumi Consultancy",
  description:
    "Answers to common questions about health insurance plans from Star Health and HDFC ERGO: waiting periods, exclusions, sub-limits, documents, renewals and claim procedures.",
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
  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#1456c1] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_6px_16px_rgba(20,86,193,0.25)] transition hover:bg-[#0f47a3]";

/* ───────────────────────── Inline icons ───────────────────────── */

type SvgProps = { size?: number; className?: string };

function Svg({
  size = 20,
  className,
  children,
}: SvgProps & { children: ReactNode }) {
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

const FileQuestionIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M10 10.3c.2-.8.9-1.3 1.8-1.3 1 0 1.8.6 1.8 1.5 0 1.2-1.6 1.3-1.6 2.5" />
    <path d="M12 17h.01" />
  </Svg>
);

const ShieldAlertIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
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

function SectionHead({
  pill,
  title,
  subtitle,
}: {
  pill: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Pill dot>{pill}</Pill>
      <h2
        className={`${HEADING} mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-[34px]`}
      >
        {title}
      </h2>
      <p className="mt-3 text-[14px] leading-relaxed text-slate-600 sm:text-[16px]">
        {subtitle}
      </p>
    </div>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function FaqsResourcesPage() {
  return (
    <main className="font-sans text-[#0f1f45]">
      {/* 1 ── FAQs & Resources (hero) ──────────────────── */}
      <section className="bg-[#f8faff]">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.44fr_1fr] lg:gap-14 lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[#1456c1]">
              <FileQuestionIcon size={16} />
              FAQs &amp; Resources
            </span>

            <h1
              className={`${HEADING} mt-6 text-[24px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[30px] lg:text-[28px] xl:text-[36px]`}
            >
              Understanding Health Insurance Benefits, Waiting Periods, and
              Exclusions
            </h1>

            <p className="mt-6 max-w-[760px] text-[14px] leading-[1.6] text-slate-600 sm:text-[15px] xl:text-[16px]">
              Bhoumi Consultancy helps individuals and families explore health
              insurance plans offered by Star Health and HDFC ERGO. We provide
              guidance to help customers understand available coverage, policy
              features, eligibility, waiting periods, exclusions, and the
              application process.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#faqs" className={primaryBtn}>
                Frequently Asked Questions
              </a>
              <a
                href={GENERAL_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-[#f7f8fa] px-5 py-2.5 text-[13px] font-bold text-[#0f1f45] transition hover:border-[#1456c1]/40 hover:bg-[#eef4fd]"
              >
                <Icon name="chat" size={16} className="text-[#1456c1]" />
                CALL / Whatsapp: 9995067188
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-slate-200 shadow-[0_16px_40px_rgba(15,31,69,0.15)]">
            <Image
              src="/images/insurance-guide.avif"
              alt="Health insurance shield with policy documents"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* 2 ── Helpful Answers (FAQ accordion) ──────────── */}
      <section id="faqs" className="scroll-mt-20 border-t border-slate-200 bg-white">
        <Container className="py-16 lg:py-20">
          <SectionHead
            pill="Helpful Answers"
            title="Frequently Asked Questions"
            subtitle="Clear guidance on health insurance plans, policy terms, and advisory procedures."
          />

          <FaqAccordion />
        </Container>
      </section>

      {/* 3 ── Suggested Resources ──────────────────────── */}
      <section className="border-t border-slate-200 bg-[#f7f8fa]">
        <Container className="py-16 lg:py-20">
          <SectionHead
            pill="Suggested Resources"
            title="Health Insurance Application and Policy Support"
            subtitle="Guidance on policy features, required documentation, and claim procedures."
          />

          <ResourceCards />
        </Container>
      </section>

      {/* 4 ── Suggested Disclaimer ─────────────────────── */}
      <section className="border-t border-slate-200 bg-white">
        <Container className="py-14 lg:py-16">
          <div className="mx-auto max-w-[860px] rounded-3xl border border-[#d6e4f8] bg-[#f1f6fd] px-6 py-7 sm:px-9 sm:py-8">
            <div className="flex items-center gap-3 text-[#1456c1]">
              <ShieldAlertIcon size={22} />
              <h2 className="text-[14px] font-bold uppercase tracking-[0.06em] sm:text-[15px]">
                Suggested Disclaimer
              </h2>
            </div>
            <p className="mt-3 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
              Bhoumi Consultancy provides assistance and guidance relating to
              health insurance products offered by Star Health and HDFC ERGO
              from Health Insurance Expert Mr.Sanju Palakkaparamaban. Product
              features, eligibility, premiums, underwriting, policy issuance,
              and claim decisions are subject to the respective insurer’s
              terms, conditions, and policy wording. Customers should review
              official policy documents before purchasing.
            </p>
          </div>
        </Container>
      </section>

      {/* 5 ── Closing call-to-action ───────────────────── */}
      <section className="bg-[#112448]">
        <Container className="py-14 text-center lg:py-16">
          <h2 className="mx-auto max-w-4xl font-[family-name:var(--font-heading)] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-[34px]">
            Have Questions About Health Insurance?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-[#d3dae8] sm:text-[16px]">
            Bhoumi Consultancy helps individuals and families explore health
            insurance plans offered by Star Health and HDFC ERGO.
          </p>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
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
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-white/15"
            >
              <Icon name="phone" size={16} />
              Call +91 99950 67188
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
