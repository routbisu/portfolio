const projectTypes = [
  { type: 'WORK', label: 'Work Projects', slug: 'work' },
  { type: 'SIDE', label: 'Side Projects', slug: 'others' }
];

const skills = {
  express: { name: 'Express', logo: 'express.svg', padding: 10 },
  html5: { name: 'HTML5', logo: 'html5.svg', padding: 5 },
  css3: { name: 'CSS3', logo: 'css3.svg', padding: 5 },
  js: { name: 'JavaScript', logo: 'js.svg', padding: 4 },
  mongodb: { name: 'Mongo DB', logo: 'mongodb.svg', padding: 4 },
  nodejs: { name: 'Node', logo: 'nodejs.svg', padding: 4 },
  react: { name: 'React', logo: 'react.svg', padding: 3 },
  material_ui: { name: 'Material UI', logo: 'material-ui.svg', padding: 8 },
  electron: { name: 'Electron', logo: 'electron.png', padding: 6 },
  gatsby: { name: 'Gatsby', logo: 'gatsby.svg', padding: 4 },
  vuejs: { name: 'Vue.js', logo: 'vue.svg', padding: 3 },
  redux: { name: 'Redux', logo: 'redux.svg', padding: 9 },
  sass: { name: 'SASS', logo: 'sass.svg', padding: 5 },
  typescript: {
    name: 'Typescript',
    logo: 'typescript.svg',
    padding: 8
  }
};

const linkTypes = {
  github: 'github',
  demo: 'demo',
  youtube: 'youtube'
};

const projects = {
  WORK: [
    {
      title: 'NFC Websites Platform',
      slug: 'nfc-websites-platform',
      duration: 'June 2019 - Present',
      org: 'NTUC Enterprise Digital, Singapore',
      skillSet: [
        skills.react,
        skills.redux,
        skills.gatsby,
        skills.material_ui,
        skills.typescript,
        skills.html5,
        skills.css3,
        skills.nodejs
      ],
      description: [
        `Wings Suite is an internal product for automation of processes related to firmware management & testing for storage devices. It enables firmware engineers to test storage devices from a web based interface in contrast to the existing system where they use command line tools to run these tests. Wings also allows them to save test suites, decode test results, manage properties of storage devices and perform failure analysis all from a user-friendly web portal.`
      ],
      responsibilities: [
        `Hired and managed a small team of frontend engineers & QA engineers.`,
        `Architected a scalable fronted development platform using React and Redux.`,
        `Developed mockups and performed user-experience studies with stakeholders.`,
        `Mentored two interns & trained them on Frontend development principles.`,
        `Developed guidlines for CI/CD & automated unit testing for the project.`
      ]
    },
    {
      title: 'Wings Suite',
      slug: 'wings-suite',
      duration: 'Sept 2018 - June 2019',
      org: 'Sandisk (Western Digital)',
      logo: 'wings-logo.png',
      videoLink: [
        {
          link:
            'https://www.youtube.com/embed/QGOiqoEyhnY?start=54&autoplay=1&controls=0',
          label: 'Wings Suite walkthrough',
          videoRatio: '71.6%',
          hideInfo: true,
          external: {
            link: 'https://www.youtube.com/watch?v=QGOiqoEyhnY',
            label: 'Watch on YouTube',
            type: linkTypes.youtube
          }
        }
      ],
      skillSet: [
        skills.react,
        skills.redux,
        skills.typescript,
        skills.html5,
        skills.css3,
        skills.nodejs,
        skills.electron
      ],
      description: [
        `Wings Suite is an internal product for automation of processes related to firmware management & testing for storage devices. It enables firmware engineers to test storage devices from a web based interface in contrast to the existing system where they use command line tools to run these tests. Wings also allows them to save test suites, decode test results, manage properties of storage devices and perform failure analysis all from a user-friendly web portal.`
      ],
      responsibilities: [
        `Hired and managed a small team of frontend engineers & QA engineers.`,
        `Architected a scalable fronted development platform using React and Redux.`,
        `Developed mockups and performed user-experience studies with stakeholders.`,
        `Mentored two interns & trained them on Frontend development principles.`,
        `Developed guidlines for CI/CD & automated unit testing for the project.`
      ]
    },
    { title: 'XInsure', slug: 'xinsure' },
    { title: 'Instalment Billing', slug: 'instalment-billing' },
    { title: 'Obfuscation Engine', slug: 'obfuscation-engine' },
    { title: 'ErrorDumps', slug: 'error-dumps' }
  ],
  SIDE: [
    { title: 'Suppr', slug: 'suppr' },
    { title: 'Baadi', slug: 'baadi' },
    {
      title: 'Node File Logger',
      slug: 'node-file-logger',
      links: [
        { url: '', type: linkTypes.github },
        { url: '', type: linkTypes.demo }
      ]
    },
    {
      title: 'React Calendar',
      slug: 'https://github.com/routbisu/react-calendar',
      external: true
    },
    { title: 'Movie Hunt', slug: 'movie-hunt' }
  ]
};

const allSkills = [
  { label: 'All Skills', slug: '' },
  {
    label: 'Frontend',
    slug: 'frontend',
    skills: [skills.react, skills.redux, skills.html5, skills.css3]
  },
  {
    label: 'Backend',
    slug: 'backend',
    skills: [skills.gatsby, skills.nodejs]
  },
  {
    label: 'Mobile Dev',
    slug: 'mobile',
    skills: [skills.gatsby, skills.nodejs]
  },
  { label: 'DevOps', slug: 'devops', skills: [skills.gatsby, skills.nodejs] }
];

module.exports = {
  projectTypes,
  allSkills,
  projects
};
