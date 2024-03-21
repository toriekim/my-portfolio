export const userData: UserData = {
  githubUsername: '@toriekim',
  name: 'Victoria Kim',
  designation: 'Software Developer',
  avatarUrl: '',
  email: 'hello@toriekim.dev',
  phoneNumber: '',
  address: 'Boston, MA',
  projects: [
    {
      title: 'Portfolio Website',
      description: `You're on it now! Inspired by the photo taken of me by photographer Alyssa Blumstein. Used Figma to wireframe. I was motivated to learn and use Next and Tailwind, because of their popularity in the indstury.`,
      link: 'https://github.com/toriekim/my-portfolio',
      type: 'Website / SPA',
      imgUrl: '',
      tags: ['Typescript', 'Next.js', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Tingle',
      description:
        'Social dating app that cultivates connections between users through selected niche interests (from a list of 150+). Features 13 distinct screen views, Firebase Auth, matching, search, chat, NUX onboarding. Team of 3.',
      link: 'https://github.com/03-cs-wockys-waywards/capstone',
      type: 'Social Media Mobile App',
      imgUrl: '/images/tingle-mockup.jpg',
      tags: ['React Native', 'Redux', 'Node.js', 'Expo', 'Firebase'],
    },
    {
      title: 'Plate Hopper',
      description:
        'A meal-kit delivery service inspired by cuisines from around the world. Features auth login, browse, persistent cart features for logged in users. Team of 4.',
      link: 'https://github.com/gs-wu-tang-lan/grace-shopper',
      type: 'Fullstack E-commerce Website',
      imgUrl: '',
      tags: ['React', 'Redux', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
    },
    {
      title: 'Envelope Budget API',
      description:
        'API that allows clients to create and manage a personal budget using envelope budgeting principles.',
      link: 'https://github.com/toriekim/envelope-budget-API',
      type: 'API',
      imgUrl: '',
      tags: ['Typescript', 'Node.js', 'Express', 'Prisma'],
    },
    {
      title: 'Problem Solving Patterns',
      description:
        'An introduction to common problem-solving patterns in data structures and algorithms following the REACTO (Read, Example, Approach, Code, Test, Optimize) approach',
      link: 'https://github.com/toriekim/problem-solving-patterns',
      type: 'Teaching Resource',
      imgUrl: '',
      tags: ['Slidev', 'Javascript', 'Vite', 'Vue', 'Markdown'],
    },
    {
      title: 'Structy Algos',
      description: `Personal work, progress, and solutions to Alvin Zablan's prep guide to data structures and algorithm interviews on Structy.net`,
      link: 'https://github.com/toriekim/structy-ds-and-algos',
      type: 'Algo Study',
      imgUrl: '',
      tags: ['Javascript', 'Node.js', 'Chai', 'Mocha'],
    },
    {
      title: 'Leetcode 75',
      description:
        'Personal progress and solutions to questions in Leetcode 75.',
      link: 'https://github.com/toriekim/leetcode-75',
      type: 'Algo Study',
      imgUrl: '',
      tags: ['Javascript'],
    },
  ],
  additionalProjects: [
    {
      title: 'Soul City Band',
      description:
        'Created Squarespace website and Brand Identity Suite for Soul City Band, including revamped logos and color palette, customized graphics, and print deliverables.',
      link: 'https://www.soulcityband.com/',
      type: 'Graphic Design - Brand, Logo & Website',
      imgUrl: '',
      tags: ['Adobe Suite', 'HTML', 'CSS', 'Javascript', 'Squarespace'],
    },
    {
      title: 'cerami(r)x',
      description:
        'Created Brand Identity Suite for cerami(r)x, including logos, color palette, customized graphics, and pottery stamp design.',
      link: '',
      type: 'Graphic Design - Brand',
      imgUrl: '',
      tags: ['Adobe Suite'],
    },
    {
      title: 'SPICE.',
      description:
        'Created customized logo for SPICE. Inspired by their silhouette.',
      link: '',
      type: 'Graphic Design - Logo',
      imgUrl: '',
      tags: ['Adobe Suite'],
    },
    {
      title: 'Karpak Audio',
      description:
        'Created Wix website & Brand Identity Suite for Karpak Audio.',
      link: '',
      type: 'Graphic Design - Brand',
      imgUrl: '',
      tags: ['Adobe Suite', 'Wix'],
    },
    {
      title: 'Karpak Audio',
      description: '',
      link: '',
      type: 'Graphic Design',
      imgUrl: '',
      tags: [],
    },
  ],
  about: {
    title: 'Software Engineer',
    description: [
      'Hi, most call me Torie! I thrive in the intersection between artistic creativity and technical solutions, translating ideas and building user-friendly, robust applications. Based in Boston, MA.',
    ],
    bio: [
      'Born in Queens, New York, and raised in Orange County, California, Seoul, South Korea, and back again to California, I became accustomed to embracing change and the new. To occupy my time, I grew up drawing,  reading, and solving puzzles of all kinds—jigsaw, sudoku, crossword, logic, etc. In 2007, I finally reached the East Coast, New England, in Boston, MA.',
      `With 3 years in tech and over 10 years of professional experience, I'm a scrappy learner who loves solving challenging problems and is creatively driven to translate solutions into robust and impactful applications.`,
    ],
    hobbies:
      'I love to solve large jigsaw puzzles, deep-dive into my favorite TV shows and movies, cook NYT Cooking recipes, craft cards with hand lettering, visit museums, and eat anything noodle-y.',
    currentProject: null,
  },
  roles: [
    {
      name: 'Fullstack Development',
      description:
        'I blend creative design with technical solutions to construct digital landscapes with intuitive user experiences and efficient backend functionality.',
      imgUrl: '/pages/code-default.jpeg',
    },
    {
      name: 'Graphic Design',
      description:
        'I craft bespoke logos, brands, and websites that encapsulate the unique personality and business identity of my clients, ensuring their brand stands out authentically.',
      imgUrl: '/pages/design-default.jpeg',
    },
    {
      name: 'Mentorship',
      description: `I find joy in teaching and guiding aspiring students, witnessing their evolution into skilled professionals in the tech industry.`,
      imgUrl: '/pages/mentor-default.jpeg',
    },
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
        'Prisma',
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
        'Mentor and teach students on technical skills and adherence to best practices while bridging the gap between academic curriculum and practical application. Conduct code reviews to provide feedback based on deliverables and rubrics.',
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
        'Drove optimal performance, functionality, and scalability across the stack for the Influence platform to harness the power of effective performance ads made by authentic content creators. Implemented key features and maintained The Plug, an influencer monetization app boasting 10k+ verified creators.',
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
      title: 'Software Engineer Fellow',
      company: 'Fullstack Academy',
      year: 'Jul 2021 - Feb 2022',
      companyLink: 'https://www.fullstackacademy.com/',
      description:
        'Mentored 2 cohorts (30+ students each) on technical skills and concepts, data structures and algorithms, and software architecture while organizing impactful workshops and modernizing the student codebase. Led as a Project Manager for 5 teams of 3-4 developers using Agile methologies during entire software development cycle.',
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
  additionalExperience: [],
  resumeUrl: '',
  socialLinks: {
    // instagram: '',
    linkedin: 'https://linkedin.com/in/victoriakim20',
    github: 'https://github.com/toriekim',
    // leetcode: '',
  },
};
