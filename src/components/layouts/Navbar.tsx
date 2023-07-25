'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import ButtonLink from '@/components/links/ButtonLink';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/blog': {
    name: 'Blog',
  },
  '/gallery': {
    name: 'Gallery',
  },
  '/about': {
    name: 'About',
  },
};

export default function Navbar() {
  const pathname = usePathname() || '/';

  //#region  //*=========== Scroll Shadow ===========
  const [onTop, setOnTop] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //#endregion  //*======== Scroll Shadow ===========

  return (
    <nav
      className={clsx(
        'nav-footer-width dark:bg-dark sticky top-0 z-50 flex justify-between space-x-0.5 overflow-x-auto bg-white px-1 py-1.5 min-[480px]:justify-start md:space-x-1',
        !onTop && 'border-b border-gray-100 dark:border-gray-800',
      )}
    >
      {Object.entries(navItems).map(([path, { name }]) => {
        return (
          <ButtonLink
            type='text'
            key={path}
            href={path}
            className={clsx(
              path !== pathname &&
                'hover:text-primary-600 hover:dark:text-primary-400 text-stone-800 hover:bg-transparent dark:text-stone-200 dark:hover:bg-transparent',
              path === pathname && 'bg-primary-50 dark:bg-primary-400/10',
            )}
          >
            {name}
          </ButtonLink>
        );
      })}
    </nav>
  );
}
