import { iconSvgs } from '@/constants';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= 1500);
    };
    onScroll();
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-8 z-10 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="24"
            height="24"
            className="fill-darkEmerald hover:fill-magentaPink dark:fill-yellowParchment dark:hover:fill-chartreuse"
          >
            {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path d={iconSvgs.up} />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
