import Badge from './Badge';

const ProjectCard = ({ name, summary, stack, link }) => {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="mt-3 text-slate-300">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <a className="mt-5 inline-flex text-sm font-semibold text-cyan-400 hover:text-cyan-300" href={link}>
        View case study →
      </a>
    </article>
  );
};

export default ProjectCard;
