import Project from '@/components/Project';
import { userData } from '@/constants/userData';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[60px] py-[100px]">
      <h2 className="text-center font-display text-5xl font-bold leading-[60px]">
        Projects
      </h2>
      <div className="flex w-full flex-col gap-10">
        {/* <h3 className="w-full self-start border-b-[1.5px] border-primaryGreen  border-opacity-30 pb-2 font-display text-4xl font-bold dark:border-yellowParchment dark:border-opacity-20">
          Coding
        </h3> */}
        <div className="row flex flex-wrap items-start justify-evenly gap-[60px]">
          {userData.projects.map((project, idx) => (
            <Project key={`${project.title}-${idx}`} project={project} />
          ))}
        </div>
      </div>
      {/* <div className="flex w-full flex-col gap-10">
        <h3 className="w-full self-start border-b-[1.5px] border-primaryGreen  border-opacity-30 pb-2 font-display text-4xl font-bold dark:border-yellowParchment dark:border-opacity-20">
          Design
        </h3>
        <div className="row flex flex-wrap items-start justify-evenly gap-[60px]"></div>
      </div> */}
    </div>
  );
};

export default ProjectsPage;
