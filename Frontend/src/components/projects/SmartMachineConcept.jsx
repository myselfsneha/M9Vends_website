
export default function SmartMachineConcept() {
  return (
    <section className="relative overflow-hidden bg-[#063D2B] py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#90FBFC]/10 sm:h-[440px] sm:w-[440px]" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#90FBFC]/10 sm:h-[340px] sm:w-[340px]" />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-9 bg-[#90FBFC]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#90FBFC]">
              Project Vision
            </p>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-[#F8F5E9] sm:text-5xl lg:text-6xl">
            Rethinking how
            <span className="block text-[#69D225]">
              vending experiences
            </span>
            can evolve.
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-8 text-[#F8F5E9]/85 sm:text-base lg:text-lg">
            We explore the next possibilities in vending through
            thoughtful product engineering, purposeful automation
            and the integration of mechanical, electronic and
            software systems.
          </p>

          <div className="mt-12 border-l-2 border-[#69D225] py-2 pl-6 sm:pl-8">
            <p className="text-lg font-bold leading-8 text-[#F8F5E9] sm:text-xl">
              Practical ideas.
              <span className="text-[#90FBFC]"> Thoughtful engineering.</span>
              <br />
              New possibilities for vending technology.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#F8F5E9]/20 pt-7">
          {["Product Thinking", "Engineering", "Automation"].map((item) => (
            <span
              key={item}
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#D9F4F5]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#69D225]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}