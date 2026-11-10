const focusAreas = [
  {
    number: "01",
    title: "Vending Technology",
    description:
      "Developing customized vending machines and dispensing systems designed around the products they serve.",
    accent: "#64816B",
  },
  {
    number: "02",
    title: "Product Engineering",
    description:
      "Transforming product requirements into practical solutions through mechanical design and engineering.",
    accent: "#063D2B",
  },
  {
    number: "03",
    title: "Intelligent Automation",
    description:
      "Integrating electronics, embedded systems and automation to create structured dispensing experiences.",
    accent: "#A8C9A9",
  },
];

export default function AboutSnapshot() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#64816B]">
            What drives us
          </span>

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#063D2B] sm:text-4xl lg:text-5xl">
            Engineering ideas into practical solutions.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#53675A] sm:text-lg">
            M9VENDS brings together vending technology, product
            engineering and automation to develop customized systems
            for real-world applications.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.number}
              className="group relative overflow-hidden border border-[#D8DDCE] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#A8C9A9] hover:shadow-[0_16px_40px_rgba(6,61,43,0.07)] sm:p-8"
            >
              <div
                className="mb-8 h-1 w-12"
                style={{ backgroundColor: area.accent }}
              />

              <span className="text-xs font-semibold tracking-[0.15em] text-[#82948A]">
                {area.number}
              </span>

              <h3 className="mt-4 text-xl font-bold tracking-[-0.025em] text-[#063D2B]">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#53675A]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}