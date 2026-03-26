import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/siteData';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="About" title="Engineer profile" />
        <div className="grid gap-8 rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:grid-cols-2">
          <p className="text-slate-300">{profile.bio}</p>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-400">Role</dt>
              <dd className="text-lg font-medium text-slate-100">{profile.role}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-400">Location</dt>
              <dd className="text-lg font-medium text-slate-100">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-400">Email</dt>
              <dd>
                <a className="text-lg font-medium text-cyan-400 hover:text-cyan-300" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
