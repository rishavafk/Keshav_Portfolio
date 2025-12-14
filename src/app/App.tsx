import { CursorParticles } from './components/cursor-particles';
import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { ResearchSection } from './components/research-section';
import { ProjectsSection } from './components/projects-section';
import { WritingSection } from './components/writing-section';
import { AchievementsSection } from './components/achievements-section';
import { LeadershipSection } from './components/leadership-section';
import { ContactSection } from './components/contact-section';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <CursorParticles />
      <Navigation />
      <HeroSection />
      <div id="research">
        <ResearchSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="writing">
        <WritingSection />
      </div>
      <div id="achievements">
        <AchievementsSection />
      </div>
      <div id="leadership">
        <LeadershipSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
