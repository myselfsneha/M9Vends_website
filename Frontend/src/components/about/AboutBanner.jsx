export default function AboutBanner() {
  return (
    <section className="relative overflow-hidden bg-[#063D2B] py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6 text-center sm:px-8 lg:px-10">
        <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8C9A9]">
          <span className="h-px w-8 bg-[#A8C9A9]" />
          About M9VENDS
          <span className="h-px w-8 bg-[#A8C9A9]" />
        </span>

        <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#F8F5E9] sm:text-5xl lg:text-6xl">
          Engineering ideas into
          <span className="block text-[#A8C9A9]">
            intelligent vending solutions.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#F8F5E9]/85 sm:text-base">
          M9VENDS is an engineering-led company developing customized
          vending machines and automated dispensing systems. We bring
          mechanical engineering, electronics and embedded systems
          together to build machines around the products they serve,
          while exploring connected technologies for future solutions.
        </p>
      </div>
    </section>
  );
}