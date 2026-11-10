
const opportunities = [
  {
    number: "01",
    title: "Evolving Markets",
    description:
      "Changing consumer expectations and everyday convenience needs create opportunities to explore new vending applications.",
    focus: "Changing needs",
  },
  {
    number: "02",
    title: "High-Traffic Environments",
    description:
      "Commercial spaces, public venues and busy locations offer potential settings for different vending and dispensing concepts.",
    focus: "Different environments",
  },
  {
    number: "03",
    title: "Adaptable Applications",
    description:
      "Different products and operating environments call for flexible concepts and product-specific engineering approaches.",
    focus: "Flexible concepts",
  },
];

export default function MarketOpportunity() {
  return (
    <section className="bg-[#E9EBDD] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#026BA8]">
            Market Perspective
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#063D2B] sm:text-4xl">
            Opportunities across evolving environments.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#405B4B] sm:text-base">
            Vending technology can be explored across different
            spaces, product categories and everyday requirements.
            Understanding these environments helps shape relevant
            product concepts.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {opportunities.map((item) => (
            <article
              key={item.number}
              className="group flex min-h-[290px] flex-col border border-[#64816B]/25 bg-[#F8F5E9] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#026BA8]/50 hover:shadow-lg hover:shadow-[#063D2B]/5 sm:p-9"
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

              <div className="mt-8 border-t border-[#D8DDCE] pt-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#64816B]">
                  Area of focus
                </span>
                <p className="mt-2 text-sm font-bold text-[#026BA8]">
                  {item.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}