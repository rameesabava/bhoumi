import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Icon, { type IconName } from "@/components/Icon";

/* ───────────────────────── Config ───────────────────────── */

const WHATSAPP_NUMBER = "919995067188";
const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const GENERAL_WA = waLink(
  "Hello, I would like to know more about health insurance plans."
);

const HEADING = "font-[family-name:var(--font-heading)] tracking-tight text-[#0f1f45]";

/* ───────────────────────── Data ───────────────────────── */

const SERVICES: { title: string; icon: IconName }[] = [
  { title: "Individual health insurance plans", icon: "user" },
  { title: "Family floater health insurance plans", icon: "users" },
  { title: "Health insurance options for senior citizens", icon: "heart-pulse" },
  {
    title: "Plans with specified or enhanced coverage features, where available",
    icon: "shield-check",
  },
  { title: "Top-up or super top-up options, where available", icon: "arrow-up-circle" },
  {
    title: "Other eligible health insurance products offered by Star Health or HDFC ERGO",
    icon: "file-check",
  },
  { title: "Travel Insurance", icon: "plane" },
  { title: "Corporate & Group Health Insurance", icon: "building" },
];

const WHY_CHOOSE = [
  "Focused guidance on health insurance plans from Star Health and HDFC ERGO",
  "Support in understanding benefits, limits, waiting periods, and exclusions",
  "Assistance with proposal forms and policy application requirements",
  "Help understanding policy documents and renewal requirements",
  "Guidance on claim-related procedures and documentation",
  "A transparent, customer-focused approach",
];

const STEPS = [
  "Understand your health insurance needs and priorities",
  "Explain available plan features, benefits, limits, waiting periods, and exclusions",
  "Guide you through proposal forms and required information",
  "Explain premium and policy terms as stated by the insurer",
  "Help you understand policy documents, renewals, and servicing procedures",
  "Provide general guidance on claim procedures and required documentation",
];

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
    <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe0f7] bg-[#f3f7fe] px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#1456c1]">
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-[#1456c1]" />}
      {children}
    </span>
  );
}

function SectionHead({
  pill,
  title,
  wide = false,
  children,
}: {
  pill: string;
  title: string;
  wide?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`mx-auto text-center ${wide ? "max-w-6xl" : "max-w-3xl"}`}>
      <Pill dot>{pill}</Pill>
      <h2
        className={`${HEADING} mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[40px] ${
          wide ? "lg:whitespace-nowrap" : ""
        }`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#1456c1] px-5 py-2.5 text-[14px] font-bold text-white shadow-[0_6px_16px_rgba(20,86,193,0.25)] transition hover:bg-[#0f47a3]";

/* ───────────────────────── Page ───────────────────────── */

export default function HomePage() {
  return (
    <main className="font-sans text-[#0f1f45]">
      {/* 1 ── Hero ─────────────────────────────────────── */}
      <section className="bg-[#f8faff]">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.6fr_1fr] lg:gap-12 lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.06em] text-[#1456c1]">
              <Icon name="shield-check" size={16} />
              Health Insurance Advisory • Star Health • HDFC ERGO
            </span>

            <h1
              className={`${HEADING} mt-6 text-[28px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[38px] lg:text-[34px] xl:text-[46px]`}
            >
              <span className="block sm:whitespace-nowrap">
                Health Insurance That Protects
              </span>
              <span className="block">What Matters Most</span>
            </h1>

            <p className="mt-6 max-w-[760px] text-base leading-relaxed text-slate-600 xl:text-[17px]">
              Bhoumi Consultancy helps individuals and families explore health
              insurance plans offered by Star Health and HDFC ERGO. We provide
              guidance to help customers understand available coverage, policy
              features, eligibility, waiting periods, exclusions, and the
              application process.
            </p>

            <p className="mt-8 max-w-[780px] rounded-r-xl border-l-4 border-[#1456c1] bg-[#f1f5fc] px-5 py-4 text-[15px] font-semibold leading-relaxed text-[#0f1f45]">
              Our focus is simple: help you make an informed health insurance
              decision for yourself and your family.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={GENERAL_WA}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtn}
              >
                <Icon name="chat" size={17} />
                CALL / Whatsapp: 9995067188
              </a>
              <Link
                href="/health-insurance-plans"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-[14px] font-bold text-[#0f1f45] transition hover:border-[#1456c1]/40 hover:bg-[#f3f7fe]"
              >
                Explore Health Insurance Plans
                <Icon name="arrow-right" size={16} className="text-[#1456c1]" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[584/400] w-full overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(15,31,69,0.15)]">
            {/* Save your image at /public/images/hero-family.jpg */}
            <Image
              src="/images/hero-family.avif"
              alt="Indian family relaxing together at home"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* 2 ── Advisory strip with insurer logos ────────── */}
<section className="border-y border-slate-200 bg-white">
  <Container className="flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center md:py-10">
    <div>
      <h2 className={`${HEADING} text-lg font-bold sm:text-xl`}>
        Health Insurance Advisory for Individuals and Families
      </h2>
      <p className="mt-1 text-[14px] text-slate-500 sm:text-[15px]">
        Guidance on plans from Star Health and HDFC ERGO
      </p>
    </div>

    <div className="grid w-full grid-cols-2 gap-3 sm:gap-5 md:flex md:w-auto md:shrink-0 md:items-center">
      <div className="flex h-14 items-center justify-center rounded-xl bg-[#1c64c2] px-3 sm:h-[66px] sm:px-4 md:w-[240px]">
        {/* /public/images/star-health-logo.png */}
        <Image
          src="/images/star-health.avif"
          alt="Star Health Insurance"
          width={180}
          height={48}
          className="h-9 w-auto max-w-full object-contain sm:h-12"
        />
      </div>
      <div className="flex h-14 items-center justify-center rounded-xl bg-[#ed1c24] px-3 sm:h-[66px] sm:px-4 md:w-[192px]">
        {/* /public/images/hdfc-ergo-logo.png */}
        <Image
          src="/images/hdfc-ergo.avif"
          alt="HDFC ERGO General Insurance"
          width={140}
          height={48}
          className="h-9 w-auto max-w-full object-contain sm:h-12"
        />
      </div>
    </div>
  </Container>
</section>

      {/* 3 ── Who we are ───────────────────────────────── */}
      <section className="bg-[#f7f8fa]">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-14 lg:py-20">
          <div className="relative aspect-[578/433] w-full overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(15,31,69,0.12)]">
            {/* /public/images/who-we-are.jpg */}
            <Image
              src="/images/consultation.avif"
              alt="Advisor discussing health insurance plans with customers"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <Pill>Who We Are</Pill>
            <h2
              className={`${HEADING} mt-5 text-3xl font-extrabold leading-tight sm:text-4xl`}
            >
              Health Insurance Guidance, Made Clear
            </h2>
            <p className="mt-5 max-w-[640px] text-lg leading-relaxed text-slate-600">
              Bhoumi Consultancy is a health insurance advisory service focused
              exclusively on health insurance plans from Star Health and HDFC
              ERGO. We aim to make the process of understanding, selecting, and
              applying for health insurance clearer and more convenient.
            </p>
            <Link
              href="/about-us"
              className={`${primaryBtn} mt-7`}
            >
              About Us
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
        </Container>
      </section>

      {/* 4 ── Our core service ─────────────────────────── */}
      <section className="bg-white">
        <Container className="py-16 lg:py-20">
          <SectionHead pill="Our Core Service" title="Health Insurance Advisory">
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Individual and family health insurance options, senior citizen
              plans, and other eligible health insurance products available from
              Star Health and HDFC ERGO, subject to insurer terms and
              eligibility.
            </p>
          </SectionHead>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-[#1456c1]/60 sm:p-7"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#d6e4f8] bg-[#eef4fd] text-[#1456c1]">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <span className="flex-1 rounded-full border border-slate-200 bg-[#f1f4f9] px-4 py-2 text-[12px] font-bold uppercase leading-snug tracking-[0.06em] text-slate-500">
                    Star Health • HDFC ERGO
                  </span>
                </div>

                <h3 className="mt-6 flex-1 text-[19px] font-semibold leading-snug tracking-tight text-[#0f1f45]">
                  {s.title}
                </h3>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <a
                    href={waLink(
                      `Hello, I would like to know more about: ${s.title}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 rounded-lg border border-slate-200 bg-[#f7f9fc] px-3.5 py-2.5 text-[14px] font-semibold leading-snug text-[#0f1f45] transition-colors duration-200 hover:border-[#1456c1] hover:bg-[#1456c1] hover:text-white"
                  >
                    <Icon name="chat" size={16} className="shrink-0 text-[#1456c1] transition-colors duration-200 group-hover:text-white" />
                    <span className="flex-1">Ask About This Option</span>
                    <Icon name="arrow-right" size={14} className="shrink-0 text-slate-500 transition-colors duration-200 group-hover:text-white" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 5 ── Advisory guidance (why choose) ───────────── */}
      <section className="bg-[#f7f8fa]">
        <Container className="py-16 lg:py-20">
          <SectionHead pill="Advisory Guidance" title="Why Choose Bhoumi Consultancy" />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((text) => (
              <div
                key={text}
                className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-[0_2px_10px_rgba(15,31,69,0.04)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef4fd] text-[#1456c1]">
                  <Icon name="check-circle" size={20} />
                </span>
                <p className="text-[14px] font-medium leading-relaxed text-[#0f1f45]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6 ── Process support (how we help) ────────────── */}
      <section className="bg-white">
        <Container className="py-16 lg:py-20">
          <SectionHead pill="Process Support" title="How We Help" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((text, i) => {
              const n = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={n}
                  className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1456c1] text-[13px] font-bold text-white">
                      {n}
                    </span>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#2f6fd0]">
                      Step {n}
                    </span>
                  </div>
                  <p className="mt-4 text-[14px] font-semibold leading-relaxed text-[#0f1f45]">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 7 ── Leadership + areas of experience ─────────── */}
      <section className="bg-[#f7f8fa]">
        <Container className="py-16 lg:py-20">
          <SectionHead
            pill="Leadership — Sanju P B"
            title="Health Insurance Experience You Can Rely On"
            wide
          />

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,31,69,0.06)] sm:p-10 lg:px-16 lg:py-12">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:gap-[72px]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                {/* /public/images/sanju-pb.jpg */}
                <Image
                  src="/images/sanju.png"
                  alt="Sanju P B consulting with a customer"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f45]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#a9c7f5]">
                    Nilambur • Wandoor
                  </p>
                  <p className="mt-0.5 font-semibold text-white">Kerala, India</p>
                </div>
              </div>

              <div>
                <span className="inline-flex rounded-full border border-[#cfe0f7] bg-[#f3f7fe] px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#1456c1]">
                  Leadership • More than 15 years of experience
                </span>
                <h3
                  className={`${HEADING} mt-4 text-3xl font-extrabold`}
                >
                  Sanju P B
                </h3>

                <div className="mt-4 space-y-4 text-base leading-[1.55] text-slate-600">
                  <p>
                    Sanju P B is an insurance professional with more than 15
                    years of experience across the healthcare and health
                    insurance sectors. His experience includes hospital
                    insurance operations, claims processes, insurance
                    coordination, and customer support.
                  </p>
                  <p>
                    He has previously served in insurance leadership roles at
                    hospitals including Aster Medcity and Meitra Hospital,
                    gaining practical experience in hospital insurance systems,
                    claim documentation, and coordination between healthcare
                    providers and insurers.
                  </p>
                  <p>
                    At Bhoumi Consultancy, the focus is on helping customers
                    understand health insurance options offered by Star Health
                    and HDFC ERGO and navigate the application and
                    policy-servicing process with greater clarity.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={waLink(
                      "Hello, I would like to consult with an advisor about health insurance."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${primaryBtn}`}
                  >
                    Consult with Advisor
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-[#f7f8fa] px-5 py-2.5 text-[14px] font-bold text-[#0f1f45] transition hover:bg-[#eef4fd]"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Areas of experience */}
            <div className="mt-10 border-t border-slate-200 pt-8">
              <h4 className={`${HEADING} text-xl font-bold`}>Areas of Experience</h4>
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {EXPERIENCE.map((text) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#f7f9fc] p-5"
                  >
                    <Icon name="check-circle" size={20} className="mt-0.5 shrink-0 text-[#1456c1]" />
                    <p className="font-semibold leading-snug text-[#0f1f45]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8 ── Closing call-to-action ───────────────────── */}
      <section className="bg-[#112448]">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="mx-auto max-w-4xl font-[family-name:var(--font-heading)] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[44px]">
            Health Insurance Advisory • Star Health • HDFC ERGO
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#d3dae8]">
            Bhoumi Consultancy helps individuals and families explore health
            insurance plans offered by Star Health and HDFC ERGO.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-2.5 text-[14px] font-bold text-white transition hover:bg-white/15"
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
