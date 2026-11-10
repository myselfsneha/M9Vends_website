const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "We begin by understanding the product, its dispensing requirements, operating environment and the objectives behind the proposed vending solution.",
  },
  {
    number: "02",
    title: "Study the Product",
    description:
      "We examine product dimensions, packaging, storage needs, handling requirements and the practical considerations involved in dispensing it.",
  },
  {
    number: "03",
    title: "Concept & Design",
    description:
      "We explore suitable machine structures, layouts, storage arrangements and dispensing mechanisms based on the product's requirements.",
  },
  {
    number: "04",
    title: "Engineering & Development",
    description:
      "Mechanical components, electronics, motors, sensors and control systems are considered and developed according to the proposed solution.",
  },
  {
    number: "05",
    title: "System Integration",
    description:
      "Relevant mechanical, electronic, embedded and software elements are brought together as part of the machine development process.",
  },
  {
    number: "06",
    title: "Testing & Refinement",
    description:
      "Where applicable, the developed system can be evaluated against functional requirements, with refinements guided by testing and practical operating considerations.",
  },
  {
    number: "07",
    title: "Deployment & Support",
    description:
      "The development journey can progress towards deployment, with maintenance, servicing and ongoing support considered as part of the solution.",
  },
];

export default function WhyM9Vends() {
  return (
    <section className="overflow-hidden bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64816B]">
              From Concept to Creation
            </span>

            <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#063D2B] sm:text-4xl lg:text-5xl">
              How We Engineer
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#53675A] sm:text-base">
            Every vending solution begins with understanding the product.
            Our approach brings the right engineering disciplines together
            to explore a machine built around its requirements.
          </p>
        </div>

        {/* Seven Engineering Stages */}
        <div className="relative mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative"
            >
              {/* Stage Number */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8FA991] bg-[#F8F5E9] text-sm font-semibold text-[#063D2B] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#063D2B] group-hover:text-[#F8F5E9]">
                {step.number}
              </div>

              {/* Stage Information */}
              <div className="mt-7 border-t border-[#D8DDCE] pt-5 transition-all duration-300 group-hover:border-[#64816B]">
                <span className="text-[11px] font-semibold tracking-[0.18em] text-[#64816B]">
                  STAGE {step.number}
                </span>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#063D2B] sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#53675A]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Process Note */}
        <p className="mt-12 border-t border-[#D8DDCE] pt-5 text-xs leading-6 text-[#64816B]">
          The stages represent M9VENDS' engineering approach. The actual
          development process may vary depending on the product, project
          requirements and stage of development.
        </p>

      </div>
    </section>
  );
}