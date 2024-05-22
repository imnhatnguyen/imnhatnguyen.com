import Link from 'next/link';
import { SiBehance, SiGithub, SiLinkedin } from 'react-icons/si';

import { EmailButton } from '@/components/buttons/EmailButton';
import IconLink from '@/components/links/IconLink';

import { siteConfig } from '@/constant/config';
export default function Footer() {
  return (
    <footer className='nav-footer-width flex flex-col items-center space-y-3.5 border-t border-gray-100 pb-10 pt-7 dark:border-gray-800'>
      <UtilityLinks />
      <SocialLinks />
      <p>
        © {new Date().getFullYear()} {siteConfig.title}
      </p>
    </footer>
  );
}

function UtilityLinks() {
  return (
    <section className='flex space-x-8'>
      <Link href='/pdf/Nhat-Nguyen-resume.pdf'>Resume</Link>
      <Link href='https://github.com/imnhatnguyen/imnhatnguyen.com'>Code</Link>
    </section>
  );
}

function SocialLinks() {
  return (
    <section className='flex space-x-4'>
      <EmailButton type='icon' />
      {socials.map((social) => (
        <IconLink
          label={social.id}
          key={social.id}
          href={social.href}
          icon={social.icon}
        />
      ))}
    </section>
  );
}

const socials = [
  {
    href: 'https://linkedin.com/in/imnhatnguyen',
    icon: SiLinkedin,
    id: 'LinkedIn',
  },
  {
    href: 'https://behance.net/imnhatnguyen',
    icon: SiBehance,
    id: 'Behance',
  },
  {
    href: 'https://github.com/imnhatnguyen',
    icon: SiGithub,
    id: 'GitHub',
  },
];
