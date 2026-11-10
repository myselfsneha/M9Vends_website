import { Link } from "react-router-dom";

const collaborators = [
  "Aashish Joshi",
  "Amritanshu Singh",
  "Sneha Merin Jomon",
  "Anubha Jain",
  "Tirthi Jhamar",
  "Khushi Rathod",
  "Shivani Parmar",
  "Ayush Sharma",
  "Harsh Pawar",
];

export default function Collaboration() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">

          {/* Introduction */}
          <div className="max-w-md">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64816B]">
              <span className="h-px w-8 bg-[#64816B]" />
              People & Collaboration
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#063D2B] sm:text-4xl lg:text-5xl">
              Progress is built together.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#53675A] sm:text-base">
              Ideas grow through conversations, shared knowledge and
              collaboration. Different perspectives and contributions
              help shape the journey of developing practical vending
              and automation solutions.
            </p>

            <Link
              to="/team"
              className="mt-7 inline-flex items-center gap-3 border-b border-[#64816B] pb-2 text-sm font-semibold text-[#063D2B] transition-colors duration-300 hover:border-[#063D2B]"
            >
              Meet Our Team
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* People List */}
          <div>
            <div className="flex items-center justify-between border-b border-[#C8D2C2] pb-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#64816B]">
                People Behind the Journey
              </span>

              <span className="text-xs tabular-nums text-[#64816B]">
                01 — {String(collaborators.length).padStart(2, "0")}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {collaborators.map((person, index) => (
                <article
                  key={person}
                  className={`group flex min-h-[76px] items-center gap-4 border-b border-[#D8DDCE] py-5 transition-all duration-300 hover:pl-2 ${
                    index % 2 === 0
                      ? "sm:mr-5 sm:border-r sm:border-[#D8DDCE] sm:pr-5"
                      : "sm:ml-5 sm:pl-5"
                  }`}
                >
                  <span className="text-[10px] font-semibold tabular-nums text-[#8A9C88] transition-colors duration-300 group-hover:text-[#063D2B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-base font-medium tracking-tight text-[#244B38] transition-colors duration-300 group-hover:text-[#64816B] sm:text-lg">
                    {person}
                  </h3>
                </article>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-[#748575]">
              Built through shared knowledge, individual contributions
              and collaborative effort.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}