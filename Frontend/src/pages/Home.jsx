
import Hero from "../components/home/Hero";
import ProjectsPreview from "../components/home/ProjectsPreview";
import Solutions from "../components/home/Solutions";
import WhyM9Vends from "../components/home/WhyM9Vends";
import Collaboration from "../components/home/Collaboration";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Product Showcase */}
      <ProjectsPreview />

      {/* 03 — Technology & Engineering */}
      <Solutions />

      {/* 04 — How It Works */}
      <WhyM9Vends />

      {/* 05 — Trust & Credibility */}
      <Collaboration />

      {/* 06 — Final CTA */}
      <FinalCTA />
    </>
  );
}