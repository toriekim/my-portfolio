import Skill from '@/components/Skill';
import { userData } from '@/constants';

const Skills = () => {
  return (
    <>
      <div className="py-12">
        <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-2.5">
          <h2 className="font-display text-5xl font-bold leading-[50px]">
            Skills
          </h2>
          <div className="flex py-10 sm:pl-[25vw]">
            <div className="flex flex-wrap items-start justify-evenly gap-6 sm:border-l-[1.5px] sm:border-black sm:border-opacity-20 sm:pl-[75px]">
              {userData.skills.map((skill) => (
                <Skill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
