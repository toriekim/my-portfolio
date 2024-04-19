import { menuItems } from '@/constants';
import { userData } from '@/constants/userData';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icon from '../IconLink';

interface Props {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  toggle?: () => void;
}

const MenuLinks = ({ theme, setTheme, toggle }: Props) => {
  const [mounted, setMounted] = useState(false);

  const isMounted = mounted && window.location;
  const path = isMounted ? window.location.pathname + window.location.hash : '';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-11 md:flex-row">
      {menuItems.map((item: { name: string; href: string }, idx) => (
        <Link
          key={`menu-link-${item.name}-${idx}`}
          href={item.href}
          onClick={toggle}
          className={`h-[28px] text-base leading-7 hover:text-magentaPink dark:hover:text-chartreuse
          ${
            path === item.href
              ? `font-medium italic text-magentaPink dark:font-normal dark:text-chartreuse`
              : `font-normal text-darkEmerald dark:font-light dark:text-yellowParchment`
          }`}
        >
          {item.name}
        </Link>
      ))}

      {/* Social Links & Theme Button */}
      <div className="flex flex-col items-center gap-5 md:flex-row">
        {/* LinkedIn Link */}
        <Icon
          icon="linkedin"
          href={userData.socialLinks.linkedin}
          height="24"
          viewBox="0 0 448 512"
        />
        {/* Github Link */}
        <Icon
          icon="github"
          href={userData.socialLinks.github}
          height="23"
          viewBox="0 0 496 512"
        />
        {/* Email */}
        <Icon
          icon="mailto"
          href={`mailto:${userData.email}`}
          height="20"
          viewBox="0 0 512 512"
        />
        {/* Toggle Button for Mode */}
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="rounded focus:outline-none"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="h-4 w-4 text-yellow-500 dark:text-yellow-500"
          >
            {theme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MenuLinks;
