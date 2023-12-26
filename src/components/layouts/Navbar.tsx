'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import clsxMerge from '@/lib/clsxMerge';

import ButtonLink from '@/components/links/ButtonLink';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/gallery': {
    name: 'Gallery',
  },
  '/about': {
    name: 'About',
  },
};

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/projects/')) {
    pathname = '/projects';
  }

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
      className={clsxMerge(
        'nav-footer-width sticky top-0 z-50 flex justify-between space-x-0.5 overflow-x-auto bg-white px-1 py-1.5 min-[480px]:justify-start md:space-x-1 dark:bg-dark',
        !onTop && 'border-b border-gray-100 dark:border-gray-800',
      )}
    >
      {Object.entries(navItems).map(([path, { name }]) => {
        return (
          <ButtonLink
            type='text'
            key={path}
            href={path}
            className={clsxMerge(
              'py-1.5 md:py-2',
              path !== pathname &&
                'text-gray-800 hover:bg-transparent hover:text-primary-600 dark:text-gray-200 dark:hover:bg-transparent hover:dark:text-primary-400',
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
