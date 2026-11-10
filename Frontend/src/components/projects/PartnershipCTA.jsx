
import { Link } from "react-router-dom";

export default function PartnershipCTA() {
  return (
    <section className="bg-[#F8F5E9] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-[1000px] border border-[#64816B]/30 bg-[#E9EBDD] px-7 py-12 text-center sm:px-12 sm:py-16">
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#026BA8]" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#026BA8]">
            Partnerships & Collaboration
          </p>
          <span className="h-px w-8 bg-[#026BA8]" />
        </div>

        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#063D2B] sm:text-4xl">
          Let's create something
          <span className="text-[#026BA8]"> meaningful together.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#405B4B] sm:text-base">
          Have a business opportunity, a collaboration idea or
          an interest in working with M9VENDS? Let's start
          a conversation and explore the possibilities.
        </p>

        <Link
          to="/contact"
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-4 bg-[#063D2B] px-8 py-4 text-sm font-bold text-[#F8F5E9] transition-all duration-300 hover:bg-[#026BA8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#026BA8] focus-visible:ring-offset-2"
        >
          Discuss a Collaboration
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}