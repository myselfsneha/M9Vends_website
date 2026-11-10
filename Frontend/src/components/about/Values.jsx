const values = [
  {
    number: "01",
    title: "Authenticity",
    description:
      "Building on genuine ideas, transparent communication and solutions shaped around practical requirements.",
  },
  {
    number: "02",
    title: "Hygiene & Safety",
    description:
      "Prioritising hygienic design considerations and responsible practices throughout product development.",
  },
  {
    number: "03",
    title: "Purposeful Innovation",
    description:
      "Bringing engineering and technology together to explore meaningful solutions to everyday challenges.",
  },
  {
    number: "04",
    title: "Reliability",
    description:
      "Valuing thoughtful engineering, consistency and attention to detail throughout the development process.",
  },
  {
    number: "05",
    title: "Scalability",
    description:
      "Exploring adaptable concepts with the potential to support different products and applications.",
  },
];

export default function Values() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64816B]">
            What Guides Us
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#063D2B] sm:text-4xl">
            Our Core Values
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#53675A] sm:text-base">
            The principles that shape how we think, collaborate, engineer
            and approach the development of vending and automated dispensing
            solutions.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <article
              key={value.number}
              className="group border-t border-[#64816B]/40 pt-5 transition-colors duration-300 hover:border-[#063D2B]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-[#64816B]">
                  {value.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#A8C9A9] opacity-70 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
              </div>

              <h3 className="mt-6 text-lg font-semibold leading-snug text-[#063D2B]">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#53675A]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}