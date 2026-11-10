
import { useState } from "react";
import { applyForCareer } from "../services/application.service";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  role: "",
  resume_drive_url: "",
};

const roles = [
  "Web Development",
  "Design (SolidWorks / AutoCAD)",
  "Electronics Core Systems",
  "AI & ML Integration",
  "Management",
  "Marketing",
  "Material Science",
];

const hiringStages = [
  {
    number: "01",
    title: "Problem Statement & Project Round",
    intro:
      "The first stage focuses on practical thinking, creativity and execution ability.",
    sections: [
      {
        heading: "What Happens",
        items: [
          "Candidates receive a real-world problem statement.",
          "The task must be completed within the given timeframe.",
          "Submissions may include concept notes, wireframes, system architecture, technical approaches, business logic or prototypes.",
        ],
      },
      {
        heading: "Areas of Exploration",
        items: [
          "Smart automation systems",
          "IoT integration",
          "Sustainable engineering",
          "User experience design",
          "Business scalability",
        ],
      },
      {
        heading: "What We Evaluate",
        items: [
          "Problem-solving approach",
          "Innovation and originality",
          "Technical clarity",
          "Practical feasibility",
          "Alignment with the M9VENDS vision",
          "Communication and presentation skills",
        ],
      },
    ],
    closing:
      "We believe real capability is demonstrated through execution, not just credentials.",
  },
  {
    number: "02",
    title: "Strategic Interview Round",
    intro:
      "The second stage focuses on mindset, long-term thinking and alignment with the team's approach.",
    sections: [
      {
        heading: "Interview Focus Areas",
        items: [
          "In-depth discussion of the submitted project",
          "Role-specific technical knowledge",
          "Understanding of automation and technology ecosystems",
          "Adaptability and learning mindset",
          "Leadership and ownership capabilities",
          "Alignment with the M9VENDS vision",
        ],
      },
      {
        heading: "Interview Format",
        items: [
          "One-on-one discussion with the Founder or Core Team",
          "Technical questions and follow-ups",
          "Scenario-based problem-solving",
          "Culture and ethics evaluation",
        ],
      },
    ],
  },
];

export default function Careers() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await applyForCareer(form);

      setStatus({
        type: "success",
        message: "Your application has been submitted successfully.",
      });

      setForm({ ...initialForm });
    } catch (error) {
      console.error(
        "Career Submit Error:",
        error.response?.data || error.message
      );

      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "We couldn't submit your application. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full border border-[#D8DDCE] bg-[#F8F5E9]/60 px-4 py-3.5 text-sm text-[#142B45] outline-none transition placeholder:text-[#64816B]/65 focus:border-[#087E83] focus:ring-2 focus:ring-[#087E83]/15 disabled:cursor-not-allowed disabled:opacity-60";

  const labelClasses =
    "mb-2.5 block text-sm font-semibold text-[#063D2B]";

  return (
    <main className="overflow-hidden bg-[#F8F5E9]">
      {/* Page Introduction */}
      <section className="relative overflow-hidden bg-[#063D2B] px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-[#69D225]/15" />
        <div className="pointer-events-none absolute -right-16 -top-24 h-[290px] w-[290px] rounded-full border border-[#69D225]/15" />

        <div className="relative mx-auto max-w-[1240px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A2EE29] sm:text-sm">
            Careers at M9VENDS
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-[#F8F5E9] sm:text-5xl lg:text-6xl">
            Build ideas. Explore possibilities.{" "}
            <span className="text-[#A2EE29]">Make an impact.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#F8F5E9]/80 sm:text-lg">
            Be part of a team exploring vending technology, product
            engineering and automation through practical ideas and
            thoughtful development.
          </p>

          <a
            href="#apply"
            className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-[#F8F5E9] px-7 py-3 text-sm font-bold text-[#063D2B] transition-colors duration-300 hover:bg-[#A2EE29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2EE29] focus-visible:ring-offset-2 focus-visible:ring-offset-[#063D2B]"
          >
            Explore Opportunities
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="scroll-mt-24 px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087E83] sm:text-sm">
              Join Our Team
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#063D2B] sm:text-4xl lg:text-5xl">
              Your next opportunity could start here.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#263E32]/80">
              Tell us a little about yourself, your interests and the
              kind of work you'd like to contribute to.
            </p>

            <div className="mt-10 border-l-2 border-[#69D225] pl-5">
              <p className="text-sm font-bold text-[#063D2B]">
                Interested in working with us?
              </p>

              <p className="mt-2 text-sm leading-7 text-[#263E32]/75">
                Submit your details and resume using the application form.
              </p>
            </div>

            <div className="mt-12 hidden border-t border-[#D8DDCE] pt-6 sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#64816B]">
                Areas of Interest
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="border border-[#D8DDCE] bg-white/70 px-3 py-2 text-xs font-medium text-[#063D2B]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-[#D8DDCE] bg-white p-6 shadow-[0_12px_45px_rgba(6,61,43,0.05)] sm:p-10 lg:p-12">
            <div className="border-b border-[#D8DDCE] pb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087E83]">
                Application Form
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#063D2B] sm:text-3xl">
                Apply for a Role
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#263E32]/70">
                Fill in your details and tell us where you'd like to
                contribute.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="career-name" className={labelClasses}>
                  Full Name
                </label>

                <input
                  id="career-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="career-email" className={labelClasses}>
                    Email Address
                  </label>

                  <input
                    id="career-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    disabled={loading}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="career-phone" className={labelClasses}>
                    Phone Number
                  </label>

                  <input
                    id="career-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    disabled={loading}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="career-role" className={labelClasses}>
                  Area of Interest
                </label>

                <select
                  id="career-role"
                  name="role"
                  required
                  value={form.role}
                  onChange={handleChange}
                  disabled={loading}
                  className={inputClasses}
                >
                  <option value="">Select an area</option>

                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="career-resume" className={labelClasses}>
                  Resume Google Drive URL
                </label>

                <input
                  id="career-resume"
                  type="url"
                  name="resume_drive_url"
                  placeholder="https://drive.google.com/..."
                  required
                  value={form.resume_drive_url}
                  onChange={handleChange}
                  disabled={loading}
                  className={inputClasses}
                />

                <p className="mt-2.5 text-xs leading-6 text-[#64816B]">
                  Make sure your Google Drive link has the necessary
                  viewing permissions.
                </p>
              </div>

              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`border px-4 py-3.5 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-[#087E83]/30 bg-[#66D1C5]/15 text-[#063D2B]"
                      : "border-red-300 bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#063D2B] px-6 py-4 text-sm font-bold text-[#F8F5E9] transition-colors duration-300 hover:bg-[#087E83] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087E83] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting Application..." : "Submit Application"}
                {!loading && <span aria-hidden="true">↗</span>}
              </button>

              <p className="text-center text-xs leading-5 text-[#64816B]">
                Please review your details before submitting your application.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="border-t border-[#D8DDCE] bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087E83] sm:text-sm">
              How We Evaluate
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#063D2B] sm:text-4xl lg:text-5xl">
              Our Hiring Process
            </h2>

            <p className="mt-5 text-base leading-8 text-[#263E32]/75">
              A two-stage process designed to understand practical
              ability, technical thinking and individual approach.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
            {hiringStages.map((stage) => (
              <article
                key={stage.number}
                className="border border-[#D8DDCE] bg-[#F8F5E9]/45 p-6 sm:p-9"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#063D2B] text-sm font-bold tracking-wider text-[#A2EE29]">
                    {stage.number}
                  </span>

                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087E83]">
                    Hiring Stage
                  </p>
                </div>

                <h3 className="mt-7 text-2xl font-bold leading-snug tracking-tight text-[#063D2B] sm:text-3xl">
                  {stage.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#263E32]/75">
                  {stage.intro}
                </p>

                <div className="mt-8 space-y-8">
                  {stage.sections.map((section) => (
                    <div key={section.heading}>
                      <h4 className="border-b border-[#D8DDCE] pb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#063D2B]">
                        {section.heading}
                      </h4>

                      <ul className="mt-4 space-y-3">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-7 text-[#263E32]/80"
                          >
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#087E83]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {stage.closing && (
                  <p className="mt-8 border-l-2 border-[#69D225] bg-white/70 px-4 py-4 text-sm font-semibold leading-7 text-[#063D2B]">
                    {stage.closing}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative overflow-hidden bg-[#063D2B] px-6 py-20 sm:py-24">
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full border border-[#69D225]/15" />

        <div className="relative mx-auto max-w-[900px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A2EE29] sm:text-sm">
            The Next Step Starts With You
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#F8F5E9] sm:text-4xl lg:text-5xl">
            Have an idea, a skill or a perspective to{" "}
            <span className="text-[#A2EE29]">bring to the table?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#F8F5E9]/80">
            Explore your interests, share your work and take the first
            step towards contributing to M9VENDS.
          </p>

          <a
            href="#apply"
            className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-[#F8F5E9] px-7 py-3 text-sm font-bold text-[#063D2B] transition-colors duration-300 hover:bg-[#A2EE29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2EE29] focus-visible:ring-offset-2 focus-visible:ring-offset-[#063D2B]"
          >
            Apply Now
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}