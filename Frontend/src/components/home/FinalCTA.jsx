
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-[#F8F5E9] px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="relative grid overflow-hidden bg-[#063D2B] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Decorative Visual */}
          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#0B4934] p-10 sm:min-h-[320px] lg:min-h-[390px]">
            <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-[#A8C9A9]/25" />
            <div className="absolute -left-10 -top-14 h-52 w-52 rounded-full border border-[#A8C9A9]/30" />
            <div className="absolute -bottom-36 -right-10 h-80 w-80 rounded-full border border-[#A8C9A9]/25" />

            <div className="relative flex h-48 w-48 items-center justify-center border border-[#A8C9A9]/50 sm:h-60 sm:w-60">
              <div className="flex h-36 w-36 flex-col items-center justify-center border border-[#A8C9A9]/40 sm:h-44 sm:w-44">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A8C9A9]">
                  M9VENDS
                </span>

                <span className="mt-4 text-center text-2xl font-medium leading-tight tracking-tight text-[#F8F5E9] sm:text-3xl">
                  Built
                  <span className="block text-[#A8C9A9]">Around You.</span>
                </span>

                <span className="mt-4 h-px w-10 bg-[#A8C9A9]" />
              </div>
            </div>
          </div>

          {/* CTA Content */}
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-14">
            <span className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8C9A9]">
              <span className="h-px w-8 bg-[#A8C9A9]" />
              Let's Build Something
            </span>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#F8F5E9] sm:text-4xl lg:text-5xl">
              Your Product. Your Requirements. Our Engineering.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#F8F5E9]/75 sm:text-base">
              Have a product or business idea that needs a customized
              vending solution? Connect with M9VENDS to discuss your
              requirements and explore the possibilities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-[50px] items-center justify-center gap-3 bg-[#F8F5E9] px-7 py-3 text-sm font-semibold text-[#063D2B] transition-colors duration-300 hover:bg-[#D8DDCE]"
              >
                Discuss a Custom Solution
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                to="/products"
                className="inline-flex min-h-[50px] items-center justify-center gap-3 border border-[#F8F5E9]/40 px-7 py-3 text-sm font-semibold text-[#F8F5E9] transition-colors duration-300 hover:border-[#A8C9A9] hover:bg-[#F8F5E9]/5"
              >
                Explore Products
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}