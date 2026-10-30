import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Us | Bhoumi Consultancy",
  description:
    "Meet Sanju P B, an insurance professional with more than 15 years of experience in healthcare and health insurance, guiding customers on Star Health and HDFC ERGO plans.",
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

/* ───────────────────────── Data ───────────────────────── */

const EXPERIENCE = [
  "Health insurance plan guidance",
  "Hospital insurance operations and coordination",
  "Claim documentation and process awareness",
  "Insurance desk processes and service improvement",
  "Customer communication and policy-related support",
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
    <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe0f7] bg-[#f3f7fe] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#1456c1]">
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-[#1456c1]" />}
      {children}
    </span>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function AboutUsPage() {
  return (
    <main className="font-sans text-[#0f1f45]">
      {/* 1 ── Leadership — Sanju P B ───────────────────── */}
      <section className="bg-[#f8faff]">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.44fr_1fr] lg:gap-14 lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[#1456c1]">
              <Icon name="shield-check" size={16} />
              Leadership — Sanju P B
            </span>

            <h1
              className={`${HEADING} mt-6 text-[24px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[30px] lg:text-[28px] xl:text-[36px]`}
            >
              <span className="block sm:whitespace-nowrap">
                Health Insurance Experience
              </span>
              <span className="block">You Can Rely On</span>
            </h1>

            <div className="mt-6 max-w-[760px] space-y-5 text-[14px] leading-[1.6] text-slate-600 sm:text-[15px] xl:text-[16px]">
              <p>
                Sanju P B is an insurance professional with more than 15 years
                of experience across the healthcare and health insurance
                sectors. His experience includes hospital insurance operations,
                claims processes, insurance coordination, and customer support.
              </p>
              <p>
                He has previously served in insurance leadership roles at
                hospitals including Aster Medcity and Meitra Hospital, gaining
                practical experience in hospital insurance systems, claim
                documentation, and coordination between healthcare providers
                and insurers.
              </p>
            </div>

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
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-[#f7f8fa] px-5 py-2.5 text-[13px] font-bold text-[#0f1f45] transition hover:border-[#1456c1]/40 hover:bg-[#eef4fd]"
              >
                <Icon name="phone" size={16} className="text-[#1456c1]" />
                Call +91 99950 67188
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-slate-200 shadow-[0_16px_40px_rgba(15,31,69,0.15)]">
            {/* Replace with your leadership image for this page */}
            <Image
              src="/images/sanju.png"
              alt="Sanju P B consulting with a customer"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* 2 ── Specialization ───────────────────────────── */}
      <section className="border-t border-slate-200 bg-white">
        <Container className="pb-10 pt-16 lg:pb-12 lg:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <Pill dot>Specialization</Pill>
            <h2
              className={`${HEADING} mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-[34px]`}
            >
              Areas of Experience
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1100px] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCE.map((text) => (
              <div
                key={text}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#f7f8fa] px-5 py-6 sm:px-7"
              >
                <Icon
                  name="check-circle"
                  size={24}
                  className="mt-0.5 shrink-0 text-[#1456c1]"
                />
                <p className="text-[15px] font-semibold leading-snug text-[#0f1f45]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3 ── Focus statement ──────────────────────────── */}
      <section className="bg-white">
        <Container className="pb-16 pt-6 lg:pb-20">
          <div className="mx-auto max-w-[820px] rounded-3xl border border-[#d6e4f8] bg-[#f1f6fd] px-6 py-9 text-center sm:px-12 sm:py-12">
            <p className="text-[15px] font-medium leading-relaxed text-[#0f1f45] sm:text-[17px]">
              At Bhoumi Consultancy, the focus is on helping customers
              understand health insurance options offered by Star Health and
              HDFC ERGO and navigate the application and policy-servicing
              process with greater clarity.
            </p>
          </div>
        </Container>
      </section>

      {/* 4 ── Healthcare Background ────────────────────── */}
      <section className="border-t border-slate-200 bg-[#f7f8fa]">
        <Container className="py-16 text-center lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#2f6fd0]">
            <Icon name="building" size={14} />
            Healthcare Background
          </span>

          <h2
            className={`${HEADING} mx-auto mt-5 max-w-4xl text-2xl font-extrabold leading-tight sm:text-3xl lg:text-[34px]`}
          >
            Hospital Insurance Leadership Experience
          </h2>

          <p className="mx-auto mt-6 max-w-[880px] text-[14px] leading-relaxed text-slate-600 sm:text-[16px]">
            Prior insurance leadership roles at hospitals including{" "}
            <strong className="font-bold">Aster Medcity</strong> and{" "}
            <strong className="font-bold">Meitra Hospital</strong>, gaining
            practical experience in hospital insurance systems, claim
            documentation, and coordination between healthcare providers and
            insurers.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={GENERAL_WA}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryBtn}
            >
              <Icon name="chat" size={18} />
              CALL / Whatsapp: 9995067188
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-[14px] font-bold text-[#0f1f45] transition hover:border-[#1456c1]/40 hover:bg-[#eef4fd]"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
