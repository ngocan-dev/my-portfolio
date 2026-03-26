import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/siteData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few highlights showing product impact, frontend architecture, and collaboration."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
