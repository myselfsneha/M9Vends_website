
const applications = [
  {
    number: "01",
    title: "Retail & Business",
    description:
      "Exploring vending applications for retail settings, business environments and everyday customer needs.",
  },
  {
    number: "02",
    title: "Hospitality",
    description:
      "Considering how automated dispensing concepts could complement hospitality-focused spaces.",
  },
  {
    number: "03",
    title: "Events & Venues",
    description:
      "Exploring vending possibilities for event spaces, public venues and locations with varied visitor needs.",
  },
  {
    number: "04",
    title: "Entrepreneurs",
    description:
      "Developing adaptable vending concepts that can be explored for different business ideas and opportunities.",
  },
  {
    number: "05",
    title: "Commercial Spaces",
    description:
      "Considering applications for vending and dispensing systems across diverse commercial environments.",
  },
];

export default function Applications() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#026BA8]">
              Where It Fits
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#063D2B] sm:text-4xl">
              Applications & Possibilities
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#405B4B] sm:text-base">
              Different environments bring different requirements.
              We explore how vending technology and automated
              dispensing concepts can be adapted to a range of
              applications and business needs.
            </p>
          </div>

          <div className="flex items-center gap-3 border-l-2 border-[#69D225] py-2 pl-4">
            <span className="text-3xl font-extrabold tracking-tight text-[#063D2B]">
              05
            </span>
            <span className="max-w-[100px] text-[10px] font-bold uppercase leading-5 tracking-[0.15em] text-[#64816B]">
              Areas of exploration
            </span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {applications.map((item) => (
            <article
              key={item.number}
              className="group flex min-h-[245px] flex-col border-t-2 border-[#64816B]/40 bg-[#E9EBDD]/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#026BA8] hover:bg-white sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold tracking-wider text-[#026BA8]">
                  {item.number}
                </span>

                <span className="text-lg text-[#64816B] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#026BA8]">
                  ↗
                </span>
              </div>

              <h3 className="mt-9 text-lg font-extrabold leading-snug text-[#063D2B]">
                {item.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-[#53675A]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}