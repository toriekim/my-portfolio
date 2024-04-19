type IconType = 'linkedin' | 'github' | 'mailto' | 'up';

interface Project {
  title: string;
  link: string;
  type: string;
  description: string;
  imgUrl: string;
  tags: string[];
}

interface Experience {
  title: string;
  company: string;
  year: string;
  companyLink: string;
  description: string;
  tags: string[];
}

interface Skill {
  name: string;
  list: string[];
}

interface Role {
  name: string;
  description: string;
  imgUrl: string;
}

interface UserData {
  githubUsername: string;
  name: string;
  designation: string;
  avatarUrl: string;
  email: string;
  phoneNumber: string;
  address: string;
  about: {
    title: string;
    description: string[];
    bio: string[];
    hobbies: string;
    currentProject: Project | null;
  };
  roles: Role[];
  skills: Skill[];
  experience: Experience[];
  additionalExperience?: Experience[];
  projects: Project[];
  additionalProjects?: Project[];
  resumeUrl: string;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    linkedin: string;
    github: string;
    facebook?: string;
    leetcode?: string;
  };
}
