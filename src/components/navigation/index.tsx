'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        theme={theme}
        setTheme={setTheme}
      />
      <Navbar toggle={toggle} theme={theme} setTheme={setTheme} />
    </>
  );
};

export default Navigation;
