import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    name: "Semi-Automated Pani-Puri Vending Cart",
    category: "Freshly Prepared Food",
    status: "Developed",
    statusColor: "bg-[#E5F0E3] text-[#245C35]",

    overview:
      "One of M9VENDS' early engineering projects, this semi-automated vending cart was developed around the pani-puri serving process. It combines product-specific mechanical construction with motors, sensors and electronic controls.",

    problem:
      "A familiar street-food serving process involves several product-specific steps. This project explores how a purpose-built vending mechanism can support parts of that process.",

    objective:
      "Explore how a familiar street-food serving process could be supported through a purpose-built vending mechanism.",

    engineering:
      "The machine brings together mechanical construction, motor-assisted operation, sensors and electronic controls. Its design is centred on the specific requirements of the product and serving process.",

    technology:
      "Product-specific mechanical construction, motors, sensors and electronic controls.",

    development:
      "Developed as an early application-focused machine, combining its mechanical construction with motor-assisted operation and electronic controls.",

    application:
      "Freshly prepared food vending, beginning with the pani-puri application.",

    future:
      "The experience gained from this project provides a foundation for exploring other product-specific automated dispensing systems.",

  },

  {
    number: "02",
    name: "Fully Automated IoT-Connected Vending Machine",
    category: "Connected Vending",
    status: "In Development",
    statusColor: "bg-[#E1F1F2] text-[#075D69]",

    overview:
      "This project represents the next direction in M9VENDS' vending-machine development, bringing automated dispensing, embedded electronics and connected technology into a broader machine architecture.",

    problem:
      "Different vending applications may require dispensing, control and monitoring to work together. This project explores an integrated architecture for those requirements.",

    objective:
      "Explore a more integrated vending system with automated operating sequences and the potential for connected machine management.",

    engineering:
      "The proposed architecture brings together mechanical dispensing mechanisms, embedded control systems, sensors, electronics and IoT connectivity.",

    technology:
      "Proposed integration of mechanical dispensing systems, embedded controls, sensors, electronics and IoT connectivity.",

    development:
      "In development. The architecture explores how automated dispensing and connected technologies may work together. Cloud software and multi-machine management remain longer-term development directions.",

    application:
      "Customized vending applications that may benefit from connected operation and centralized machine management.",

    future:
      "Cloud software and multi-machine monitoring are longer-term development directions, subject to implementation and validation.",

  },

  {
    number: "03",
    name: "Hybrid Snacks & Cold Drinks Vending Machine",
    category: "Food & Beverage",
    status: "Concept",
    statusColor: "bg-[#F3EBDD] text-[#805C25]",

    overview:
      "A hybrid vending-machine concept designed to bring packaged snacks and cold beverages together within one vending system.",

    problem:
      "Packaged snacks and chilled beverages have different storage requirements. A combined vending system needs to account for both product categories.",

    objective:
      "Explore a combined vending arrangement that considers the different storage requirements of packaged snacks and chilled beverages.",

    engineering:
      "The concept considers two separate product zones: ambient storage for packaged snacks and an independently refrigerated compartment for beverages.",

    technology:
      "The concept considers separate ambient snack storage and an independently refrigerated beverage compartment. Final technical specifications remain subject to development.",

    development:
      "At the concept stage. Further engineering development will determine the final structure, configuration and technical requirements.",

    application:
      "Packaged snack and cold beverage vending in locations where both product categories may be offered together.",

    future:
      "Further engineering development will determine the final structure, configuration and technical requirements.",

  },

  {
    number: "04",
    name: "Book Vending Machine",
    category: "Books & Educational Products",
    status: "Prototype / In Development",
    statusColor: "bg-[#E9EBDD] text-[#405C4D]",

    overview:
      "A vending-machine project exploring the automated dispensing of books and educational products through a product-specific machine design.",

    problem:
      "Books vary in dimensions and physical format. A suitable vending arrangement needs to consider storage and dispensing requirements for educational products.",

    objective:
      "Explore how vending technology can be adapted beyond food and beverage applications.",

    engineering:
      "The design direction considers book dimensions, storage arrangements and dispensing mechanisms suited to educational products.",

    technology:
      "Product-specific storage arrangements and dispensing mechanisms designed around the physical characteristics of books and educational products.",

    development:
      "Prototype / In Development. The machine configuration and final operating capabilities will depend on its development stage and further technical validation.",

    application:
      "Potential use in educational institutions, learning spaces and other environments where books and educational products may be made accessible.",

    future:
      "The machine configuration and final operating capabilities will depend on further development and technical validation.",

  },
];

function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] ${
        light ? "text-[#90FBFC]" : "text-[#64816B]"
      }`}
    >
      <span
        className={`h-px w-8 ${
          light ? "bg-[#90FBFC]" : "bg-[#64816B]"
        }`}
      />
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  const details = [
    {
      title: "Problem / Design Consideration",
      content: project.problem,
    },
    {
      title: "Project Objective",
      content: project.objective,
    },
    {
      title: "Engineering Approach",
      content: project.engineering,
    },
    {
      title: "Technology / Systems",
      content: project.technology,
    },
    {
      title: "Development Stage",
      content: project.development,
    },
    {
      title: "Application",
      content: project.application,
    },
    {
      title: "Future Possibilities",
      content: project.future,
    },
  ];

  return (
    <article
      id={`project-${project.number}`}
      className="scroll-mt-28 border border-[#D8DDCE] bg-[#F8F5E9] p-6 sm:p-9 lg:p-12"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="text-xs font-bold tracking-[0.2em] text-[#64816B]">
          PROJECT {project.number}
        </span>

        <span
          className={`px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] ${project.statusColor}`}
        >
          {project.status}
        </span>
      </div>

      <div className="mt-8 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#64816B]">
          {project.category}
        </p>

        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#063D2B] sm:text-4xl">
          {project.name}
        </h2>

        <p className="mt-6 text-sm leading-8 text-[#405C4D] sm:text-base">
          {project.overview}
        </p>
      </div>

      <div className="mt-10 grid gap-x-10 gap-y-8 border-t border-[#D8DDCE] pt-8 md:grid-cols-2">
        {details.map((detail) => (
          <div key={detail.title}>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#063D2B]">
              {detail.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#405C4D]">
              {detail.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 border-b border-[#063D2B] pb-2 text-sm font-bold text-[#063D2B] transition-colors hover:text-[#067676]"
        >
          Discuss a similar project
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <main className="bg-[#F8F5E9]">
      {/* Projects Hero */}
      <section className="relative overflow-hidden bg-[#063D2B] py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#90FBFC]/10" />
        <div className="pointer-events-none absolute -right-10 -top-14 h-60 w-60 rounded-full border border-[#90FBFC]/10" />

        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <SectionLabel light>
            Projects & Applications
          </SectionLabel>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#F8F5E9] sm:text-5xl lg:text-6xl">
            Ideas take shape
            <span className="block text-[#69D225]">
              through engineering.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#F8F5E9]/80 sm:text-base">
            Every project begins with a product, a requirement or a new
            possibility. Explore how M9VENDS approaches customized vending
            systems across different applications and stages of development.
          </p>

          <a
            href="#project-list"
            className="mt-9 inline-flex min-h-12 items-center gap-4 bg-[#F8F5E9] px-6 py-3 text-sm font-bold text-[#063D2B] transition-colors hover:bg-[#E9EBDD]"
          >
            Explore Projects
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <SectionLabel>
              Our Development Journey
            </SectionLabel>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[#063D2B] sm:text-4xl">
              From a specific application to a wider engineering vision.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-[#405C4D] sm:text-base">
            <p>
              M9VENDS approaches vending-machine development as an
              engineering process. Each application brings its own product
              requirements, mechanical considerations and operating
              conditions.
            </p>

            <p>
              Our projects explore how mechanical systems, electronics,
              embedded controls and connected technologies can work together
              to create customized vending solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section
        id="project-list"
        className="scroll-mt-24 border-y border-[#D8DDCE] bg-[#E9EBDD] py-14"
      >
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <SectionLabel>
            Explore the Projects
          </SectionLabel>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <a
                key={project.number}
                href={`#project-${project.number}`}
                className="group border border-[#D8DDCE] bg-[#F8F5E9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#64816B]"
              >
                <span className="text-xs font-bold tracking-widest text-[#64816B]">
                  {project.number}
                </span>

                <h3 className="mt-5 text-base font-bold leading-snug text-[#063D2B]">
                  {project.name}
                </h3>

                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#64816B] transition-colors group-hover:text-[#063D2B]">
                  View project
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcases */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px] space-y-8 px-6 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <SectionLabel>
              Our Work
            </SectionLabel>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[#063D2B] sm:text-4xl">
              Engineering different possibilities.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#405C4D]">
              Each project represents a different application and development
              direction. Their statuses reflect the distinctions between
              developed work, ongoing development and concepts being explored.
            </p>
          </div>

          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}

          <p className="pt-4 text-xs leading-6 text-[#64816B]">
            Project testing details and measurable outcomes are included only
            when verified information is available.
          </p>
        </div>
      </section>

      {/* Engineering Approach */}
      <section className="bg-[#063D2B] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <div>
            <SectionLabel light>
              Our Engineering Perspective
            </SectionLabel>

            <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-[#F8F5E9] sm:text-4xl">
              Understand the product. Engineer the solution.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-[#F8F5E9]/80 sm:text-base">
              Our development approach starts by understanding what a
              particular product needs. From its dimensions and storage
              conditions to its dispensing mechanism and operating
              environment, every consideration helps shape the engineering
              direction.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#69D225] pb-2 text-sm font-bold text-[#69D225] transition-colors hover:text-[#90FBFC]"
            >
              Explore Products & Solutions
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <div className="border border-[#D8DDCE] p-8 sm:p-12 lg:p-16">
            <SectionLabel>
              Have an Idea?
            </SectionLabel>

            <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#063D2B] sm:text-4xl">
              Your next idea could become our next engineering project.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#405C4D]">
              Tell us what you want to dispense, the challenges you're
              addressing and the kind of vending experience you're imagining.
              Let's explore the possibilities together.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex min-h-12 items-center gap-4 bg-[#063D2B] px-6 py-3 text-sm font-bold text-[#F8F5E9] transition-colors hover:bg-[#0B4934]"
            >
              Discuss a Custom Solution
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}