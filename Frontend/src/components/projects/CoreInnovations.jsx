
const innovations = [
  {
    number: "01",
    title: "Vending Technology",
    description:
      "Exploring customized vending machines and dispensing systems for different products and everyday applications.",
  },
  {
    number: "02",
    title: "Product Engineering",
    description:
      "Combining mechanical design, electronics and software to shape product-specific engineering concepts.",
  },
  {
    number: "03",
    title: "Smart Automation",
    description:
      "Bringing motors, sensors and electronic controls into automated vending and dispensing applications.",
  },
  {
    number: "04",
    title: "Practical Development",
    description:
      "Considering real-world product requirements throughout the journey from an initial idea to an engineered concept.",
  },
];

export default function CoreInnovations() {
  return (
    <section className="bg-[#E9EBDD] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#026BA8]">
              What Drives Us
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#063D2B] sm:text-4xl">
              Innovation grounded in practical engineering.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-[#405B4B] sm:text-base">
            We bring vending technology, product engineering and
            automation together to explore solutions shaped by
            different products and real-world requirements.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {innovations.map((item) => (
            <article
              key={item.number}
              className="group flex min-h-[260px] flex-col border border-[#64816B]/25 bg-[#F8F5E9] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#026BA8]/50 hover:shadow-lg hover:shadow-[#063D2B]/5 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold tracking-wider text-[#026BA8]">
                  {item.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#69D225] transition-transform duration-300 group-hover:scale-150" />
              </div>

              <h3 className="mt-10 text-xl font-extrabold leading-snug text-[#063D2B]">
                {item.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-[#53675A]">
                {item.description}
              </p>

              <div className="mt-7 h-px w-10 bg-[#026BA8] transition-all duration-300 group-hover:w-full group-hover:bg-[#69D225]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}