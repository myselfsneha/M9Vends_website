
const architectureAreas = [
  {
    number: "01",
    title: "Mechanical Systems",
    description:
      "Exploring structural design, physical components and product-specific mechanical requirements.",
  },
  {
    number: "02",
    title: "Electronics & Controls",
    description:
      "Considering electronic components, sensors, motors and control systems for automated applications.",
  },
  {
    number: "03",
    title: "Connected Technology",
    description:
      "Exploring how IoT and connected software could contribute to evolving vending applications.",
  },
  {
    number: "04",
    title: "Intelligent Systems",
    description:
      "Keeping emerging technologies and intelligent automation in view as product possibilities evolve.",
  },
];

export default function FutureArchitecture() {
  return (
    <section className="relative overflow-hidden bg-[#063D2B] py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full border border-[#90FBFC]/10" />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#90FBFC]">
            Looking Ahead
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#F8F5E9] sm:text-4xl">
            Exploring what comes next in vending technology.
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#F8F5E9]/80 sm:text-base">
            The evolution of vending systems creates opportunities
            across multiple engineering disciplines. We continue
            exploring how these areas can contribute to future
            product concepts and applications.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {architectureAreas.map((area) => (
            <article
              key={area.number}
              className="group border-t border-[#90FBFC]/30 py-7 transition-colors duration-300 hover:border-[#69D225]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold tracking-wider text-[#90FBFC]">
                  {area.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#69D225] transition-transform duration-300 group-hover:scale-150" />
              </div>

              <h3 className="mt-7 text-xl font-bold leading-snug text-[#F8F5E9]">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#F8F5E9]/75">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-[#F8F5E9]/15 pt-6">
          <p className="text-xs font-medium leading-6 text-[#D9F4F5]/70">
            These are areas of future exploration, not a specification
            of currently available product features.
          </p>
        </div>
      </div>
    </section>
  );
}