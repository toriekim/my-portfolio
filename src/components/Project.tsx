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
          <div className="flex w-full items-center justify-between">
            <h4 className="font-display text-2xl font-bold">{project.title}</h4>
            <Link
              href={project.link}
              target="_blank"
              className="hover:text-magentaPink dark:hover:text-chartreuse"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <h4 className="text-base font-medium tracking-wide text-magentaPink dark:text-chartreuse">
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
