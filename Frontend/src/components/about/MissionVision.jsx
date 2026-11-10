export default function MissionVision() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">

          {/* Mission */}
          <div className="group flex flex-col justify-between border-t-2 border-[#64816B] bg-white p-8 transition duration-300 hover:-translate-y-1 sm:p-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64816B]">
                01 / Our Purpose
              </span>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#063D2B]">
                Our Mission
              </h3>

              <p className="mt-5 text-sm leading-8 text-[#53675A] sm:text-base">
                To design and develop customized vending machines and
                automated dispensing systems by bringing together practical
                engineering, electronics and software to address diverse
                product and user requirements.
              </p>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-[#D8DDCE] pt-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64816B]">
                What We Build
              </span>

              <span className="text-xl text-[#64816B] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>

          {/* Vision */}
          <div className="group flex flex-col justify-between border-t-2 border-[#A8C9A9] bg-[#063D2B] p-8 transition duration-300 hover:-translate-y-1 sm:p-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A8C9A9]">
                02 / Our Direction
              </span>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#F8F5E9]">
                Our Vision
              </h3>

              <p className="mt-5 text-sm leading-8 text-[#F8F5E9]/85 sm:text-base">
                To explore new possibilities in vending and dispensing
                technology by advancing adaptable product concepts,
                integrated engineering and purposeful innovation across
                different everyday applications.
              </p>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-[#F8F5E9]/25 pt-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8C9A9]">
                Where We Are Heading
              </span>

              <span className="text-xl text-[#A8C9A9] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}