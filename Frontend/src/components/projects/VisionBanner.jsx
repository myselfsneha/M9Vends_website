
export default function VisionBanner() {
  return (
    <section className="relative overflow-hidden bg-[#063D2B] px-6 py-24 text-center sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#90FBFC]" />
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#90FBFC]">
            Products & Solutions
          </p>
          <span className="h-px w-8 bg-[#90FBFC]" />
        </div>

        <h1 className="text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-[#F8F5E9] sm:text-5xl lg:text-6xl">
          Engineering vending systems
          <span className="mt-2 block text-[#69D225]">
            for everyday needs.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-[#F8F5E9]/85 sm:text-base lg:text-lg">
          We design and develop customized vending machines and
          automated dispensing systems, bringing mechanical
          engineering, electronics and software together across
          food, beverages, books and everyday essentials.
        </p>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-3">
          {["Product Engineering", "Smart Automation", "Vending Systems"].map(
            (item) => (
              <span
                key={item}
                className="border border-[#90FBFC]/25 bg-[#90FBFC]/[0.07] px-4 py-2 text-xs font-semibold tracking-wide text-[#D9F4F5]"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}