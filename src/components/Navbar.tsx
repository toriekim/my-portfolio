'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import { menuItems, userData, colors } from '@/constants';
import { debounce } from '@/utlities/helpers';

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [prevMousePos, setPrevMousePos] = useState(0);
  const [visible, setVisible] = useState(true);

  const showNavbar = visible ? 'top-0' : 'top-[-80px]';

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = debounce(() => {
    // Find current scroll position
    const currentScrollPos = window.scrollY;
    // Set nav visible state based on scroll location info
    // Nav visible if user scrolls up more than 70 OR if position is less than 10
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    // Set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  const handleMouseMove = debounce((e: MouseEvent) => {
    // Find current pointer Y position
    const currentMousePos = e.clientY;
    // Nav visible if already is & pointer is moving upwards
    // OR if pointer is near top of viewport in navbar area
    setVisible(
      (visible && prevMousePos > currentMousePos) || currentMousePos < 80
    );
    // Set state to new mouse position
    setPrevMousePos(currentMousePos);
  }, 300);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.addEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const createMenuLinks = (items: string[]) => {
    return items.map((item) => {
      const href = `/${item.toLowerCase()}`;
      return (
        <Link
          href={href}
          key={`menu-link-${item}`}
          className={`h-[28px] text-base leading-7 hover:text-magentaPink dark:hover:text-chartreuse
          ${
            pathname === href
              ? `font-medium italic text-magentaPink dark:font-normal dark:text-chartreuse`
              : `font-normal text-darkEmerald dark:font-light dark:text-yellowParchment`
          }`}
        >
          {item}
        </Link>
      );
    });
  };

  if (!mounted) return null;

  return (
    <nav
      className={`fixed z-50 mx-auto h-20 w-[100%] bg-yellowParchment pb-[12px] pl-[30px] pr-[47px] pt-[13px] transition-[top] duration-[0.6s] dark:bg-darkEmerald ${showNavbar}`}
    >
      <div className="flex items-center justify-between md:flex-row">
        {/* Logo */}
        <Link href="/">
          <Logo width={55} height={55} className="m-0 p-0" theme={theme} />
        </Link>

        {/* Right-side Menu */}
        <div className="hidden space-x-8 sm:block">
          {/* Site Links */}
          <div className="flex flex-row items-center gap-11">
            {createMenuLinks(menuItems)}

            {/* Social Links & Theme Button */}
            <div className="flex flex-row items-center gap-5">
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

              {/* Toggle Button for Mode */}
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="rounded focus:outline-none"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {mounted && (
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
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
