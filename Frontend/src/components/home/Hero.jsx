
import brandFilm from "../../assets/videos/M9VENDS_Brand_Film_Final.mov";
import logo from "../../assets/images/M9VENDS_logo_transparent.png";
import { Link } from "react-router-dom";

const highlights = [
  "Reliable Engineering",
  "Smart Technology",
  "Product-Led Design",
  "Hygiene-First Design",
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#F8F5E9]">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pt-14">
        <div className="relative isolate min-h-[520px] overflow-hidden rounded-sm bg-[#063D2B] sm:min-h-[600px] lg:min-h-[680px]">

          {/* Background Video */}
          <video
            className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="M9VENDS brand film"
          >
            <source src={brandFilm} />
            Your browser does not support embedded videos.
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063D2B]/45 via-[#063D2B]/5 to-transparent" />

          {/* Brand Logo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-8 right-8 z-[8] flex h-24 w-24 items-center justify-center border border-white/25 bg-[#063D2B]/60 p-3 shadow-lg backdrop-blur-sm sm:bottom-12 sm:right-12 sm:h-28 sm:w-28 lg:bottom-14 lg:right-14 lg:h-32 lg:w-32"
          >
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          {/* Hero Content */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start p-6 pb-9 sm:p-10 sm:pb-12 lg:p-16 lg:pb-16">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F8F5E9] sm:text-xs">
              M9VENDS · Custom Vending & Automation
            </p>

            <h1 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              Engineering the Future of Automated Vending.
            </h1>

            <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed tracking-wide text-[#F8F5E9] drop-shadow sm:text-base lg:text-lg">
              Custom Vending. Intelligent Automation. Built Around Your Product.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex min-h-12 items-center gap-4 bg-[#F8F5E9] px-6 py-3 text-sm font-semibold text-[#063D2B] transition-colors duration-300 hover:bg-[#E7EBDD]"
            >
              Explore Products
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* Core Highlights */}
        <div className="mt-8 border-y border-[#D8DDCE] py-6 sm:mt-10">
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 lg:border-r lg:border-[#D8DDCE] lg:last:border-r-0 lg:pl-5 lg:first:pl-0"
              >
                <span className="text-xs font-semibold text-[#64816B]">
                  0{index + 1}
                </span>
                <span className="text-sm font-medium tracking-tight text-[#063D2B]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}