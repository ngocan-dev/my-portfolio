import Container from '../components/Container';
import SocialLinks from '../components/SocialLinks';
import { profile, socialLinks } from '../data/siteData';

const HeroSection = () => {
  return (
    <section className="border-b border-slate-800 py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">{profile.role}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">{profile.name}</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#projects" className="rounded-md bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
            View Projects
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-md border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
            Contact Me
          </a>
        </div>
        <div className="mt-8">
          <SocialLinks links={socialLinks} />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
