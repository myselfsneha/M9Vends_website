
const engineeringAreas = [
  {
    number: "01",
    title: "Structural Design",
    description:
      "Planning the physical structure, component arrangement and product-specific design requirements of vending systems.",
  },
  {
    number: "02",
    title: "Dispensing Mechanisms",
    description:
      "Exploring suitable mechanical approaches for storing, handling and dispensing different types of products.",
  },
  {
    number: "03",
    title: "Electronics & Controls",
    description:
      "Considering motors, sensors, electronic components and control systems within automated vending concepts.",
  },
  {
    number: "04",
    title: "System Integration",
    description:
      "Connecting mechanical, electronic and software elements into a coordinated product-development approach.",
  },
];

export default function TechnicalSpecs() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#026BA8]">
            Engineering & Development
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#063D2B] sm:text-4xl">
            The details behind every vending concept.
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#405B4B] sm:text-base">
            Developing vending systems involves more than the
            machine's outer structure. Mechanical components,
            dispensing methods, electronic controls and software
            integration all contribute to the overall design.
          </p>
        </div>

        <div className="mt-14 border-t border-[#64816B]/40">
          {engineeringAreas.map((area) => (
            <article
              key={area.number}
              className="group grid grid-cols-1 gap-3 border-b border-[#64816B]/30 py-7 transition-colors duration-300 hover:bg-white/60 sm:grid-cols-[70px_1fr_1.2fr] sm:items-center sm:gap-8 sm:px-4"
            >
              <span className="text-sm font-extrabold tracking-wider text-[#026BA8]">
                {area.number}
              </span>

              <h3 className="text-lg font-bold leading-snug text-[#063D2B] transition-colors duration-300 group-hover:text-[#026BA8]">
                {area.title}
              </h3>

              <p className="text-sm leading-7 text-[#53675A]">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#69D225]" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64816B]">
            Product-specific engineering considerations
          </p>
        </div>
      </div>
    </section>
  );
}