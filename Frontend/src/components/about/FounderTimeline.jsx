import { useEffect, useRef, useState } from "react";

const journey = [
  {
    number: "01",
    title: "The Beginning",
    text: "M9VENDS started with an idea to develop a semi-automated pani-puri vending cart, exploring a smarter approach to everyday food vending.",
  },
  {
    number: "02",
    title: "Engineering Exploration",
    text: "The concept brought together mechanical design, motors, sensors and electronic controls to explore how different systems could work together.",
  },
  {
    number: "03",
    title: "A Broader Vision",
    text: "The initial idea opened up possibilities beyond pani-puri, with vending applications being explored across food, beverages, packaged products and books.",
  },
  {
    number: "04",
    title: "Expanding Engineering Capabilities",
    text: "Mechanical engineering, electronics and embedded systems form important parts of M9VENDS' development approach, alongside ongoing exploration of IoT and connected software.",
  },
  {
    number: "05",
    title: "Looking Ahead",
    text: "The journey continues with a focus on customized vending machines and automated dispensing concepts designed around different product needs.",
  },
];

export default function FounderTimeline() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#F8F5E9] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64816B]">
            Our Journey
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#063D2B] sm:text-4xl">
            From a single idea to a wider vision.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#53675A] sm:text-base">
            Every meaningful idea begins somewhere. Explore the thinking,
            engineering and evolving possibilities behind M9VENDS.
          </p>
        </div>

        {/* Animated Journey Timeline */}
        <div className="relative mt-16 lg:mt-20">

          {/* Mobile Vertical Track */}
          <div className="absolute bottom-5 left-5 top-5 w-px bg-[#64816B]/25 lg:hidden">
            <div
              className="h-full w-full origin-top bg-[#64816B] transition-transform duration-[3500ms] ease-in-out motion-reduce:transition-none"
              style={{
                transform: started ? "scaleY(1)" : "scaleY(0)",
              }}
            />
          </div>

          {/* Desktop Horizontal Track */}
          <div className="absolute left-5 right-5 top-5 hidden h-px bg-[#64816B]/25 lg:block">
            <div
              className="h-full w-full origin-left bg-[#64816B] transition-transform duration-[3500ms] ease-in-out motion-reduce:transition-none"
              style={{
                transform: started ? "scaleX(1)" : "scaleX(0)",
              }}
            />
          </div>

          {/* Journey Stages */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-6">
            {journey.map((item, index) => (
              <article
                key={item.number}
                className="relative pl-16 lg:pl-0 motion-reduce:transition-none"
                style={{
                  opacity: started ? 1 : 0,
                  transform: started
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: "opacity 700ms ease-out, transform 700ms ease-out",
                  transitionDelay: started ? `${index * 550}ms` : "0ms",
                }}
              >
                {/* Timeline Marker */}
                <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#64816B]/30 bg-[#E9EBDD] text-xs font-bold text-[#063D2B] transition-colors duration-500 lg:relative lg:mb-8">
                  {item.number}
                </div>

                {/* Stage Content */}
                <div className="border-l-2 border-[#64816B]/20 pl-5 lg:border-l-0 lg:pl-0">
                  <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64816B]">
                    Stage {item.number}
                  </span>

                  <h3 className="max-w-[220px] text-lg font-semibold leading-snug text-[#063D2B]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#53675A]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Journey Closing */}
        <div
          className="mt-16 border-t border-[#D8DDCE] pt-8 text-center transition-all duration-1000 motion-reduce:transition-none"
          style={{
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(20px)",
            transitionDelay: started ? "3200ms" : "0ms",
          }}
        >
          <p className="text-sm font-medium leading-7 text-[#53675A] sm:text-base">
            The journey continues — one idea, one engineering challenge,
            and one purpose-built solution at a time.
          </p>

          <span className="mt-4 inline-block h-1 w-12 bg-[#64816B]" />
        </div>

      </div>
    </section>
  );
}