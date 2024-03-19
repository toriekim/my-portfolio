import Project from '@/components/Project';
import { userData } from '@/constants';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[60px] py-[100px]">
      <h2 className="text-center font-display text-5xl font-bold leading-[60px]">
        Projects
      </h2>
      <div className="row flex flex-wrap items-center justify-evenly gap-[60px]">
        {userData.projects.map((project, idx) => (
          <Project key={`${project.title}-${idx}`} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
