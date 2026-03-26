const SocialLinks = ({ links }) => {
  return (
    <ul className="flex flex-wrap gap-3">
      {links.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            aria-label={item.label}
          >
            {item.shortLabel}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
