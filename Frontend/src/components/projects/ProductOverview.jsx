
const productAreas = [
  "Food Vending",
  "Snacks & Beverages",
  "Book Vending",
  "Automated Dispensing",
];

export default function ProductOverview() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* Visual panel */}
        <div className="relative">
          <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-[#E9EBDD] p-8 sm:p-12">
            <div className="absolute left-0 top-0 h-24 w-24 border-l border-t border-[#026BA8]" />
            <div className="absolute bottom-0 right-0 h-24 w-24 border-b border-r border-[#026BA8]" />

            <div className="relative flex h-full w-full flex-col justify-between border border-[#063D2B]/20 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#026BA8]">
                  M9VENDS / PRODUCT ECOSYSTEM
                </span>
                <span className="h-2 w-2 rounded-full bg-[#69D225]" />
              </div>

              <div>
                <div className="mb-5 h-px w-12 bg-[#026BA8]" />

                <p className="max-w-sm text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#063D2B] sm:text-4xl">
                  One ecosystem.
                  <span className="mt-1 block text-[#026BA8]">
                    Multiple applications.
                  </span>
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#063D2B]/20 pt-5">
                <span className="text-[10px] font-bold tracking-[0.16em] text-[#405B4B]">
                  ENGINEERING & AUTOMATION
                </span>
                <span className="text-xl font-semibold text-[#026BA8]">↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product information */}
        <div>
          <span className="mb-5 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#026BA8]">
            M9VENDS / Product Overview
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#063D2B] sm:text-4xl lg:text-5xl">
            Designed around
            <span className="block text-[#026BA8]">
              everyday applications.
            </span>
          </h2>

          <p className="mt-7 text-base leading-8 text-[#405B4B]">
            M9VENDS develops customized vending machines and
            automated dispensing systems for different everyday
            requirements. Its product ecosystem extends across
            food, packaged snacks, cold beverages, books and
            essential items.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#53675A]">
            Each application brings together product-specific
            mechanical design, electronic systems and software
            integration to explore practical ways of dispensing
            products.
          </p>

          <div className="mt-9 border-t border-[#D8DDCE] pt-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#063D2B]">
              Application areas
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {productAreas.map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-12 items-center gap-3 border border-[#D8DDCE] bg-white px-3 py-3 sm:px-4"
                >
                  <span className="text-[10px] font-bold text-[#026BA8]">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#063D2B] sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}