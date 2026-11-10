
const layers = [
  {
    number: "01",
    title: "Mechanical Engineering",
    description:
      "Developing product-specific mechanical concepts, structural designs and physical components suited to different vending applications.",
    tags: ["Structures", "Mechanisms", "Components"],
  },
  {
    number: "02",
    title: "Electronics & Embedded Systems",
    description:
      "Bringing together motors, sensors, electronic controls and embedded systems as part of automated dispensing solutions.",
    tags: ["Motors", "Sensors", "Controls"],
  },
  {
    number: "03",
    title: "Software & Connectivity",
    description:
      "Integrating software, IoT and connected systems into the broader approach to vending-machine development.",
    tags: ["Software", "IoT", "Integration"],
  },
];

export default function EngineeringArchitecture() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#026BA8]">
            Engineering Approach
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#063D2B] sm:text-4xl">
            Where different disciplines come together.
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#405B4B] sm:text-base">
            Vending machines combine physical mechanisms,
            electronic controls and software. M9VENDS approaches
            product development by considering how these
            engineering disciplines work together.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {layers.map((layer) => (
            <article
              key={layer.number}
              className="group flex flex-col border-t-2 border-[#026BA8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#69D225] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold tracking-wider text-[#026BA8]">
                  {layer.number}
                </span>

                <span className="h-2.5 w-2.5 rounded-full bg-[#69D225] transition-transform duration-300 group-hover:scale-125" />
              </div>

              <h3 className="mt-8 text-xl font-extrabold leading-snug text-[#063D2B]">
                {layer.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-[#53675A]">
                {layer.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-[#D8DDCE] pt-5">
                {layer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#E9EBDD] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#24543B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}