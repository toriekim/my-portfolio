import Landing from '@/components/Landing';
import RolesPage from './experience/roles-page';
import SkillsPage from './experience/skills-page';
import ExperiencePage from './experience/experience-page';
import ProjectsPage from './projects/projects-page';
import ContactPage from './contact/contact-page';
import '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div className="mt-[80px] py-12 md:py-28">
      <Landing />
      <RolesPage />
      <SkillsPage />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};

export default HomePage;
