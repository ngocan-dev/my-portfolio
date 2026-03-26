export const profile = {
  name: 'Alex Carter',
  role: 'Senior Frontend Engineer',
  location: 'San Francisco, CA',
  email: 'hello@alexcarter.dev',
  tagline:
    'I design and build performant, accessible web experiences with React, TypeScript, and modern frontend architecture.',
  bio: 'I am a frontend engineer focused on product quality, design systems, and maintainable codebases. I enjoy leading refactors, mentoring engineers, and shipping interfaces that are both elegant and robust.',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const skills = [
  'React',
  'Vite',
  'TypeScript',
  'JavaScript (ES2023)',
  'Tailwind CSS',
  'Node.js',
  'Testing Library',
  'Storybook',
  'CI/CD',
  'Accessibility (WCAG)',
];

export const projects = [
  {
    name: 'Design System Platform',
    summary:
      'Built a shared component library and documentation platform used by 4 product teams, reducing UI inconsistencies and speeding feature delivery.',
    stack: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
    link: '#',
  },
  {
    name: 'Analytics Dashboard',
    summary:
      'Led architecture and implementation of a high-volume analytics dashboard with lazy loading, virtualization, and robust state management.',
    stack: ['React', 'Vite', 'TanStack Query', 'Charts'],
    link: '#',
  },
  {
    name: 'E-commerce Frontend Revamp',
    summary:
      'Refactored legacy pages into modular, reusable sections and improved Core Web Vitals, increasing conversion rates and reducing bounce.',
    stack: ['React', 'Tailwind CSS', 'A/B Testing'],
    link: '#',
  },
];

export const experiences = [
  {
    company: 'Northstar Labs',
    title: 'Senior Frontend Engineer',
    period: '2022 — Present',
    details:
      'Own frontend architecture and mentor engineers across multiple product squads while collaborating closely with design and backend teams.',
  },
  {
    company: 'PixelForge Studio',
    title: 'Frontend Engineer',
    period: '2019 — 2022',
    details:
      'Delivered performant web experiences and introduced testing and coding standards that improved release confidence.',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', shortLabel: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', shortLabel: 'IN' },
  { label: 'Email', href: 'mailto:hello@alexcarter.dev', shortLabel: 'EM' },
];
