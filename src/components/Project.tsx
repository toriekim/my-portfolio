'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Tag from './Tag';

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex w-64 flex-col items-start justify-center gap-5 pb-0.5">
      <div className="inline-flex w-64 flex-col items-start justify-start gap-5">
        <Image
          width={256}
          height={192}
          className="h-48 w-64 shrink grow basis-0 self-stretch object-cover object-bottom"
          src={
            theme === 'dark'
              ? 'https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              : 'https://images.unsplash.com/photo-1625740137603-0f5606b742af?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
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
