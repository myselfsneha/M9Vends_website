import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/M9VENDS_logo_transparent.png";

const navigationLinks = [
  { label: "Home", path: "/", end: true },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Projects", path: "/projects" },
  { label: "Team", path: "/team" },
  { label: "Careers", path: "/careers" },
  { label: "Support", path: "/support" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-sm font-bold transition-colors duration-200 ${
      isActive
        ? "text-[#063D2B] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#69D225]"
        : "text-[#405C4D] hover:text-[#067676]"
    }`;

  const quoteClass =
    "inline-flex min-h-[46px] items-center justify-center gap-3 bg-[#063D2B] px-5 text-sm font-extrabold text-[#F8F5E9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B4934] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#69D225] focus-visible:ring-offset-2";

  const mobileLinkClass = ({ isActive }) =>
    `py-2 text-sm font-bold transition-colors ${
      isActive
        ? "text-[#063D2B]"
        : "text-[#405C4D] hover:text-[#067676]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8DDCE] bg-[#F8F5E9]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="M9VENDS home"
        >
          <img
            src={logo}
            alt="M9VENDS logo"
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {navigationLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link to="/contact" className="hidden shrink-0 lg:inline-flex">
          <span className={quoteClass}>
            Discuss a Custom Solution
            <span aria-hidden="true">↗</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-[#063D2B] transition-colors hover:bg-[#E9EBDD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#067676] lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-[#D8DDCE] bg-[#F8F5E9] px-6 py-5 shadow-lg shadow-[#063D2B]/5 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className={`${quoteClass} mt-2 w-full`}
            >
              Discuss a Custom Solution
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}