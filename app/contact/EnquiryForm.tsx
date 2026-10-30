"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const HEADING = "font-[family-name:var(--font-heading)] tracking-tight text-[#0f1f45]";

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

const SendIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="M14.5 21.7a.5.5 0 0 0 .93-.04L22 2.5a.5.5 0 0 0-.65-.65L2.34 8.43a.5.5 0 0 0-.04.93l7.5 3.08a2 2 0 0 1 1.1 1.1z" />
    <path d="m21.85 2.15-10.94 10.94" />
  </Svg>
);

const ChevronDownIcon = (p: SvgProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

const labelCls =
  "mb-2 block text-[12px] font-bold uppercase tracking-[0.06em] text-[#0f1f45]";
const inputCls =
  "w-full rounded-xl border border-slate-200 bg-[#f7f8fa] px-4 py-3 text-[14px] text-[#0f1f45] placeholder:text-slate-400 transition focus:border-[#1456c1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1456c1]/20 sm:text-[15px]";

type Status = "idle" | "sending" | "success" | "error";

export default function EnquiryForm() {
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
  );
}
