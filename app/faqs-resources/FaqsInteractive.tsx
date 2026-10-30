"use client";

import { useState, type ReactNode } from "react";
import Icon from "@/components/Icon";

const HEADING = "font-[family-name:var(--font-heading)] tracking-tight text-[#0f1f45]";

/* ───────────────────────── Data ───────────────────────── */

const FAQS: { q: string; a: string }[] = [
  {
    q: "What does health insurance guidance from Bhoumi Consultancy cover?",
    a: "Bhoumi Consultancy provides guidance on available health insurance plans offered by Star Health and HDFC ERGO. We help customers understand available coverage, policy features, eligibility, waiting periods, exclusions, the application process, policy documents, renewals, and general claim procedures.",
  },
  {
    q: "What is the difference between individual and family floater health insurance?",
    a: "An individual health insurance plan provides dedicated coverage and a separate sum insured for a single person. A family floater plan covers family members under a single shared sum insured. Exact terms, eligibility, and conditions depend on the specific policy issued by the insurer.",
  },
  {
    q: "Are senior citizen plans available?",
    a: "Yes, health insurance options for senior citizens are available through Star Health and HDFC ERGO. Plan availability, entry age criteria, underwriting requirements, waiting periods, and co-payment conditions depend on the insurer's current products and policy terms.",
  },
  {
    q: "What are waiting periods?",
    a: "Waiting periods are specified timeframes defined in the policy wording during which coverage for certain conditions or treatments is not yet effective. This may include initial waiting periods, specific ailment waiting periods, and waiting periods for pre-existing diseases, as determined by the insurer.",
  },
  {
    q: "What are exclusions and sub-limits?",
    a: "Exclusions are medical conditions, treatments, or expenses that are not covered under the insurance policy. Sub-limits are defined monetary caps on specific coverage components, such as room rent or particular medical procedures. Customers must review the official policy document for exact exclusions and sub-limits.",
  },
  {
    q: "Which documents may be required when applying?",
    a: "Documentation requirements vary depending on the insurer, the chosen plan, the applicant's age, and medical declarations. Insurers may request identity proof, address proof, age proof, completed proposal forms, and medical reports where required by underwriting guidelines.",
  },
  {
    q: "Can Bhoumi Consultancy guarantee claim approval?",
    a: "No. Bhoumi Consultancy does not and cannot guarantee claim approval. Claim decisions, admissibility, and settlements are determined exclusively by the respective insurance company (Star Health or HDFC ERGO) based on the policy wording, terms, and applicable procedures.",
  },
  {
    q: "Can I get help with policy renewal?",
    a: "Yes. Bhoumi Consultancy provides help understanding policy documents and renewal requirements, subject to the insurer's current renewal process and policy terms.",
  },
  {
    q: "How do I enquire about Star Health or HDFC ERGO?",
    a: "You can contact Bhoumi Consultancy by calling +91 99950 67188 or +91 88481 51514, via WhatsApp at 9995067188, by emailing bhoumiconsultancy@gmail.com, or by visiting our Nilambur or Wandoor offices.",
  },
  {
    q: "Does Bhoumi Consultancy provide other insurance or investment services?",
    a: "No. Bhoumi Consultancy is focused exclusively on health insurance advisory relating to Star Health and HDFC ERGO. Investment advisory, mutual funds, stock market services, loans, life insurance, and other general insurance services have been removed and are not provided.",
  },
];

const RESOURCES: {
  title: string;
  description: string;
  points: string[];
}[] = [
  {
    title: "Understanding Policy Limits and Waiting Periods",
    description:
      "Understand what is covered, applicable limits, waiting periods, exclusions, and co-payment conditions before selecting a policy.",
    points: [
      "Review coverage benefits, room rent limits, and sub-limits stated in official insurer documents.",
      "Understand initial, specific disease, and pre-existing condition waiting periods.",
      "Check co-payment conditions and deductible clauses where applicable.",
      "Always verify terms with current Star Health or HDFC ERGO policy wording.",
    ],
  },
  {
    title: "Documents Required for a Health Insurance Proposal",
    description:
      "Assistance with proposal forms, application requirements, and required information as specified by the insurer.",
    points: [
      "Identity proof, address proof, and age documentation as requested by the insurer.",
      "Accurate declaration of health information and existing medical conditions on the proposal form.",
      "Underwriting and medical screening requirements where applicable.",
      "Submission of complete proposal documentation for insurer review.",
    ],
  },
  {
    title: "Health Insurance Renewal Guidance",
    description:
      "Help understanding policy documents, renewal dates, and servicing procedures to keep your coverage active.",
    points: [
      "Understanding renewal timelines and grace periods as specified by the insurer.",
      "Reviewing any changes in policy terms or premiums upon renewal.",
      "Ensuring continuous coverage to maintain applicable waiting period benefits.",
      "Guidance on renewal payment procedures through official insurer channels.",
    ],
  },
  {
    title: "Understanding Health Insurance Claim Procedures",
    description:
      "General guidance on claim-related procedures, documentation, and coordination between healthcare providers and insurers.",
    points: [
      "Overview of cashless hospitalization procedures at network hospitals.",
      "Guidance on required claim documentation for reimbursement submissions.",
      "Understanding that claim outcomes and approvals are determined solely by the insurer.",
      "Coordination and communication support for general claim process awareness.",
    ],
  },
];

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

const HelpCircleIcon = (p: SvgProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </Svg>
);

const ChevronDownIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

const BookOpenIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="M12 7v14" />
    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
  </Svg>
);


/* ───────────────────────── Components ───────────────────────── */

export function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-12 flex max-w-[860px] flex-col gap-4">
            {FAQS.map((item, i) => {
              const open = openFaq === i;
              const panelId = `faq-panel-${i}`;
              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-2xl border bg-white transition-shadow ${
                    open
                      ? "border-[#b9cdee] shadow-[0_10px_30px_rgba(15,31,69,0.08)]"
                      : "border-slate-200 shadow-[0_2px_10px_rgba(15,31,69,0.04)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        open
                          ? "bg-[#1456c1] text-white"
                          : "bg-[#eef4fd] text-[#1456c1]"
                      }`}
                    >
                      <HelpCircleIcon size={18} />
                    </span>
                    <span className="flex-1 text-[15px] font-bold leading-snug text-[#0f1f45] sm:text-[16px]">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        open
                          ? "bg-[#eef4fd] text-[#1456c1]"
                          : "bg-[#f1f4f9] text-slate-600"
                      }`}
                    >
                      <ChevronDownIcon
                        size={16}
                        className={`transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {open && (
                    <div
                      id={panelId}
                      className="border-t border-slate-200 px-4 pb-6 pt-4 sm:pl-[76px] sm:pr-8"
                    >
                      <p className="text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
  );
}

export function ResourceCards() {
  const [openResources, setOpenResources] = useState<Set<number>>(new Set());

  const toggleResource = (i: number) =>
    setOpenResources((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="mx-auto mt-12 grid max-w-[1100px] items-start gap-6 md:grid-cols-2">
            {RESOURCES.map((r, i) => {
              const open = openResources.has(i);
              return (
                <article
                  key={r.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_2px_10px_rgba(15,31,69,0.04)] sm:p-8"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4fd] text-[#1456c1]">
                      <BookOpenIcon size={22} />
                    </span>
                    <span className="rounded-full border border-slate-200 bg-[#f7f8fa] px-3 py-1 text-[12px] font-semibold text-[#2f6fd0]">
                      Policy Guide
                    </span>
                  </div>

                  <h3
                    className={`${HEADING} mt-5 text-[18px] font-bold leading-snug sm:text-[20px]`}
                  >
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
                    {r.description}
                  </p>

                  {open && (
                    <ul className="mt-5 space-y-2.5 border-t border-slate-200 pt-5">
                      {r.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <Icon
                            name="check-circle"
                            size={18}
                            className="mt-0.5 shrink-0 text-[#1456c1]"
                          />
                          <span className="text-[13px] leading-snug text-slate-600 sm:text-[14px]">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 border-t border-slate-200 pt-5 text-center">
                    <button
                      type="button"
                      onClick={() => toggleResource(i)}
                      aria-expanded={open}
                      className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1456c1] transition hover:text-[#0f47a3]"
                    >
                      {open ? "Show Less" : "Read Details"}
                      <ChevronDownIcon
                        size={16}
                        className={`transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
  );
}
