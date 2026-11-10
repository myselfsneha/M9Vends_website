
import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  enquiryType: "",
  subject: "",
  message: "",
};

const inputClass =
  "mt-2 w-full border border-[#DCE3D9] bg-white px-4 py-3 text-sm text-[#142B45] outline-none transition-colors placeholder:text-[#8999A3] focus:border-[#087E83]";

const labelClass = "block text-sm font-semibold text-[#142B45]";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus(
      "Your enquiry details have been validated. The contact form is not connected to a submission service yet. Please use the company's confirmed contact channel."
    );
  };

  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1000px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Introduction */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087E83]">
              Get in Touch
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#142B45] sm:text-4xl">
              Let's start a conversation.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#586D7E] sm:text-base">
              Have a business enquiry, a project idea or an opportunity
              to collaborate? Tell us what you have in mind.
            </p>

            <div className="mt-10 border-l-2 border-[#087E83] pl-5">
              <p className="text-sm font-semibold text-[#142B45]">
                M9VENDS
              </p>
              <p className="mt-2 text-sm leading-7 text-[#586D7E]">
                Vending Systems · Product Engineering · Automation
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <form
            onSubmit={handleSubmit}
            className="border border-[#DCE3D9] bg-white p-6 sm:p-9"
          >
            <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[#142B45]">
              Send an Enquiry
            </h3>

            <p className="mt-2 text-sm text-[#586D7E]">
              Fill in the details below and tell us how we can help.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your contact number"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-organisation" className={labelClass}>
                  Organisation
                </label>
                <input
                  id="contact-organisation"
                  name="organisation"
                  type="text"
                  autoComplete="organization"
                  value={form.organisation}
                  onChange={handleChange}
                  placeholder="Company or organisation"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-enquiry" className={labelClass}>
                  Enquiry Type *
                </label>
                <select
                  id="contact-enquiry"
                  name="enquiryType"
                  required
                  value={form.enquiryType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select enquiry type</option>
                  <option value="Business Enquiry">Business Enquiry</option>
                  <option value="Product Enquiry">Product Enquiry</option>
                  <option value="Project Collaboration">
                    Project Collaboration
                  </option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-subject" className={labelClass}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is your enquiry about?"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className={labelClass}>
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a little more about your enquiry..."
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center bg-[#063D2B] px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#004D3B] sm:w-auto"
            >
              Send Enquiry
              <span className="ml-3" aria-hidden="true">↗</span>
            </button>

            {status && (
              <p
                role="status"
                className="mt-5 border-l-2 border-[#087E83] bg-[#66D1C5]/10 p-4 text-sm leading-6 text-[#142B45]"
              >
                {status}
              </p>
            )}

            <p className="mt-6 text-xs leading-6 text-[#586D7E]">
              Fields marked with * are required.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}