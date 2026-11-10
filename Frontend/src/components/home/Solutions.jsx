const technologies = [
  {
    number: "01",
    title: "Mechanical Engineering",
    description:
      "Product-focused machine structures, mechanical design and dispensing mechanisms developed around the physical and functional requirements of each product.",
    label: "MACHINE DESIGN",
    status: "Core Discipline",
  },
  {
    number: "02",
    title: "Electronics & Controls",
    description:
      "Motors, electrical components, power systems and control circuits that support the operation of vending machines.",
    label: "ELECTRICAL ENGINEERING",
    status: "Core Discipline",
  },
  {
    number: "03",
    title: "Embedded Systems",
    description:
      "Microcontroller-based control and sensor integration designed to support machine functions and automated operating sequences.",
    label: "INTELLIGENT SYSTEMS",
    status: "Core Discipline",
  },
  {
    number: "04",
    title: "IoT Connectivity",
    description:
      "Exploring connected machine capabilities that could support remote visibility, machine communication and connected operations.",
    label: "CONNECTED MACHINES",
    status: "In Development",
  },
  {
    number: "05",
    title: "Connected Software",
    description:
      "Exploring software for machine monitoring and multi-machine management, with cloud-based capabilities forming part of the longer-term development direction.",
    label: "SOFTWARE INTEGRATION",
    status: "Future Direction",
  },
];

export default function Solutions() {
  return (
    <section className="relative overflow-hidden bg-[#063D2B] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8C9A9]">
            <span className="h-px w-8 bg-[#A8C9A9]" />
            Engineering & Innovation
          </span>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#F8F5E9] sm:text-4xl lg:text-5xl">
            Engineering Behind Every Machine
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#F8F5E9]/75 sm:text-base">
            We bring mechanical engineering, electronics, embedded systems
            and software together to explore customized vending and
            automated dispensing solutions.
          </p>
        </div>

        {/* Engineering Disciplines */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <article
              key={technology.number}
              className="group relative flex min-h-[290px] flex-col justify-between border border-[#F8F5E9]/20 bg-[#F8F5E9]/[0.04] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#A8C9A9]/70 hover:bg-[#F8F5E9]/[0.09] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#A8C9A9]">
                  {technology.number}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A8C9A9]/50 transition-transform duration-500 group-hover:rotate-45">
                  <span className="h-2 w-2 rounded-full bg-[#A8C9A9]" />
                </span>
              </div>

              <div className="mt-12">
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#A8C9A9]">
                  {technology.label}
                </span>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#F8F5E9] sm:text-2xl">
                  {technology.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#F8F5E9]/70">
                  {technology.description}
                </p>

                <span className="mt-5 inline-flex border border-[#A8C9A9]/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#A8C9A9]">
                  {technology.status}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A8C9A9] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}