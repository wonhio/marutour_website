"use client";

import { useState } from "react";
import { inquiryTypes } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-white p-8">
        <h3 className="heading-3 text-[1.15rem] text-ink">Message sent</h3>
        <p className="body-md mt-2 text-[0.925rem] text-graphite">
          Thank you for reaching out. Our team will respond to your inquiry
          shortly.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full border border-line bg-white px-4 py-3 text-[0.925rem] text-ink placeholder:text-mist focus:border-brand";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-[0.85rem] text-graphite mb-1.5">
            Name
          </label>
          <input id="name" name="name" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="company" className="block text-[0.85rem] text-graphite mb-1.5">
            Company
          </label>
          <input id="company" name="company" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="block text-[0.85rem] text-graphite mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[0.85rem] text-graphite mb-1.5">
            Phone
          </label>
          <input id="phone" name="phone" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="country" className="block text-[0.85rem] text-graphite mb-1.5">
            Country
          </label>
          <input id="country" name="country" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="inquiryType" className="block text-[0.85rem] text-graphite mb-1.5">
            Inquiry Type
          </label>
          <select id="inquiryType" name="inquiryType" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-[0.85rem] text-graphite mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center rounded-sm bg-navy px-7 py-3.5 text-[0.95rem] text-paper transition-colors hover:bg-navy-soft disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-[0.875rem] text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
