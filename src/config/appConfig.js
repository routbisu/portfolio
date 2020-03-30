export const menuItems = [
  {
    key: 'PROJECTS',
    label: 'Projects',
    link: '/projects/work/wings-suite'
  },
  { key: 'SKILLS', label: 'Skills', link: '/skills' },
  { key: 'ABOUT', label: 'About', link: '/about' },
  { key: 'BLOG', label: 'Blog', link: '/blog' },
  { key: 'CONTACT', label: 'Contact', link: '/contact' }
];

export const projectTypes = [
  { type: 'WORK', label: 'Work Projects', slug: 'work' },
  { type: 'SIDE', label: 'Side Projects', slug: 'others' }
];

export const projects = {
  WORK: [
    { title: 'Wings Suite', slug: 'wings-suite' },
    { title: 'XInsure', slug: 'xinsure' },
    { title: 'Instalment Billing', slug: 'instalment-billing' },
    { title: 'Obfuscation Engine', slug: 'obfuscation-engine' },
    { title: 'ErrorDumps', slug: 'error-dumps', external: true }
  ],
  SIDE: [
    { title: 'Suppr', slug: 'suppr' },
    { title: 'Baadi', slug: 'baadi' },
    { title: 'React Calendar', slug: 'react-calendar' },
    { title: 'Movie Hunt', slug: 'movie-hunt' }
  ]
};
