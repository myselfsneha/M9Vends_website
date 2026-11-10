import { Link } from "react-router-dom";

const products = [
  {
    number: "01",
    name: "Semi-Automatic Vending Machine",
    category: "Freshly Prepared Food",
    status: "Developed",
    statusColor: "bg-[#E5F0E3] text-[#245C35]",
    description:
      "Our early vending machine development began with a semi-automated pani-puri vending cart. It brings together product-specific mechanical construction, motors, sensors and electronic controls to support a more consistent dispensing process.",
    highlights: [
      "Designed around the pani-puri serving process",
      "Motor-assisted mechanical operation",
      "Sensor-based electronic controls",
      "A foundation for wider vending applications",
    ],
    note:
      "Semi-automated operation involves human participation for activities such as refilling, cleaning and maintenance.",
  },
  {
    number: "02",
    name: "Fully Automated IoT-Connected Vending Machine",
    category: "Connected Vending",
    status: "In Development",
    statusColor: "bg-[#E1F1F2] text-[#075D69]",
    description:
      "The next direction in our vending development focuses on combining automated dispensing with embedded control and connected technology. The broader vision includes connectivity and software-based machine management.",
    highlights: [
      "Automated dispensing architecture",
      "Embedded electronics and control systems",
      "IoT connectivity as part of development",
      "Future direction towards multi-machine management",
    ],
    note:
      "Connectivity, cloud software and fleet-management capabilities are development directions, not claims of an already operational service.",
  },
  {
    number: "03",
    name: "Hybrid Snacks & Cold Drinks Vending Machine",
    category: "Food & Beverage",
    status: "Concept",
    statusColor: "bg-[#F3EBDD] text-[#805C25]",
    description:
      "A proposed hybrid vending concept designed to bring packaged snacks and cold beverages together in one machine. The design direction considers separate storage environments for different product requirements.",
    highlights: [
      "Two-zone vending concept",
      "Ambient storage for packaged snacks",
      "Separate refrigerated beverage compartment",
      "Product-specific storage and dispensing design",
    ],
    note:
      "This concept is subject to engineering development and technical validation.",
  },
  {
    number: "04",
    name: "Book Vending Machine",
    category: "Books & Educational Products",
    status: "Prototype / In Development",
    statusColor: "bg-[#E9EBDD] text-[#405C4D]",
    description:
      "A vending solution concept for books and educational products. Its development explores how product dimensions, storage arrangements and dispensing mechanisms can be adapted for non-food applications.",
    highlights: [
      "Designed around book dimensions and formats",
      "Product-specific storage arrangement",
      "Adaptable dispensing mechanism",
      "Potential applications in educational environments",
    ],
    note:
      "The final configuration and commercial specifications depend on the development stage and product requirements.",
  },
];

const disciplines = [
  {
    number: "01",
    title: "Mechanical Engineering",
    description:
      "Machine structures, mechanical layouts and dispensing mechanisms designed around the product.",
  },
  {
    number: "02",
    title: "Electronics & Controls",
    description:
      "Electrical components, motors and control circuits that support machine operation.",
  },
  {
    number: "03",
    title: "Embedded Systems",
    description:
      "Microcontroller-based control, sensors and programmed operating sequences.",
  },
  {
    number: "04",
    title: "IoT Connectivity",
    description:
      "Connected-machine capabilities being explored as part of the evolving product architecture.",
  },
  {
    number: "05",
    title: "Connected Software",
    description:
      "A longer-term direction towards software-supported monitoring and multi-machine management.",
  },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#64816B]">
      <span className="h-px w-8 bg-[#64816B]" />
      {children}
    </span>
  );
}

function ProductCard({ product }) {
  return (
    <article
      id={`product-${product.number}`}
      className="scroll-mt-28 border border-[#D8DDCE] bg-[#F8F5E9] p-6 sm:p-8 lg:p-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="text-xs font-bold tracking-[0.2em] text-[#64816B]">
          PRODUCT {product.number}
        </span>

        <span
          className={`inline-flex items-center px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] ${product.statusColor}`}
        >
          {product.status}
        </span>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#64816B]">
            {product.category}
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#063D2B] sm:text-4xl">
            {product.name}
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#405C4D] sm:text-base">
            {product.description}
          </p>

          <div className="mt-7 border-l-2 border-[#69D225] pl-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#063D2B]">
              Development note
            </p>
            <p className="mt-2 text-sm leading-7 text-[#647568]">
              {product.note}
            </p>
          </div>
        </div>

        <div className="bg-[#E9EBDD] p-6 sm:p-8">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#063D2B]">
            Key Highlights
          </h3>

          <ul className="mt-6 space-y-5">
            {product.highlights.map((highlight, index) => (
              <li key={highlight} className="flex gap-4">
                <span className="mt-0.5 text-xs font-bold text-[#64816B]">
                  0{index + 1}
                </span>
                <span className="text-sm leading-6 text-[#405C4D]">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#063D2B] pb-2 text-sm font-bold text-[#063D2B] transition-colors hover:text-[#067676]"
          >
            Enquire about this solution
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <main className="bg-[#F8F5E9]">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#063D2B] py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#90FBFC]/10" />
        <div className="pointer-events-none absolute -right-10 -top-14 h-60 w-60 rounded-full border border-[#90FBFC]/10" />

        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <SectionLabel>Products & Solutions</SectionLabel>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#F8F5E9] sm:text-5xl lg:text-6xl">
            Vending solutions,
            <span className="block text-[#69D225]">
              engineered around your product.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#F8F5E9]/80 sm:text-base">
            From freshly prepared food to packaged products and educational
            essentials, M9VENDS explores customized vending systems built
            around the way each product needs to be stored, handled and
            dispensed.
          </p>

          <a
            href="#our-products"
            className="mt-9 inline-flex min-h-12 items-center gap-4 bg-[#F8F5E9] px-6 py-3 text-sm font-bold text-[#063D2B] transition-colors hover:bg-[#E9EBDD]"
          >
            Explore Our Products
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[#063D2B] sm:text-4xl">
              Not every product needs the same machine.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-[#405C4D] sm:text-base">
            <p>
              Every product comes with its own requirements. Its dimensions,
              packaging, storage conditions and dispensing process all
              influence how a vending machine should be designed.
            </p>
            <p>
              That's why our approach begins with understanding the product.
              We bring mechanical design, electronics, embedded systems and
              connected software together to explore solutions that fit
              specific applications.
            </p>
          </div>
        </div>
      </section>

      {/* Product Navigation */}
      <section
        id="our-products"
        className="scroll-mt-24 border-y border-[#D8DDCE] bg-[#E9EBDD] py-14"
      >
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <SectionLabel>Explore the Range</SectionLabel>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <a
                key={product.number}
                href={`#product-${product.number}`}
                className="group border border-[#D8DDCE] bg-[#F8F5E9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#64816B]"
              >
                <span className="text-xs font-bold tracking-widest text-[#64816B]">
                  {product.number}
                </span>
                <h3 className="mt-5 text-base font-bold leading-snug text-[#063D2B]">
                  {product.name}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#64816B] transition-colors group-hover:text-[#063D2B]">
                  View details <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px] space-y-8 px-6 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <SectionLabel>Our Product Lines</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[#063D2B] sm:text-4xl">
              Different applications. One engineering mindset.
            </h2>
          </div>

          {products.map((product) => (
            <ProductCard key={product.number} product={product} />
          ))}
        </div>
      </section>

      {/* Engineering Disciplines */}
      <section className="bg-[#063D2B] py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <SectionLabel>Behind the Machines</SectionLabel>

          <div className="mt-7 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#F8F5E9] sm:text-4xl">
                Engineering disciplines working together.
              </h2>
              <p className="mt-6 text-sm leading-8 text-[#F8F5E9]/75">
                A vending system is more than its outer structure. Its
                functionality comes from the integration of multiple
                engineering disciplines, each contributing to the machine's
                design and development.
              </p>
            </div>

            <div className="divide-y divide-[#F8F5E9]/15">
              {disciplines.map((discipline) => (
                <div
                  key={discipline.number}
                  className="grid gap-3 py-6 sm:grid-cols-[55px_1fr] sm:gap-5"
                >
                  <span className="text-xs font-bold tracking-widest text-[#69D225]">
                    {discipline.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-[#F8F5E9]">
                      {discipline.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#F8F5E9]/70">
                      {discipline.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
          <div className="grid gap-10 border border-[#D8DDCE] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-14">
            <div>
              <SectionLabel>Beyond Standard Vending</SectionLabel>
              <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#063D2B] sm:text-4xl">
                Have a product that needs a different kind of vending
                solution?
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-[#405C4D]">
                Tell us about your product, its requirements and the
                experience you want to create. We can explore the engineering
                possibilities for a customized vending system around your
                application.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#063D2B] px-7 py-4 text-sm font-bold text-[#F8F5E9] transition-colors hover:bg-[#0B4934]"
            >
              Discuss Your Requirements
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}