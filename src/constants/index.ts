export const colors = {
  chartreuse: '#D6E041',
  primaryGreen: '#406646',
  darkGreen: '#183620',
  darkEmerald: '#082630',

  orangeRed: '#CB3032',
  redBrown: '#9B4819',

  // yellow-tinge
  parchment1: '#FBFAF0',
  // more orange-yellow tinge
  parchment2: '#F4F1E8',

  black: '#000000',
};

export const menuItems = ['about', 'experience', 'projects', 'contact'];

export const userData: UserData = {
  githubUsername: '',
  name: 'Torie Kim',
  designation: 'Software Developer',
  avatarUrl: '',
  email: '',
  phoneNumber: '',
  address: 'Boston, MA',
  projects: [],
  about: {
    title: 'Software Engineer',
    description: [],
    currentProject: null,
  },
  roles: [
    { name: 'Fullstack Development', description: '' },
    { name: 'Graphic Design', description: '' },
    { name: 'Mentorship', description: '' },
  ],
  skills: [
    { name: 'Languages', list: ['JavaScript', 'TypeScript', 'SQL', 'Swift'] },
    {
      name: 'Frameworks',
      list: [
        'Node.js',
        'React',
        'Redux',
        'Express',
        'React Native',
        'Next.js',
        'Tailwind',
      ],
    },
    {
      name: 'Libraries',
      list: ['HTML', 'CSS', 'styled-components', 'Socket.io', 'Anime.js'],
    },
    {
      name: 'Tools',
      list: [
        'Git',
        'Heroku',
        'Webpack',
        'Babel',
        'Expo',
        'Docker',
        'Elasticsearch',
        'Retool',
      ],
    },
    {
      name: 'Database',
      list: [
        'PostgreSQL',
        'NoSQL',
        'Redis',
        'Firebase & Firestore',
        'Sequelize',
        'TypeORM',
      ],
    },
    {
      name: 'Knowledge',
      list: [
        'OOP',
        'Agile',
        'TDD (Mocha, Chai, Jasmine)',
        'APIs',
        'CI/CD',
        'MVC',
      ],
    },
  ],
  experience: [
    {
      title: 'Mentor II',
      company: 'Fullstack Academy x Amazon Career Choice',
      year: 'Jul 2023 - present',
      companyLink: 'https://www.fullstackacademy.com/',
      description:
        'Mentor and teach students, fostering improved code quality and adherence to best practices while bridging the gap between academic curriculum and practical application by sharing industry insights and experience through code reviews and feedback based on deliverables and rubrics',
      tags: ['Javascript', 'HTML & CSS', 'React', 'Express', 'SQL'],
    },
    {
      title: 'Freelance Software Engineer',
      company: 'Beat the Streets New England',
      year: 'Jun 2023 - present',
      companyLink: 'https://btsne.org/',
      description:
        'Spearhead the development of a youth athletics web app as the technical lead, guiding the implementation of features, such as student check-ins, education resource management, curriculum building, and chat functionalities.',
      tags: ['Typescript', 'React', 'Express', 'TypeORM', 'PostgreSQL'],
    },
    {
      title: 'Software Engineer',
      company: 'Liftoff Mobile (Influence)',
      year: 'Feb 2022 - Jan 2023',
      companyLink: 'https://liftoff.io/',
      description:
        'Drove optimal performance, functionality, and scalability across the stack for The Plug, an influencer monetization and advertiser marketing app boasting 20k+ verified creators, leveraging strong problem-solving skills',
      tags: [
        'Typescript',
        'React',
        'Redux',
        'Node.js',
        'Express',
        'Sequelize',
        'SQL',
        'PostgreSQL',
        'Redis',
        'ElasticSearch',
      ],
    },
    {
      title: 'Software Engineer Lead Fellow',
      company: 'Fullstack Academy',
      year: 'Jul 2021 - Feb 2022',
      companyLink: 'https://www.fullstackacademy.com/',
      description:
        'Mentored and taught 2 cohorts (30+ students each) on technical skills, computer science concepts, algorithms, software architecture, and debugging strategies while organizing impactful workshops and modernizing the student codebase. Led as a Project Manager for 5 teams of 3-4 developers using Agile methologies during entire software development cycle.',
      tags: [
        'Javascript',
        'React',
        'Redux',
        'Node.js',
        'Express',
        'PostgreSQL',
      ],
    },
  ],
  resumeUrl: '',
  socialLinks: {
    // instagram: '',
    // twitter: '',
    linkedin: 'https://linkedin.com/in/victoriakim20',
    github: 'https://github.com/toriekim',
    // facebook: '',
    // leetcode: '',
  },
};
