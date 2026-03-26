import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/siteData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Experience" title="Career timeline" />
        <ol className="space-y-4">
          {experiences.map((item) => (
            <li key={item.company} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm font-medium uppercase tracking-wide text-cyan-400">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-slate-300">{item.company}</p>
              <p className="mt-3 text-slate-300">{item.details}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default ExperienceSection;
