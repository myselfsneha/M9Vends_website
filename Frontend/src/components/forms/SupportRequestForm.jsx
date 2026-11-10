
import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  preferredContact: "",
  machine: "",
  category: "",
  description: "",
};

const inputClass =
  "mt-2 w-full border border-[#DCE3D9] bg-white px-4 py-3 text-sm text-[#142B45] outline-none transition-colors placeholder:text-[#8999A3] focus:border-[#087E83]";

const labelClass = "block text-sm font-semibold text-[#142B45]";

export default function SupportRequestForm() {
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

    if (!form.email.trim() && !form.phone.trim()) {
      setStatus("Please provide either your email address or phone number so the team can contact you.");
      return;
    }

    setStatus(
      "Your support details are ready. Online support requests are not connected yet. Please contact m9vends@gmail.com for assistance."
    );
  };

  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1000px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087E83]">
              Help & Support
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#142B45] sm:text-4xl">
              How can we help?
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#586D7E] sm:text-base">
              Need assistance with a vending machine or have a technical
              question? Share the details with us so the team can understand
              your concern.
            </p>

            <div className="mt-10 border-l-2 border-[#087E83] pl-5">
              <p className="text-sm font-semibold text-[#142B45]">
                M9VENDS Support
              </p>
              <a
                href="mailto:m9vends@gmail.com"
                className="mt-2 inline-block text-sm text-[#087E83] transition-colors hover:text-[#063D2B]"
              >
                m9vends@gmail.com
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-[#DCE3D9] bg-white p-6 sm:p-9"
          >
            <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[#142B45]">
              Submit a Support Request
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#586D7E]">
              Provide the information below to describe the assistance you
              need.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="support-name" className={labelClass}>
                  Full Name *
                </label>
                <input
                  id="support-name"
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
                <label htmlFor="support-email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="support-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="support-phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  id="support-phone"
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
                <label htmlFor="support-contact" className={labelClass}>
                  Preferred Contact Method *
                </label>
                <select
                  id="support-contact"
                  name="preferredContact"
                  required
                  value={form.preferredContact}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Choose a method</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
              </div>

              <div>
                <label htmlFor="support-machine" className={labelClass}>
                  Machine / Product
                </label>
                <select
                  id="support-machine"
                  name="machine"
                  value={form.machine}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a product</option>
                  <option value="Semi-Automatic Vending Machine">
                    Semi-Automatic Vending Machine
                  </option>
                  <option value="Fully Automated IoT-Connected Vending Machine">
                    Fully Automated IoT-Connected Vending Machine
                  </option>
                  <option value="Hybrid Snacks & Cold Drinks Vending Machine">
                    Hybrid Snacks & Cold Drinks Vending Machine
                  </option>
                  <option value="Book Vending Machine">
                    Book Vending Machine
                  </option>
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="support-category" className={labelClass}>
                  Support Category *
                </label>
                <select
                  id="support-category"
                  name="category"
                  required
                  value={form.category}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a category</option>
                  <option value="Machine Operation">Machine Operation</option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Parts and Service">Parts & Service</option>
                  <option value="General Support">General Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="support-description" className={labelClass}>
                  Describe Your Concern *
                </label>
                <textarea
                  id="support-description"
                  name="description"
                  required
                  rows={5}
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe the issue or assistance you need..."
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center bg-[#063D2B] px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#004D3B] sm:w-auto"
            >
              Submit Request
              <span className="ml-3" aria-hidden="true">
                ↗
              </span>
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
              Fields marked with * are required. Please provide either an
              email address or phone number for follow-up.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}