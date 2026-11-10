
import { Link } from "react-router-dom";
import SupportRequestForm from "../components/forms/SupportRequestForm";

const supportAreas = [
  {
    number: "01",
    title: "General Enquiries",
    description:
      "Have a question about M9VENDS, our work or our areas of focus? Get in touch and let us know how we can help.",
  },
  {
    number: "02",
    title: "Business & Partnerships",
    description:
      "Interested in working with us? Connect with our team to discuss business opportunities, partnerships and collaborations.",
  },
  {
    number: "03",
    title: "Project & Development",
    description:
      "Reach out to discuss product engineering, vending concepts, technical interests or potential development opportunities.",
  },
];

const supportSteps = [
  {
    number: "01",
    title: "Share Your Concern",
    description:
      "Tell us about your machine, product or the assistance you need through the support request form.",
  },
  {
    number: "02",
    title: "Initial Review",
    description:
      "The information you provide helps the team understand the nature of your enquiry.",
  },
  {
    number: "03",
    title: "Further Communication",
    description:
      "The team can use your preferred contact details to discuss the concern and any additional information required.",
  },
  {
    number: "04",
    title: "Next Steps",
    description:
      "Any recommended assistance, maintenance or technical follow-up will depend on the specific machine and situation.",
  },
];

const faqs = [
  {
    question: "How can I enquire about a M9VENDS product?",
    answer:
      "Visit the Products page to explore the available vending machine concepts. For a specific requirement or customization enquiry, use the Contact page.",
  },
  {
    question: "Can M9VENDS develop a machine for my product?",
    answer:
      "M9VENDS focuses on customized vending machines and automated dispensing systems. Share your product details and requirements so the team can consider the technical possibilities.",
  },
  {
    question: "What should I include in a support request?",
    answer:
      "Include the machine or product name, a clear description of your concern and your preferred contact method. Additional details can help the team understand the situation.",
  },
  {
    question: "How do I enquire about maintenance or servicing?",
    answer:
      "Select Maintenance in the support request form and describe the assistance required. Specific service arrangements depend on the relevant product and engagement.",
  },
  {
    question: "Are all product features currently available?",
    answer:
      "Product capabilities depend on their individual development stage. Features described as concepts or in development should not be treated as currently operational.",
  },
  {
    question: "How can I discuss a business collaboration?",
    answer:
      "Use the Contact page and select the relevant enquiry category to share your business or collaboration proposal.",
  },
];

const policySections = [
  {
    title: "Information You Share",
    description:
      "When you contact M9VENDS or submit an enquiry, you may choose to provide details such as your name, email address, phone number and information relevant to your request.",
  },
  {
    title: "How Information Is Used",
    description:
      "Information submitted through the website may be used to understand your enquiry, respond to your communication, consider relevant opportunities and follow up where appropriate.",
  },
  {
    title: "Information Sharing",
    description:
      "Personal information is not intended for public display. Any sharing of submitted information should be limited to legitimate business, operational or legal requirements.",
  },
  {
    title: "Information Security",
    description:
      "Information submitted through the website should be handled responsibly, with appropriate safeguards maintained against unauthorised access, use or disclosure.",
  },
  {
    title: "Data Retention",
    description:
      "Information may be retained for as long as reasonably necessary to address the original enquiry, maintain relevant business records or meet applicable legal requirements.",
  },
  {
    title: "Policy Updates",
    description:
      "This privacy information may be updated as M9VENDS' website, services or information-handling requirements evolve. Updated content will be published on this page.",
  },
];

const termsSections = [
  {
    title: "Website Information",
    description:
      "Content on this website introduces M9VENDS, its areas of work, product concepts and development interests. Information may evolve as projects progress.",
  },
  {
    title: "Products & Customization",
    description:
      "Product concepts, configurations and customization possibilities are subject to technical assessment and discussion. Specific features, specifications and commercial terms must be confirmed separately.",
  },
  {
    title: "Enquiries & Orders",
    description:
      "Submitting an enquiry through this website does not automatically constitute an order, purchase agreement or confirmed business engagement. Any such arrangement requires separate confirmation.",
  },
  {
    title: "Maintenance & Warranty",
    description:
      "Maintenance arrangements, service responsibilities and warranty coverage, where applicable, will be governed by the specific terms communicated and agreed for the relevant product or engagement.",
  },
  {
    title: "Intellectual Property",
    description:
      "Website content, branding, visual identity, designs and other materials associated with M9VENDS may be protected by applicable intellectual property laws. They should not be reproduced or used without appropriate authorisation.",
  },
  {
    title: "Liability & Compliance",
    description:
      "Product use, operating requirements and applicable responsibilities depend on the specific product and engagement. Users and business partners should follow relevant instructions and applicable laws and regulations.",
  },
  {
    title: "Changes to These Terms",
    description:
      "M9VENDS may update website information and these terms as its work and requirements develop. The latest published version will be available on this page.",
  },
];

export default function HelpDesk() {
  return (
    <main className="bg-[#F8F5E9]">
      {/* Page Introduction */}
      <section className="relative overflow-hidden bg-[#063D2B] px-6 py-24 sm:py-28">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#A8C9A9]/15" />
        <div className="pointer-events-none absolute -bottom-48 -left-24 h-96 w-96 rounded-full border border-[#A8C9A9]/10" />

        <div className="relative mx-auto max-w-[1240px] text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#A2EE29]">
            Help & Support
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#F8F5E9] sm:text-5xl lg:text-6xl">
            We're here to help you connect.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-[#F8F5E9]/85 sm:text-lg">
            Whether you have a question about our work, a project enquiry or
            an idea to discuss, reach out to the M9VENDS team.
          </p>

          <div className="mx-auto mt-9 h-1 w-16 rounded-full bg-[#A2EE29]" />
        </div>
      </section>

      {/* Support Categories */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#067676]">
              How Can We Help?
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#063D2B] sm:text-4xl">
              Find the right way to reach us.
            </h2>

            <p className="mt-5 text-base font-medium leading-8 text-[#294B3C]">
              Choose the area that best describes your enquiry and connect
              with our team.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {supportAreas.map((area) => (
              <article
                key={area.number}
                className="group rounded-sm border border-[#D8DDCE] border-t-[3px] border-t-[#067676] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-t-[#69D225] hover:shadow-xl hover:shadow-[#063D2B]/10 sm:p-8"
              >
                <span className="text-sm font-extrabold tracking-wider text-[#067676]">
                  {area.number}
                </span>

                <h3 className="mt-6 text-xl font-extrabold text-[#063D2B] transition-colors group-hover:text-[#067676]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-[#405C4D]">
                  {area.description}
                </p>

                <div className="mt-7 h-1 w-9 rounded-full bg-[#69D225] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="border-y border-[#D8DDCE] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#067676]">
              Support Process
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#063D2B] sm:text-4xl">
              From your enquiry to the next step.
            </h2>

            <p className="mt-5 text-sm font-medium leading-7 text-[#405C4D]">
              A clear starting point helps us understand your requirements
              and identify the appropriate way forward.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {supportSteps.map((step) => (
              <article
                key={step.number}
                className="border-t-2 border-[#69D225] pt-6"
              >
                <span className="text-sm font-extrabold tracking-wider text-[#067676]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-extrabold text-[#063D2B]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-[#405C4D]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Support Request Form */}
      <SupportRequestForm />

      {/* FAQs */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1000px]">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#067676]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#063D2B] sm:text-4xl">
            A few things you might want to know.
          </h2>

          <div className="mt-10 divide-y divide-[#D8DDCE] border-y border-[#D8DDCE]">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-extrabold text-[#063D2B] marker:content-none">
                  <span>
                    <span className="mr-3 text-sm text-[#067676]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-xl text-[#067676] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl pl-9 text-sm font-medium leading-7 text-[#405C4D]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Safety and Maintenance */}
      <section className="px-6 pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1240px] border-l-4 border-[#69D225] bg-white px-7 py-8 sm:px-10 sm:py-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#067676]">
            Safety & Maintenance
          </p>

          <h2 className="mt-4 text-2xl font-extrabold text-[#063D2B] sm:text-3xl">
            Operate responsibly. Maintain carefully.
          </h2>

          <div className="mt-5 grid gap-5 text-sm font-medium leading-7 text-[#405C4D] md:grid-cols-2">
            <p>
              Follow the operating and maintenance instructions provided for
              the specific machine. Keep equipment clean and ensure that
              routine cleaning, refilling and maintenance are carried out
              appropriately.
            </p>

            <p>
              Do not attempt electrical repairs, modify machine components or
              bypass safety mechanisms without appropriate technical
              authorisation. If you notice an unusual condition, stop using
              the equipment when it is safe to do so and seek qualified
              assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-20 sm:pb-24">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden bg-[#063D2B] px-7 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-[#A8C9A9]/20" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#A2EE29]">
                Need Further Assistance?
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#F8F5E9] sm:text-4xl">
                Let's get your conversation started.
              </h2>

              <p className="mt-4 text-sm font-medium leading-7 text-[#F8F5E9]/85">
                For business enquiries, custom machine requirements or
                collaborations, connect with the M9VENDS team.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center bg-[#A2EE29] px-8 py-4 text-sm font-extrabold text-[#063D2B] transition-all duration-300 hover:bg-[#F8F5E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2EE29] focus-visible:ring-offset-2 focus-visible:ring-offset-[#063D2B]"
            >
              Contact M9VENDS →
            </Link>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="border-t border-[#D8DDCE] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1000px]">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#067676]">
            Important Information
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#063D2B] sm:text-4xl">
            Terms & Conditions
          </h2>

          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-[#405C4D]">
            By accessing this website, you agree to use its content
            responsibly and in accordance with applicable laws. The following
            information outlines the general terms associated with using the
            M9VENDS website.
          </p>

          <div className="mt-10 divide-y divide-[#D8DDCE] border-y border-[#D8DDCE]">
            {termsSections.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[55px_1fr] sm:gap-6"
              >
                <span className="text-sm font-extrabold text-[#067676]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-base font-extrabold text-[#063D2B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-7 text-[#405C4D]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="bg-[#F8F5E9] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1000px]">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#067676]">
            Privacy & Data
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#063D2B] sm:text-4xl">
            Privacy Policy
          </h2>

          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-[#405C4D]">
            This section describes the general approach to information
            submitted through the M9VENDS website. The final policy should
            reflect the company's actual data-handling practices.
          </p>

          <div className="mt-10 space-y-8">
            {policySections.map((item, index) => (
              <article
                key={item.title}
                className="grid grid-cols-1 gap-3 border-b border-[#D8DDCE] pb-7 sm:grid-cols-[55px_1fr] sm:gap-6"
              >
                <span className="text-sm font-extrabold text-[#067676]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-base font-extrabold text-[#063D2B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-7 text-[#405C4D]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-l-[3px] border-[#69D225] bg-white px-6 py-5">
            <p className="text-sm font-bold leading-7 text-[#294B3C]">
              For questions about information submitted through our website,
              please reach out through our{" "}
              <Link
                to="/contact"
                className="font-extrabold text-[#067676] underline decoration-[#69D225] underline-offset-4 transition-colors hover:text-[#063D2B]"
              >
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <p className="mx-auto max-w-[1000px] px-6 pb-10 text-xs leading-6 text-[#586D7E]">
        Note: The Terms & Conditions and Privacy Policy above are website
        drafts and should be reviewed and approved by M9VENDS before
        publication as official legal policies.
      </p>
    </main>
  );
}