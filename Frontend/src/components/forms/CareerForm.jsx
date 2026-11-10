
import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  portfolio: "",
  message: "",
};

const inputClass =
  "mt-2 w-full border border-[#DCE3D9] bg-white px-4 py-3 text-sm text-[#142B45] outline-none transition-colors placeholder:text-[#8999A3] focus:border-[#087E83]";

const labelClass = "block text-sm font-semibold text-[#142B45]";

export default function CareerForm() {
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
      "Your details have been validated. Application submission is not connected yet. Please use the company's confirmed application channel."
    );
  };

  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[900px] px-6 sm:px-8">
        <div className="mb-12 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087E83]">
            Careers at M9VENDS
          </span>

          <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.04em] text-[#142B45] sm:text-4xl">
            Let's build something meaningful.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#586D7E] sm:text-base">
            Interested in being part of M9VENDS? Share a little about
            yourself and your professional interests.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-[#DCE3D9] bg-white p-6 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address *
              </label>
              <input
                id="email"
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
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
              <input
                id="phone"
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
              <label htmlFor="position" className={labelClass}>
                Area of Interest *
              </label>
              <select
                id="position"
                name="position"
                required
                value={form.position}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select an area</option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Electrical & Electronics">
                  Electrical & Electronics
                </option>
                <option value="Embedded Systems">
                  Embedded Systems
                </option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Product Design & Development">
                  Product Design & Development
                </option>
                <option value="Business Development & Operations">
                  Business Development & Operations
                </option>
                <option value="Marketing & Communications">
                  Marketing & Communications
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="experience" className={labelClass}>
                Experience Level
              </label>
              <select
                id="experience"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select experience</option>
                <option value="Student">Student</option>
                <option value="Fresher">Fresher</option>
                <option value="0-2 years">0–2 years</option>
                <option value="2-5 years">2–5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>

            <div>
              <label htmlFor="portfolio" className={labelClass}>
                Portfolio / LinkedIn URL
              </label>
              <input
                id="portfolio"
                name="portfolio"
                type="url"
                value={form.portfolio}
                onChange={handleChange}
                placeholder="https://..."
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Tell us about yourself *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Share your background, skills and what interests you about M9VENDS..."
                className={`${inputClass} resize-y`}
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center bg-[#063D2B] px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#004D3B] sm:w-auto"
            >
              Submit Application
              <span className="ml-3" aria-hidden="true">
                ↗
              </span>
            </button>
          </div>

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
    </section>
  );
}