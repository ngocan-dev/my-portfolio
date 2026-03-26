import Badge from '../components/Badge';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/siteData';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to ship quickly and safely"
          description="A practical stack focused on performance, accessibility, and maintainability."
        />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
