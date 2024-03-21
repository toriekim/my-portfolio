import Image from 'next/image';
import Tag from './Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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
          className="h-48 w-64 object-cover"
          src={project.imgUrl ? project.imgUrl : '/pages/project-default.jpeg'}
          alt="project image"
        />
        {/* project text */}
        <div className="flex w-full flex-col items-start justify-start gap-1.5">
          <div className="flex w-full flex-col">
            <Link
              href={project.link}
              target="_blank"
              className="flex w-full items-center justify-between hover:text-magentaPink dark:hover:text-chartreuse"
            >
              <h4 className="font-display text-2xl font-bold text-magentaPink dark:text-chartreuse">
                {project.title}
              </h4>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
            <h4 className="text-base font-medium tracking-wide">
              {project.type}
            </h4>
          </div>
          <p className="text-sm font-normal leading-tight">
            {project.description}
          </p>
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
