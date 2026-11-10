import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Projects from "../pages/Projects";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import HelpDesk from "../pages/Help-Term-Policy";
import TeamInfo from "../pages/TeamInfo";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Loader from "../components/common/Loader";

function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#F8F5E9] px-6 py-20 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#067676]">
          Error 404
        </p>

        <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-[#063D2B] sm:text-7xl">
          Page not found.
        </h1>

        <p className="mt-5 text-base font-medium leading-7 text-[#405C4D]">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center bg-[#063D2B] px-8 py-4 text-sm font-extrabold text-[#F8F5E9] transition-colors duration-300 hover:bg-[#0B4934] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#69D225] focus-visible:ring-offset-2"
        >
          Back to Home →
        </Link>
      </div>
    </main>
  );
}

function AppLayout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Initial branded loading screen
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  // Prevent the browser from restoring an old scroll position
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  // Handle normal route navigation and hash navigation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const behavior = prefersReducedMotion ? "auto" : "smooth";

    const scrollToDestination = () => {
      if (location.hash) {
        let targetId;

        try {
          targetId = decodeURIComponent(location.hash.slice(1));
        } catch {
          targetId = location.hash.slice(1);
        }

        const target = document.getElementById(targetId);

        if (target) {
          const targetPosition =
            target.getBoundingClientRect().top + window.scrollY - 90;

          window.scrollTo({
            top: Math.max(0, targetPosition),
            left: 0,
            behavior,
          });

          return;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior,
      });
    };

    const animationFrame = window.requestAnimationFrame(
      scrollToDestination
    );

    return () => window.cancelAnimationFrame(animationFrame);
  }, [location.pathname, location.hash]);

  // Reveal page sections as they enter the viewport
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".m9-route-content section"
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      sections.forEach((section) => {
        section.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    sections.forEach((section) => {
      section.classList.add("m9-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="m9-route-main flex-1">
        <div
          key={location.pathname}
          className="m9-route-content m9-page-transition"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<HelpDesk />} />
            <Route path="/helpdesk" element={<HelpDesk />} />
            <Route path="/team" element={<TeamInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />

      {isLoading && (
        <div
          className="fixed inset-0 z-[100]"
          role="status"
          aria-label="Loading M9VENDS website"
        >
          <Loader />
        </div>
      )}
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}