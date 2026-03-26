import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/siteData';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something meaningful"
            description="Open to senior frontend opportunities, consulting, and product collaborations."
          />
          <a
            className="inline-flex rounded-md bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
