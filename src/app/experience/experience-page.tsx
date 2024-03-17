import { userData } from '@/constants';
import Experience from '@/components/Experience';

const ExperiencePage = () => {
  return (
    <div className="py-12">
      <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-2.5">
        <h2 className="font-display text-5xl font-bold leading-[3rem]">
          Experience
        </h2>
        <div className="flex py-10 sm:pl-[25vw]">
          <div className="flex flex-col items-start gap-12 dark:border-yellowParchment dark:border-opacity-20 sm:border-l-[1.5px] sm:border-primaryGreen sm:border-opacity-30 sm:pl-[75px]">
            {/* Experience */}
            {userData.experience.map((exp, idx) => (
              <Experience key={exp.company} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
