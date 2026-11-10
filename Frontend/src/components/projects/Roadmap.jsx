
const developmentStages = [
  {
    number: "01",
    title: "Concept Exploration",
    description:
      "Understanding application requirements, identifying product needs and exploring suitable vending concepts.",
  },
  {
    number: "02",
    title: "Product Development",
    description:
      "Translating concepts into engineering approaches through mechanical design, electronics and software integration.",
  },
  {
    number: "03",
    title: "Testing & Refinement",
    description:
      "Evaluating product concepts and refining engineering approaches around practical requirements.",
  },
  {
    number: "04",
    title: "Future Possibilities",
    description:
      "Exploring opportunities to develop further product concepts and extend vending applications.",
  },
];

export default function Roadmap() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#026BA8]">
            Our Approach
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#063D2B] sm:text-4xl">
            From ideas to practical possibilities.
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#405B4B] sm:text-base">
            Product development is a process of exploration,
            engineering and refinement. Our approach considers
            each stage as part of building vending concepts
            around practical applications.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-8">
          <div className="absolute bottom-8 left-[17px] top-4 w-px bg-[#64816B]/30 sm:hidden" />

          <div className="absolute left-0 right-0 top-[17px] hidden h-px bg-[#64816B]/35 lg:block" />

          {developmentStages.map((stage) => (
            <article
              key={stage.number}
              className="group relative pl-14 sm:pl-0"
            >
              <div className="absolute left-0 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#026BA8] bg-[#F8F5E9] text-xs font-extrabold text-[#026BA8] transition-all duration-300 group-hover:border-[#69D225] group-hover:bg-[#063D2B] group-hover:text-[#F8F5E9] sm:relative">
                {stage.number}
              </div>

              <div className="sm:mt-7">
                <h3 className="text-lg font-extrabold leading-snug text-[#063D2B]">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#53675A]">
                  {stage.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 border-t border-[#64816B]/25 pt-5 text-xs leading-6 text-[#64816B]">
          A development framework illustrating our approach,
          rather than a fixed project delivery schedule.
        </p>
      </div>
    </section>
  );
}