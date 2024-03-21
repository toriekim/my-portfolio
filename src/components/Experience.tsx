import Link from 'next/link';
import Tag from './Tag';

interface Props {
  experience: Experience;
}

const Experience = ({ experience }: Props) => {
  return (
    <div className="flex w-full flex-col justify-start gap-2">
      {/* info */}
      <div className="flex items-center justify-between">
        <h4 className="font-display text-2xl font-bold leading-[30px] text-magentaPink dark:font-medium dark:text-chartreuse">
          {experience.title}
        </h4>
        <p className="text-sm font-normal leading-tight">{experience.year}</p>
      </div>
      <Link
        href={experience.companyLink}
        target="_blank"
        className="text-base font-semibold leading-snug tracking-wide hover:text-magentaPink dark:font-medium dark:hover:text-chartreuse"
      >
        {experience.company}
      </Link>
      <p className="text-sm font-normal leading-tight dark:font-light">
        {experience.description}
      </p>
      {/* tags */}
      <div className="mt-1.5 flex flex-wrap items-center justify-start gap-[5px] self-stretch">
        {experience.tags.map((tag, idx) => (
          <Tag key={`${tag}-${idx}`} name={tag} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
