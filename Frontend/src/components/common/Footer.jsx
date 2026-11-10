import { Link } from "react-router-dom";
import logo from "../../assets/images/M9VENDS_logo_transparent.png";

const companyLinks = [
  { label: "About Us", path: "/about" },
  { label: "Our Team", path: "/team" },
  { label: "Careers", path: "/careers" },
];

const exploreLinks = [
  { label: "Products & Solutions", path: "/products" },
  { label: "Our Projects", path: "/projects" },
];

const supportLinks = [
  { label: "Help & Support", path: "/support" },
  { label: "Contact Us", path: "/contact" },
];

const footerLinkClass =
  "text-sm font-medium text-[#E0EAE3] transition-colors duration-200 hover:text-[#A2EE29] focus-visible:text-[#A2EE29] focus-visible:outline-none";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#063D2B] text-[#F8F5E9]">
      <div className="h-[2px] w-full bg-gradient-to-r from-[#067676] via-[#69D225] to-[#11EBEF]" />

      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20">

        {/* Main CTA */}
        <div className="mb-16 flex flex-col gap-7 border-b border-[#F8F5E9]/20 pb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#A2EE29]">
              Let's build something meaningful
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-[#F8F5E9] sm:text-5xl lg:text-6xl">
              Your Product.
              <span className="block text-[#A2EE29]">
                Our Engineering.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm font-medium leading-7 text-[#E0EAE3] sm:text-base">
              Have a product, requirement or idea that needs a customized
              vending solution? Let's explore what's possible.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-5 bg-[#A2EE29] px-7 text-sm font-extrabold text-[#063D2B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8F5E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2EE29] focus-visible:ring-offset-2 focus-visible:ring-offset-[#063D2B]"
          >
            Discuss a Custom Solution
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">

          {/* Brand */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2EE29]"
              aria-label="M9VENDS home"
            >
              <img
                src={logo}
                alt="M9VENDS logo"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 text-sm font-medium leading-7 text-[#D8DDCE]">
              An engineering-led company developing customized vending
              machines and intelligent automated dispensing systems
              through mechanical engineering, electronics and software.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#A2EE29]">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#A2EE29]">
              Explore
            </h3>

            <ul className="space-y-4">
              {exploreLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#A2EE29]">
              Support
            </h3>

            <ul className="space-y-4">
              {supportLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#F8F5E9]/20 pt-7 text-xs font-medium text-[#D8DDCE] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} M9VENDS. All rights reserved.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-[#A2EE29] focus-visible:text-[#A2EE29] focus-visible:outline-none"
          >
            Start a conversation
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}