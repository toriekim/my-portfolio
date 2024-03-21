import { usePathname } from 'next/navigation';
import { menuItems, colors } from '@/constants';
import { userData } from '@/constants/userData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  toggle: () => void;
}

const MenuLinks = ({ theme, setTheme, toggle }: Props) => {
  const location = window && window.location;
  const { pathname, hash } = location;
  const path = pathname + hash;

  console.log('path: ', path);

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
        <a
          href={userData.socialLinks.linkedin}
          rel="noopener noreferrer"
          target="_blank"
          className="text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 448 512"
            fill={
              theme === 'dark'
                ? `${colors.parchment1}`
                : `${colors.darkEmerald}`
            }
            className={
              theme === 'dark'
                ? `hover:fill-chartreuse`
                : `hover:fill-magentaPink`
            }
          >
            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>

        {/* Github Link */}
        <a
          href={userData.socialLinks.github}
          rel="noopener noreferrer"
          target="_blank"
          className="text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="23"
            viewBox="0 0 496 512"
            fill={
              theme === 'dark'
                ? `${colors.parchment1}`
                : `${colors.darkEmerald}`
            }
            className={
              theme === 'dark'
                ? `hover:fill-chartreuse`
                : `hover:fill-magentaPink`
            }
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>

        <a
          href={`mailto:${userData.email}`}
          rel="noopener noreferrer"
          target="_blank"
          className="text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 512 512"
            fill={
              theme === 'dark'
                ? `${colors.parchment1}`
                : `${colors.darkEmerald}`
            }
            className={
              theme === 'dark'
                ? `hover:fill-chartreuse`
                : `hover:fill-magentaPink`
            }
          >
            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
          </svg>
        </a>

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
