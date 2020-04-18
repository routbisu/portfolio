const projectTypes = [
  { type: 'WORK', label: 'Work Projects', slug: 'work' },
  { type: 'SIDE', label: 'Side Projects', slug: 'others' }
];

const skills = {
  react: { name: 'React', slug: 'react' },
  redux: { name: 'Redux', slug: 'redux' },
  html: { name: 'HTML5', slug: 'html5' },
  sass: { name: 'SASS', slug: 'sass' },
  mongo_db: { name: 'Mongo DB', slug: 'mongo-db' }
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
      showcase: ['Device manager home', '', 'Test output', ''],
      skillSet: [skills.react, skills.html, skills.sass],
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
