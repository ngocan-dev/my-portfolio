import Container from './components/Container';
import { navLinks, profile } from './data/siteData';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#" className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            {profile.name}
          </a>
          <nav>
            <ul className="hidden items-center gap-5 md:flex">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a className="text-sm text-slate-300 transition hover:text-cyan-300" href={`#${link.id}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="border-t border-slate-800 py-6">
        <Container>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default App;
