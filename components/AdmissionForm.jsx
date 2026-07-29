"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Loader2,
  CheckCircle2,
  XCircle,
  GraduationCap,
} from "lucide-react";

const SERVICE_ID = "service_94hpni3";
const TEMPLATE_ID = "template_ysz5w66";
const PUBLIC_KEY = "HAGgDcQSyUyRnegJ1";

export default function AdmissionForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );

      setStatus("success");
      e.target.reset();
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border p-8">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        {/* Student Name */}
        <div>
          <label className="font-medium text-sm">Student Name *</label>
          <input
            required
            type="text"
            name="student_name"
            className="mt-2 w-full rounded-lg border p-3"
            placeholder="Enter Full Name"
          />
        </div>

        {/* Father's Name */}
        <div>
          <label className="font-medium text-sm">Father's Name *</label>
          <input
            required
            type="text"
            name="father_name"
            className="mt-2 w-full rounded-lg border p-3"
            placeholder="Father Name"
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="font-medium text-sm">Mother's Name</label>
          <input
            type="text"
            name="mother_name"
            className="mt-2 w-full rounded-lg border p-3"
            placeholder="Mother Name"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="font-medium text-sm">Mobile Number *</label>
          <input
            required
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-lg border p-3"
            placeholder="9876543210"
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-medium text-sm">Email Address</label>
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-lg border p-3"
            placeholder="example@gmail.com"
          />
        </div>

        {/* DOB */}
        <div>
          <label className="font-medium text-sm">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="font-medium text-sm">Gender</label>
          <select name="gender" className="mt-2 w-full rounded-lg border p-3">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Qualification */}
        <div>
          <label className="font-medium text-sm">Qualification</label>
          <input
            type="text"
            name="qualification"
            className="mt-2 w-full rounded-lg border p-3"
            placeholder="12th / Graduation"
          />
        </div>

        {/* Course */}
        <div className="md:col-span-2">
          <label className="font-medium text-sm">Select Course *</label>
          <select
            required
            name="course"
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">Choose Course</option>
            <option>BCA</option>
            <option>MCA</option>
            <option>Digital Marketing</option>
            <option>MERN Full Stack Development</option>
            <option>Data Analyst</option>
            <option>Power BI</option>
            <option>PGDCA</option>
            <option>Basic Computer</option>
            <option>Advance Computer</option>
            <option>Advanced Excel</option>
            <option>Diploma in Cyber Security</option>
          </select>
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="font-medium text-sm">Address</label>
          <textarea
            rows={4}
            name="address"
            className="mt-2 w-full rounded-lg border p-3"
            placeholder="Enter Complete Address"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="font-medium text-sm">Additional Message</label>
          <textarea
            rows={4}
            name="message"
            className="mt-2 w-full rounded-lg border p-3"
            placeholder="Any Query..."
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            disabled={status === "sending"}
            className="w-full rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            {status === "sending" ? (
              <span className="flex justify-center items-center gap-2">
                <Loader2 className="animate-spin" size={18} />
                Submitting...
              </span>
            ) : (
              "Submit Admission Form"
            )}
          </button>

          {status === "success" && (
            <div className="mt-5 flex items-center gap-2 rounded-lg bg-green-100 p-4 text-green-700">
              <CheckCircle2 size={20} />
              Admission form submitted successfully. Our team will contact you soon.
            </div>
          )}

          {status === "error" && (
            <div className="mt-5 flex items-center gap-2 rounded-lg bg-red-100 p-4 text-red-700">
              <XCircle size={20} />
              Something went wrong. Please try again.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}