
import AboutBanner from "../components/about/AboutBanner";
import AboutStory from "../components/about/AboutStory";
import FounderTimeline from "../components/about/FounderTimeline";
import MissionVision from "../components/about/MissionVision";
import Values from "../components/about/Values";

export default function About() {
  return (
    <main>
      <AboutBanner />
      <AboutStory />
      <FounderTimeline />
      <MissionVision />
      <Values />
    </main>
  );
}