const projectTypes = [
  { type: 'WORK', label: 'Work Projects', slug: 'work' },
  { type: 'SIDE', label: 'Side Projects', slug: 'others' }
];

const skills = {
  express: { name: 'Express', logo: 'express.svg', padding: 10 },
  html5: { name: 'HTML', logo: 'html5.svg', padding: 5 },
  css3: { name: 'CSS', logo: 'css3.svg', padding: 5 },
  js: { name: 'JavaScript', logo: 'js.svg', padding: 4 },
  mongodb: { name: 'Mongo DB', logo: 'mongodb.svg', padding: 4 },
  nodejs: { name: 'Node', logo: 'nodejs.svg', padding: 4 },
  react: { name: 'React', logo: 'react.svg', showName: true, padding: 3 },
  gatsby: { name: 'Gatsby', logo: 'gatsby.svg', showName: true, padding: 0 },
  vuejs: { name: 'Vue.js', logo: 'vue.svg', showName: true, padding: 3 },
  redux: { name: 'Redux', logo: 'redux.svg', showName: true, padding: 9 },
  sass: { name: 'SASS', logo: 'sass.svg', padding: 5 },
  typescript: {
    name: 'Typescript',
    logo: 'typescript.svg',
    padding: 6,
    showName: true
  },
  jest: { name: 'Jest' },
  enzyme: { name: 'Enzyme' }
};

const linkTypes = {
  github: 'github',
  demo: 'demo'
};

const projects = {
  WORK: [
    {
      title: 'Wings Suite',
      slug: 'wings-suite',
      duration: 'Sept 2018 - June 2019',
      org: 'Sandisk (Western Digital)',
      logo: 'wings-logo.png',
      videoLink: [
        {
          link: 'https://www.youtube.com/embed/QGOiqoEyhnY?start=54&autoplay=1',
          label: 'Wings Suite walkthrough',
          videoRatio: '71.7%'
        }
      ],
      skillSet: [
        skills.react,
        skills.redux,
        skills.typescript,
        skills.html5,
        skills.css3,
        skills.nodejs,
        skills.jest,
        skills.enzyme
      ],
      description: [
        `Wings suite is an internal-use only tool for automation of processes related to firmware management and testing on storage devices. It is a one-stop solution to setup and recreate validation environment, execute device management operations, and to perform automated failure analysis including features like perform firmware management operations, executes tests, diagnostic logs (collect, decode, visualize), create and execute test cases. Its target users include firmware developers, firmware validation engineers and failure analysis engineers.`
      ],
      responsibilities: [
        `Lead the UI design team to create mockups from scratch followed by end to end development of features.`,
        `Architect a scalable UI development model for React.js with central state management using Redux.`,
        `Consuming REST APIs from the backend flask server which interacts directly with storage devices.`,
        `Writing unit tests for react components using Jest and Enzyme.`
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

module.exports = {
  projectTypes,
  skills,
  projects
};
