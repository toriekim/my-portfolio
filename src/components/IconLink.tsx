import { iconSvgs } from '@/constants';

interface Props {
  icon: IconType;
  href: string;
  height: string;
  viewBox?: string;
  className?: string;
}

const IconLink = ({ icon, href, height, viewBox, className }: Props) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="text-base"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height || '24'}
        viewBox={viewBox}
        className="fill-darkEmerald hover:fill-magentaPink dark:fill-yellowParchment dark:hover:fill-chartreuse"
      >
        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        <path d={iconSvgs[icon]} />
      </svg>
    </a>
  );
};

export default IconLink;
