import Image from 'next/image';
import Tag from './Tag';

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  return (
    <div className="inline-flex w-64 flex-col items-start justify-center gap-5 pb-0.5">
      <div className="inline-flex w-64 flex-col items-start justify-start gap-5">
        <Image
          width={256}
          height={192}
          className="h-48 w-64 shrink grow basis-0 self-stretch object-cover object-bottom"
          src={'/pages/project-default.jpeg'}
          alt="project image"
        />
        {/* project text */}
        <div className="flex flex-col items-start justify-start gap-1.5">
          <h3 className="font-display text-2xl font-bold  text-magentaPink dark:text-chartreuse">
            {project.title}
          </h3>
          <div className="flex flex-col items-start justify-start gap-1">
            <h4 className="text-base font-normal tracking-wide">
              {project.type}
            </h4>
            <p className="text-sm font-normal leading-tight">
              {project.description}
            </p>
          </div>
        </div>
      </div>
      {/* tags */}
      <div className="flex flex-wrap items-center gap-1.5">
        {project.tags.map((name, idx) => (
          <Tag key={`${name}-${idx}`} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Project;
