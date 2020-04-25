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

  angular: { name: 'Angular', logo: 'angular.svg', padding: 8 },
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
  sqlserver: { name: 'SQL Server', logo: 'sqlserver.svg', padding: 10 },
  fxchart: { name: 'FX Chart', logo: 'fxchart.svg', padding: 5 },

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
      title: 'Website CMS',
      slug: 'website-cms',
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
        `This is a CMS & Parent’s Portal for pre-school chains. This was built from scratch as part of the digital transformation initiatives of the company. It has a CMS module that allows schools to manage the content of their websites & dynamic sections like News & Events. The CMS allows them to add new items to the website and deploy a freshly generated static website to production from a web portal.`
      ],
      responsibilities: [
        `Developed the Content Management System (CMS) module from scratch using React.`,
        `Architected a static website generation & deployment platform for schools using Gatsby.`,
        `Created a reusable library of React components and deployed it in the company intranet.`,
        `Migrated 4 school websites from legacy technologies to Gatsby & helped improved their UX & SEO.`
      ],
      videoLink: [
        {
          link:
            'https://www.youtube.com/embed/i6awlP9YGp4?autoplay=1&controls=0',
          label: 'CMS System walkthrough',
          videoRatio: '66.4%',
          hideInfo: true,
          external: {
            link:
              'https://www.youtube.com/watch?v=i6awlP9YGp4&feature=youtu.be',
            label: 'Watch on YouTube',
            type: linkTypes.youtube
          }
        }
      ]
    },
    {
      title: 'Wings Suite',
      slug: 'wings-suite',
      duration: 'Sep 2018 - Jun 2019',
      org: 'Sandisk - Western Digital',
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
        `Facilitated technical planning & helped break down features into technical tasks.`,
        `Developed mock-ups and performed user-experience studies with stakeholders.`,
        `Mentored two interns on Frontend development.`,
        `Developed guidelines for CI/CD & automated unit testing for the project.`
      ]
    },
    {
      title: 'XInsure',
      slug: 'xinsure',
      duration: 'May 2017 - Sep 2018',
      org: 'Xceedance Consulting',
      description: [
        `XInsure is a core business insurance SAAS product for insurance companies, brokers and re-insurers. It is a comprehensive software suite that has several modules like Rule Engine, User Management, Party Management, Question Engine etc. It is an end-to-end, modular, core policy administration suite for the life insurance, annuities, savings, pension and medical markets.`
      ],
      responsibilities: [
        `Implemented core business modules for the product.`,
        `Wrote React components and services for performing CRUD operations.`,
        `Wrote unit tests for JavaScript code using Jest.`,
        `Developed API endpoints using Node & Express.`
      ],
      skillSet: [
        skills.react,
        skills.redux,
        skills.html5,
        skills.css3,
        skills.nodejs,
        skills.mongodb,
        skills.electron,
        skills.docker,
        skills.aws
      ],
      videoLink: [
        {
          link:
            'https://www.youtube.com/embed/NyiZyyVV1RY?autoplay=1&controls=0',
          label: 'XInsure walkthrough',
          videoRatio: '64.2%',
          hideInfo: true,
          external: {
            link:
              'https://www.youtube.com/watch?v=NyiZyyVV1RY&feature=youtu.be',
            label: 'Watch on YouTube',
            type: linkTypes.youtube
          }
        }
      ]
    },
    {
      title: 'Installment Billing Portal',
      slug: 'installment-billing-portal',
      duration: 'Nov 2016 - May 2017',
      org: 'Xceedance Consulting',
      description: [
        `This portal for an insurance company allows customers to pay their insurance premium in interest free EMIs. The target users for this portal are - customers and brokers. They can update customer billing and contact details, upgrade or renew their policy online, cancel their policy, create claim requests etc. The portal also allows generation of several kinds of reports like Broker Fee report, Notifications report etc.`
      ],
      responsibilities: [
        `Worked with UX team to write HTML code for the web portal.`,
        `Created Angular components & services for the portal to consume API end points.`,
        `Built web APIs using Node & Express.`,
        `Configured a continuous deployment environment on Jenkins for backend deployment.`
      ],
      skillSet: [
        skills.angular,
        skills.html5,
        skills.css3,
        skills.nodejs,
        skills.mysql
      ]
    },
    {
      title: 'TDM System',
      slug: 'obfuscation-engine',
      duration: 'Feb 2016 - Aug 2017',
      org: 'Emids Technologies',
      description: [
        `Test Data Management is an obfuscation engine & test data generation framework for a large hospital revenue cycle management company. Users can generate huge amounts of valid obfuscated test data from production data to protect personal information of customers. There is a simple web portal that allows to manage the generation & deployment of the test data to test environments for developers to test.`
      ],
      responsibilities: [
        `Contributed to the solution design and database architecture design.`,
        `Developed Stored Procedures & functions on SQL Server, to generate obfuscated data`,
        `Worked with the QA team for end-to-end testing of the developed modules & procedures.`
      ],
      skillSet: [
        skills.angular,
        skills.html5,
        skills.css3,
        skills.csharp,
        skills.aspnet,
        skills.sqlserver
      ],
      showcase: [{ label: 'TDM Portal' }]
    },
    {
      title: 'ErrorDumps',
      slug: 'errordumps',
      duration: 'Feb 2015 - Jan 2016',
      org: 'Infosys Limited',
      description: [
        `Errordumps is a web-based log processing tool that helps take out relevant insights and analytics from logs generated from a Mainframe batch processing queue. It keeps track of how issues were fixed and suggests recommendation when similar issues appear in the future.`
      ],
      responsibilities: [
        `Lead the development team consisting of mainframe engineers & frontend developers.`,
        `Created a web application from scratch using PHP & jQuery.`,
        `Wrote a persistence layer in SQL Server.`,
        `Developed web APIs using C# & ASP.Net MVC`
      ],
      skillSet: [
        skills.php,
        skills.js,
        skills.html5,
        skills.css3,
        skills.csharp,
        skills.aspnet,
        skills.sqlserver
      ],
      showcase: [
        { label: 'Errordumps Portal' },
        { label: 'Analysing log output from Mainframe application' },
        { label: 'Recommendation engine' }
      ]
    },
    {
      title: 'Energy Manager Suite',
      slug: 'energy-manager-suite',
      duration: 'May 2012 - Jan 2015',
      org: 'Infosys Limited',
      description: [
        `The Energy Manager Suite of tools is a web-based application that helps to monitor, analyze and report energy usage. It had three major modules – Energy manager, Cost Manager & Bill Manager. This project was about maintaining & enhancing legacy code and migrating it to newer technologies.`
      ],
      responsibilities: [
        `Developed charts for the energy manager website using chart FX.`,
        `Worked with the UX team to develop pixel perfect HTML pages for the web portal.`,
        `Developed web APIs using C# & ASP.Net MVC.`
      ],
      skillSet: [
        skills.csharp,
        skills.sqlserver,
        skills.aspnet,
        skills.js,
        skills.fxchart
      ]
    }
  ],
  SIDE: [
    {
      title: 'Suppr',
      slug: 'suppr',
      duration: 'Feb 2019 - Dec 2019',
      description: [
        `Suppr is an order management system, designed for any kind of restaurant, food court, hawker center or literally any food joint that has access to a tablet device or computer.`,
        `I have been to several restaurants where the number of waiters is not sufficient for the number of customers that comes. And hiring more waiters means adding to the operational costs of the restaurant. A lot of times customers have to wait for the waiter to come to take their order, and if they want to make changes to the order, they have to call the waiter again and Wait for him to come. When they are done with their meal and want to request the cheque, they have to call for the waiter again.`,
        `What Suppr is allows automating the ordering process by taking the presence of the waiter out of the equation, enabling customers to place orders directly with the kitchen, without the need of installing an app. They can do it right from their phone by scanning a unique QR code. What this means for restaurants is improved table utilization, better customer experience and they also save money because they don’t need to hire as many waiters as before. So, I will show you how this is done in this short demo.`
      ],
      skillSet: [
        skills.react,
        skills.redux,
        skills.html5,
        skills.css3,
        skills.nodejs,
        skills.mongodb,
        skills.firebase,
        skills.heroku
      ],
      videoLink: [
        {
          link: 'https://www.youtube.com/embed/ApaV2N0-3Rg',
          label: 'Suppr walkthrough',
          videoRatio: '62.6%',
          hideInfo: true,
          external: {
            link: 'https://www.youtube.com/watch?v=ApaV2N0-3Rg',
            label: 'Watch on YouTube',
            type: linkTypes.youtube
          }
        }
      ]
    },
    {
      title: 'Node File Logger',
      slug: 'https://www.npmjs.com/package/node-file-logger',
      external: true
    },
    {
      title: 'React Calendar',
      slug: 'https://github.com/routbisu/react-calendar',
      external: true
    }
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
      skills.angular,
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
