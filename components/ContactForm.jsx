"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

const SERVICE_ID = "service_94hpni3";
const TEMPLATE_ID = "template_vryh1jx";
const PUBLIC_KEY = "HAGgDcQSyUyRnegJ1";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl2 border border-brass-500/20 bg-ivory-50 p-6 shadow-premium"
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink-700">
          Full Name
        </label>
        <input
          id="name"
          name="from_name"
          type="text"
          required
          className="mt-1.5 w-full rounded-lg border border-brass-500/25 px-4 py-2.5 text-sm focus-ring"
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-ink-700">
          Phone Number
        </label>
        <input
          id="phone"
          name="from_phone"
          type="tel"
          required
          className="mt-1.5 w-full rounded-lg border border-brass-500/25 px-4 py-2.5 text-sm focus-ring"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink-700">
          Email
        </label>
        <input
          id="email"
          name="from_email"
          type="email"
          required
          className="mt-1.5 w-full rounded-lg border border-brass-500/25 px-4 py-2.5 text-sm focus-ring"
        />
      </div>

      <div>
        <label htmlFor="course" className="text-sm font-medium text-ink-700">
          Course of Interest
        </label>

        <select
          id="course"
          name="course"
          required
          defaultValue=""
          className="mt-1.5 w-full rounded-lg border border-brass-500/25 bg-white px-4 py-2.5 text-sm focus-ring"
        >
          <option value="" disabled>
            Select a Course
          </option>

          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>

          <option value="DigitalMarketing">
            Digital Marketing
          </option>

          <option value="FullStackWebDevelopment">
            MERN  Full Stack Web Development
          </option>


          <option value="DataAnalyst">
            Data Analyst
          </option>

          <option value="PowerBI">
            Power BI
          </option>


          <option value="CyberSecurity">
            Diploma in Cyber Security
          </option>

          <option value="BasicComputer">
            Basic Computer
          </option>

          <option value="AdvancedExcel">
          Advance Computer with  Advanced Excel
          </option>

          <option value="Pgdca">
            PGDCA
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-brass-500/25 px-4 py-2.5 text-sm focus-ring"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy-950 px-6 py-3 font-semibold text-brass-300 transition-colors hover:bg-navy-900 focus-ring disabled:opacity-60"
      >
        {status === "sending" && <Loader2 size={18} className="animate-spin" />}
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 rounded-lg bg-pine-500/10 px-4 py-3 text-sm text-pine-600">
          <CheckCircle2 size={18} /> Thank you — your enquiry has been sent. We'll contact you soon.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-600">
          <XCircle size={18} /> Something went wrong. Please call us directly instead.
        </p>
      )}
    </form>
  );
}
