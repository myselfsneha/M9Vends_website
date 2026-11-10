
import { Link } from "react-router-dom";

export default function DeploymentCTA() {
  return (
    <section className="relative overflow-hidden bg-[#063D2B] px-6 py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#90FBFC]/10" />
      <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full border border-[#90FBFC]/10" />

      <div className="relative mx-auto max-w-[1240px] text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#90FBFC]" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#90FBFC]">
            Let's Build Together
          </p>
          <span className="h-px w-8 bg-[#90FBFC]" />
        </div>

        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-[#F8F5E9] sm:text-5xl lg:text-6xl">
          Have an idea worth
          <span className="block text-[#69D225]">
            bringing to life?
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#F8F5E9]/80 sm:text-base">
          Connect with M9VENDS to explore possibilities in
          vending technology, product engineering and
          automated dispensing systems.
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex min-h-12 items-center justify-center gap-4 bg-[#69D225] px-8 py-4 text-sm font-bold text-[#063D2B] transition-all duration-300 hover:bg-[#F8F5E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#90FBFC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#063D2B]"
        >
          Start a Conversation
          <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </Link>

        <p className="mt-6 text-xs font-medium tracking-wide text-[#D9F4F5]/60">
          Ideas · Engineering · Possibilities
        </p>
      </div>
    </section>
  );
}