const projectTypes = [
  { type: 'WORK', label: 'Work Projects', slug: 'work' },
  { type: 'SIDE', label: 'Side Projects', slug: 'others' }
];

const skills = {
  html5: { name: 'HTML5', logo: 'html5.svg', padding: 5 },
  css3: { name: 'CSS3', logo: 'css3.svg', padding: 5 },
  bootstrap: { name: 'Bootstrap', logo: 'bootstrap.svg', padding: 7 },
  sass: { name: 'SASS', logo: 'sass.svg', padding: 7 },
  js: { name: 'JavaScript', logo: 'js.svg', padding: 7 },
  es6: { name: 'ES6', logo: 'es6.svg', padding: 7 },
  typescript: {
    name: 'Typescript',
    logo: 'typescript.svg',
    padding: 7
  },

  react: { name: 'React', logo: 'react.svg', padding: 4 },
  redux: { name: 'Redux', logo: 'redux.svg', padding: 7 },
  gatsby: { name: 'Gatsby', logo: 'gatsby.svg', padding: 7 },
  nextjs: { name: 'NextJS', logo: 'nextjs.svg', padding: 6 },
  vuejs: { name: 'Vue.js', logo: 'vue.svg', padding: 8 },
  svelte: { name: 'Svelte', logo: 'svelte.svg', padding: 6 },
  material_ui: { name: 'Material UI', logo: 'material-ui.svg', padding: 9 },
  electron: { name: 'Electron', logo: 'electron.png', padding: 7 },

  nodejs: { name: 'Node', logo: 'nodejs.svg', padding: 6 },
  express: { name: 'Express', logo: 'express.svg', padding: 10 },
  golang: { name: 'Go', logo: 'golang.png', padding: 7 },
  mux: { name: 'Mux', logo: 'mux.png', padding: 4 },
  python: { name: 'Python', logo: 'python.svg', padding: 7 },
  flask: { name: 'Flask', logo: 'flask.svg', padding: 4 },
  csharp: { name: 'C#', logo: 'csharp.svg', padding: 7 },
  aspnet: { name: 'ASP.Net', logo: 'aspnet.svg', padding: 4 },
  php: { name: 'PHP', logo: 'php.svg', padding: 10 },

  mongodb: { name: 'Mongo DB', logo: 'mongodb.png', padding: 5 },
  postgres: { name: 'PostgreSQL', logo: 'postgres.svg', padding: 6 },
  mysql: { name: 'MySQL', logo: 'mysql.svg', padding: 5 },
  dynamodb: { name: 'DynamoDB', logo: 'dynamodb.svg', padding: 7 },
  firebase: { name: 'Firebase', logo: 'firebase.svg', padding: 5 },
  redis: { name: 'Redis', logo: 'redis.svg', padding: 8 },
  sqlite: { name: 'SQLite', logo: 'sqlite.svg', padding: 7 },

  nginx: { name: 'Nginx', logo: 'nginx.png', padding: 6, hideName: true },
  serverless: { name: 'Serverless', logo: 'serverless.svg', padding: 6 },
  docker: { name: 'Docker', logo: 'docker.png', padding: 5, hideName: true },
  kubernetes: { name: 'Kubernetes', logo: 'kubernetes.svg', padding: 7 },
  aws: { name: 'AWS', logo: 'aws.svg', padding: 10, hideName: true },
  gcp: { name: 'GCP', logo: 'gcloud.svg', padding: 9 },
  netlify: { name: 'Netlify', logo: 'netlify.svg', padding: 7 },
  heroku: { name: 'Heroku', logo: 'heroku.svg', padding: 6, hideName: true },
  ghpages: { name: 'Ghpages', logo: 'ghpages.svg', padding: 7 }
};

const linkTypes = {
  github: 'github',
  demo: 'demo',
  youtube: 'youtube'
};

const projects = {
  WORK: [
    {
      title: 'SkoolNet',
      slug: 'skoolnet',
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
        `SkoolNet is a CMS & Parent’s Portal for pre-school chains. SkoolNet was built from scratch as part of the digital transformation initiatives of NTUC. SkoolNet has a CMS module that allows schools to manage the content of their websites & dynamic sections like News & Events. The CMS allows them to add new items to the website and deploy a freshly generated static website to production from a web portal.`
      ],
      responsibilities: [
        `Developed the SkoolNet content management system (CMS) module from scratch using React.`,
        `Architected a static website generation & deployment platform for schools using Gatsby.`,
        `Created a reusable library of React components and deployed it in the company intranet.`,
        `Migrated 4 school websites from legacy technologies to Gatsby & helped improved their UX & SEO.`
      ]
    },
    {
      title: 'Wings Suite',
      slug: 'wings-suite',
      duration: 'Sep 2018 - Jun 2019',
      org: 'Sandisk - Western Digital',
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
        `Hired and managed a team of Frontend & QA engineers.`,
        `Architected a scalable fronted development platform using React and Redux.`,
        `Developed mock-ups and performed user-experience studies with stakeholders.`,
        `Mentored two interns on Frontend development.`,
        `Developed guidelines for CI/CD & automated unit testing for the project.`
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
    skills: [
      skills.html5,
      skills.css3,
      skills.sass,
      skills.bootstrap,
      skills.js,
      skills.es6,
      skills.typescript,
      skills.react,
      skills.redux,
      skills.vuejs,
      skills.svelte,
      skills.nextjs,
      skills.gatsby,
      skills.material_ui,
      skills.electron
    ]
  },
  {
    label: 'Backend',
    slug: 'backend',
    skills: [
      skills.nodejs,
      skills.golang,
      skills.python,
      skills.csharp,
      skills.php,
      skills.mongodb,
      skills.mysql,
      skills.postgres,
      skills.dynamodb,
      skills.firebase,
      skills.redis
    ]
  },
  {
    label: 'DevOps',
    slug: 'devops',
    skills: [
      skills.nginx,
      skills.serverless,
      skills.docker,
      skills.kubernetes,
      skills.aws,
      skills.gcp,
      skills.netlify,
      skills.heroku,
      skills.ghpages
    ]
  }
  // {
  //   label: 'Mobile Dev',
  //   slug: 'mobile',
  //   skills: [skills.gatsby, skills.nodejs]
  // }
];

module.exports = {
  projectTypes,
  allSkills,
  projects
};
