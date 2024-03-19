import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../Logo';
import { debounce } from '@/utlities/helpers';
import MenuLinks from './MenuLinks';

interface Props {
  toggle: () => void;
  theme: string | undefined;
  setTheme(theme: string): void;
}

const Navbar = ({ toggle, theme, setTheme }: Props) => {
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
  }, 300);

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

  if (!mounted) return null;

  return (
    <nav
      className={`fixed z-40 mx-auto h-20 w-[100%] bg-yellowParchment pb-[12px] pl-[30px] pr-[47px] pt-[13px] transition-[top] duration-[0.6s] dark:bg-darkEmerald ${showNavbar}`}
    >
      <div className="flex items-center justify-between md:flex-row">
        {/* Logo */}
        <Link href="/">
          <Logo width={55} height={55} className="m-0 p-0" theme={theme} />
        </Link>

        {/* Right-side Menu */}
        <div className="hidden space-x-8 md:block">
          <MenuLinks theme={theme} setTheme={setTheme} />
        </div>

        {/* Mobile Menu Button */}
        <button type="button" onClick={toggle} className="md:hidden">
          <svg
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="21"
              cy="4"
              r="4"
              className="fill-darkEmerald dark:fill-yellowParchment"
            />
            <circle
              cx="21"
              cy="19"
              r="4"
              className="fill-darkEmerald dark:fill-yellowParchment"
            />
            <circle
              cx="4"
              cy="4"
              r="4"
              className="fill-darkEmerald dark:fill-yellowParchment"
            />
            <circle
              cx="4"
              cy="19"
              r="4"
              className="fill-darkEmerald dark:fill-yellowParchment"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
