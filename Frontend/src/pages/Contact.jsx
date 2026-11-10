import { useState } from "react";
import { submitContact } from "../services/contact.service";

const initialForm = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  enquiryCategory: "",
  productInterest: "",
  deploymentCity: "",
  message: "",
};

const fieldClass =
  "w-full border border-[#D8DDCE] bg-[#F8F5E9]/60 px-4 py-3.5 text-sm text-[#142B45] outline-none transition placeholder:text-[#64816B]/65 focus:border-[#087E83] focus:ring-2 focus:ring-[#087E83]/15 disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "mb-2.5 block text-sm font-semibold text-[#063D2B]";

const productOptions = [
  "Semi-Automatic Vending Machine",
  "Fully Automated IoT-Connected Vending Machine",
  "Hybrid Snacks & Cold Drinks Vending Machine",
  "Book Vending Machine",
  "A different customized vending solution",
  "Not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await submitContact(form);

      setSuccess(true);
      setForm({ ...initialForm });
    } catch (err) {
      console.error(
        "Contact Submit Error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          "We couldn't send your inquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden bg-[#F8F5E9]">
      {/* Page Introduction */}
      <section className="relative overflow-hidden bg-[#063D2B] px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-[#69D225]/15" />
        <div className="pointer-events-none absolute -right-16 -top-24 h-[290px] w-[290px] rounded-full border border-[#69D225]/15" />

        <div className="relative mx-auto max-w-[1240px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A2EE29] sm:text-sm">
            Contact M9VENDS
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-[#F8F5E9] sm:text-5xl lg:text-6xl">
            Let's start a{" "}
            <span className="text-[#A2EE29]">conversation.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#F8F5E9]/80 sm:text-lg">
            Have a business inquiry, a product idea or a requirement for a
            customized vending solution? Tell us what you're looking to
            build. We'd love to hear from you.
          </p>

          <a
            href="#inquiry"
            className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-[#F8F5E9] px-7 py-3 text-sm font-bold text-[#063D2B] transition-colors duration-300 hover:bg-[#A2EE29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2EE29] focus-visible:ring-offset-2 focus-visible:ring-offset-[#063D2B]"
          >
            Send an Inquiry
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </section>

      {/* Contact Information & Inquiry Form */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Contact Information */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087E83] sm:text-sm">
              Get in Touch
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#063D2B] sm:text-4xl lg:text-5xl">
              We'd love to hear from you.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#263E32]/80">
              Connect with the M9VENDS team for business inquiries,
              customized vending requirements, partnerships and potential
              collaborations.
            </p>

            <div className="mt-10 border-t border-[#D8DDCE]">
              <div className="border-b border-[#D8DDCE] py-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087E83]">
                  Company
                </p>
                <p className="mt-3 text-lg font-bold text-[#063D2B]">
                  M9VENDS
                </p>
              </div>

              <div className="border-b border-[#D8DDCE] py-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087E83]">
                  Address
                </p>
                <p className="mt-3 text-sm leading-7 text-[#263E32]/85">
                  66, Silver Stud Apartment,
                  <br />
                  Race Course Road,
                  <br />
                  Indore, Madhya Pradesh, 4520021
                </p>
              </div>

              <div className="border-b border-[#D8DDCE] py-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087E83]">
                  Contact Person
                </p>
                <p className="mt-3 text-sm font-semibold text-[#063D2B]">
                  Lavish Goyal
                </p>
              </div>

              <div className="border-b border-[#D8DDCE] py-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087E83]">
                  Phone
                </p>
                <a
                  href="tel:+917974765416"
                  className="mt-3 inline-block text-sm font-medium text-[#263E32] transition-colors hover:text-[#087E83]"
                >
                  +91 79747 65416
                </a>
              </div>

              <div className="py-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087E83]">
                  Email
                </p>
                <a
                  href="mailto:m9vends@gmail.com"
                  className="mt-3 inline-block break-all text-sm font-medium text-[#263E32] transition-colors hover:text-[#087E83]"
                >
                  m9vends@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            id="inquiry"
            className="scroll-mt-24 border border-[#D8DDCE] bg-white p-6 shadow-[0_12px_45px_rgba(6,61,43,0.05)] sm:p-10 lg:p-12"
          >
            <div className="border-b border-[#D8DDCE] pb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087E83]">
                Business & General Enquiries
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#063D2B] sm:text-3xl">
                Tell Us About Your Requirement
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#263E32]/70">
                Share a few details so our team can better understand your
                inquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Full Name <span className="text-red-600">*</span>
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                  className={fieldClass}
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="contact-organization" className={labelClass}>
                  Organization / Company
                </label>

                <input
                  id="contact-organization"
                  type="text"
                  name="organization"
                  placeholder="Enter your organization name (if applicable)"
                  autoComplete="organization"
                  value={form.organization}
                  onChange={handleChange}
                  disabled={loading}
                  className={fieldClass}
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email Address <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    disabled={loading}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={loading}
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* Enquiry Category */}
              <div>
                <label htmlFor="contact-category" className={labelClass}>
                  Enquiry Category <span className="text-red-600">*</span>
                </label>

                <select
                  id="contact-category"
                  name="enquiryCategory"
                  required
                  value={form.enquiryCategory}
                  onChange={handleChange}
                  disabled={loading}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select an enquiry category
                  </option>
                  <option value="Custom Vending Machine">
                    Custom Vending Machine
                  </option>
                  <option value="Business Enquiry">Business Enquiry</option>
                  <option value="Partnership & Collaboration">
                    Partnership & Collaboration
                  </option>
                  <option value="Product Information">
                    Product Information
                  </option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Product Interest */}
              <div>
                <label htmlFor="contact-product" className={labelClass}>
                  Product of Interest <span className="text-red-600">*</span>
                </label>

                <select
                  id="contact-product"
                  name="productInterest"
                  required
                  value={form.productInterest}
                  onChange={handleChange}
                  disabled={loading}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select a product or solution
                  </option>

                  {productOptions.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>

              {/* Deployment City */}
              <div>
                <label htmlFor="contact-city" className={labelClass}>
                  Deployment City / Location
                </label>

                <input
                  id="contact-city"
                  type="text"
                  name="deploymentCity"
                  placeholder="Where do you plan to use the machine?"
                  autoComplete="address-level2"
                  value={form.deploymentCity}
                  onChange={handleChange}
                  disabled={loading}
                  className={fieldClass}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Tell Us About Your Requirement{" "}
                  <span className="text-red-600">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Describe your product, requirements or idea..."
                  required
                  value={form.message}
                  onChange={handleChange}
                  disabled={loading}
                  className={`${fieldClass} resize-y`}
                />
              </div>

              {/* Error Message */}
              {error && (
                <p
                  role="alert"
                  className="border border-red-200 bg-red-50 px-4 py-3.5 text-sm leading-6 text-red-700"
                >
                  {error}
                </p>
              )}

              {/* Success Message */}
              {success && (
                <p
                  role="status"
                  aria-live="polite"
                  className="border border-[#087E83]/30 bg-[#66D1C5]/15 px-4 py-3.5 text-sm leading-6 text-[#063D2B]"
                >
                  Thank you! Your inquiry has been submitted successfully.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#063D2B] px-6 py-4 text-sm font-bold text-[#F8F5E9] transition-colors duration-300 hover:bg-[#087E83] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E83] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending Inquiry..." : "Submit Inquiry"}
                {!loading && <span aria-hidden="true">↗</span>}
              </button>

              <p className="text-center text-xs leading-5 text-[#64816B]">
                We appreciate you taking the time to connect with M9VENDS.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-[#D8DDCE] bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087E83] sm:text-sm">
                Find Us
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#063D2B] sm:text-4xl">
                Visit Our Location
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#263E32]/75">
                66, Silver Stud Apartment, Race Course Road,
                Indore, Madhya Pradesh.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=66%20Silver%20Stud%20Apartment%20Race%20Course%20Road%20Indore"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 border-b border-[#087E83] pb-1 text-sm font-bold text-[#063D2B] transition-colors hover:text-[#087E83]"
            >
              Open in Google Maps
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="h-[320px] overflow-hidden border border-[#D8DDCE] bg-[#E9EBDD] sm:h-[420px]">
            <iframe
              title="M9VENDS Location - Race Course Road, Indore"
              src="https://www.google.com/maps?q=66%20Silver%20Stud%20Apartment%20Race%20Course%20Road%20Indore&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}