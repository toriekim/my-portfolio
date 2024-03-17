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
      company: 'Fullstack Academy',
      year: 'Aug 2023 - current',
      companyLink: 'https://www.fullstackacademy.com/',
      description: '',
      tags: ['Typescript', 'React', 'Redux', 'Express'],
    },
    {
      title: 'Software Engineer',
      company: 'Liftoff Mobile',
      year: 'Feb 2022 - Jan 2023',
      companyLink: 'https://liftoff.io/influence/',
      description: '',
      tags: ['Typescript', 'React', 'Redux', 'Express'],
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
