interface Project {
  title: string;
  link: string;
  imgUrl: string;
}

interface Experience {
  title: string;
  company: string;
  year: string;
  companyLink: string;
  description: string;
}

interface UserData {
  githubUsername: string;
  name: string;
  designation: string;
  avatarUrl: string;
  email: string;
  phoneNumber: string;
  address: string;
  projects: Project[];
  about: {
    title: string;
    description: string[];
    currentProject: Project | null;
  };
  experience: Experience[];
  resumeUrl: string;
  socialLinks: {
    instagram: string;
    twitter: string;
    linkedin: string;
    github: string;
    facebook: string;
    leetcode: string;
  };
}

const userData: UserData = {
  githubUsername: '',
  name: '',
  designation: '',
  avatarUrl: '',
  email: '',
  phoneNumber: '',
  address: '',
  projects: [],
  about: {
    title: '',
    description: [],
    currentProject: null,
  },
  experience: [],
  resumeUrl: '',
  socialLinks: {
    instagram: '',
    twitter: '',
    linkedin: '',
    github: '',
    facebook: '',
    leetcode: '',
  },
};

export default userData;
