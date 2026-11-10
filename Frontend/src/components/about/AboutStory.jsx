import { Link } from "react-router-dom";

export default function AboutStory() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* Story Content */}
        <div>
          <span className="mb-5 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#64816B]">
            Our Story
          </span>

          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#063D2B] sm:text-4xl">
            One idea. A wider world of possibilities.
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#53675A] sm:text-base">
            M9VENDS began with an idea to make everyday food vending
            smarter through a semi-automated pani-puri vending cart.
            This early development brought together mechanical design,
            motors, sensors and electronic controls to explore a more
            structured approach to food preparation and dispensing.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#53675A] sm:text-base">
            That starting point opened the door to a broader vision:
            developing automated dispensing systems for different
            product categories, from freshly prepared food and
            beverages to packaged products, books and other potential
            applications.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#53675A] sm:text-base">
            Today, M9VENDS brings mechanical engineering, electronics
            and embedded systems into customized vending solutions.
            The company is also exploring connected technologies and
            software to expand what future vending systems can do.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#64816B] pb-2 text-sm font-semibold text-[#063D2B] transition-colors hover:text-[#64816B]"
          >
            Explore Our Projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Journey Visual */}
        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden bg-[#063D2B] p-8 sm:p-12">
            <div className="flex h-full w-full flex-col justify-between border border-[#A8C9A9]/40 p-6 sm:p-9">

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#A8C9A9]">
                  M9VENDS
                </span>
                <span className="h-2 w-2 rounded-full bg-[#A8C9A9]" />
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A8C9A9]">
                  Where It Began
                </span>

                <h3 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#F8F5E9] sm:text-4xl">
                  From one vending idea to many possibilities.
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[#F8F5E9]/20 pt-5 text-[10px] font-medium uppercase tracking-[0.13em] text-[#F8F5E9]/85">
                <span>Mechanical</span>
                <span>Electronics</span>
                <span>Embedded Systems</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}