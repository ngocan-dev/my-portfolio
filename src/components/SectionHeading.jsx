const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <header className="mb-8 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-slate-300">{description}</p> : null}
    </header>
  );
};

export default SectionHeading;
