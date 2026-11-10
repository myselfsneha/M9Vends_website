import { Link } from "react-router-dom";

const products = [
  {
    number: "01",
    title: "Semi-Automatic Vending Machine",
    category: "FOOD VENDING",
    status: "Developed",
    statusStyle: "bg-[#E5F0E3] text-[#245C35]",
    description:
      "A product-specific vending system with the pani-puri vending cart as one of M9VENDS' first applications.",
  },
  {
    number: "02",
    title: "Fully Automated IoT-Connected Vending Machine",
    category: "CONNECTED VENDING",
    status: "In Development",
    statusStyle: "bg-[#E1F1F2] text-[#075D69]",
    description:
      "An evolving vending platform exploring automated dispensing, embedded controls, and connected machine management.",
  },
  {
    number: "03",
    title: "Hybrid Snacks & Cold Drinks Vending Machine",
    category: "HYBRID VENDING",
    status: "Concept",
    statusStyle: "bg-[#F3EBDD] text-[#805C25]",
    description:
      "A proposed combination of ambient snack storage and a separately refrigerated beverage compartment.",
  },
  {
    number: "04",
    title: "Book Vending Machine",
    category: "BOOK DISPENSING",
    status: "Prototype / In Development",
    statusStyle: "bg-[#E9EBDD] text-[#405C4D]",
    description:
      "A vending concept designed to make books and educational products accessible through automated dispensing.",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="bg-[#F8F5E9] py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64816B]">
              Designed for Practical Applications
            </span>

            <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#063D2B] sm:text-4xl lg:text-5xl">
              Our Products
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#53675A] sm:text-base">
              From product-specific vending machines to connected dispensing
              concepts, we explore customized solutions for different product
              requirements.
            </p>
          </div>

          <Link
            to="/products"
            className="hidden items-center gap-3 border-b border-[#64816B] pb-2 text-sm font-semibold text-[#063D2B] transition-colors hover:border-[#063D2B] sm:inline-flex"
          >
            Explore All Products
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Product Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.number}
              className="group flex flex-col overflow-hidden border border-[#E1E3D8] bg-[#FDFCF7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(6,61,43,0.08)]"
            >
              {/* Visual Header */}
              <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-[#E9EBDD]">
                <div className="absolute inset-5 border border-[#C8D2C2] transition-all duration-500 group-hover:inset-4 group-hover:border-[#64816B]" />

                <div className="relative flex flex-col items-center gap-4 px-5 text-center">
                  <span className="text-[10px] font-semibold tracking-[0.24em] text-[#64816B]">
                    M9VENDS
                  </span>

                  <div className="h-px w-12 bg-[#64816B]" />

                  <span className="text-lg font-medium tracking-tight text-[#063D2B] sm:text-xl">
                    {product.title}
                  </span>

                  <span className="text-[9px] font-semibold tracking-[0.2em] text-[#64816B]">
                    {product.category}
                  </span>
                </div>

                <span className="absolute right-5 top-5 text-xs font-semibold text-[#64816B]">
                  {product.number}
                </span>
              </div>

              {/* Product Information */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div>
                  <span
                    className={`inline-flex border border-transparent px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] ${product.statusStyle}`}
                  >
                    {product.status}
                  </span>

                  <h3 className="mt-4 text-base font-semibold leading-snug text-[#063D2B] sm:text-lg">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#53675A]">
                    {product.description}
                  </p>
                </div>

                <Link
                  to="/products"
                  aria-label={`Explore ${product.title}`}
                  className="mt-auto inline-flex w-fit items-center gap-3 border-b border-[#64816B] pb-2 pt-6 text-sm font-semibold text-[#063D2B] transition-colors hover:border-[#026BA8] hover:text-[#026BA8]"
                >
                  Explore Product
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Link */}
        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-3 border-b border-[#64816B] pb-2 text-sm font-semibold text-[#063D2B] sm:hidden"
        >
          Explore All Products
          <span aria-hidden="true">↗</span>
        </Link>

      </div>
    </section>
  );
}