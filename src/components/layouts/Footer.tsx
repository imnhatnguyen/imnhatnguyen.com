import { SiBehance, SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

import { EmailButton } from '@/components/buttons/EmailButton';
import IconLink from '@/components/links/IconLink';

import { siteConfig } from '@/constant/config';
export default function Footer() {
  return (
    <footer className='nav-footer-width flex flex-col items-center space-y-3.5 border-t border-gray-100 pt-7 pb-10 dark:border-gray-800'>
      <SocialLinks />
      <p>
        © {new Date().getFullYear()} {siteConfig.title}
      </p>
    </footer>
  );
}

function SocialLinks() {
  return (
    <div className='flex space-x-4'>
      <EmailButton type='icon' />
      {socials.map((social) => (
        <IconLink
          label={social.id}
          key={social.id}
          href={social.href}
          icon={social.icon}
        />
      ))}
    </div>
  );
}

const socials = [
  {
    href: 'https://www.twitter.com/masonjnguyen',
    icon: SiTwitter,
    id: 'Twitter',
  },
  {
    href: 'https://www.behance.net/masonjnguyen',
    icon: SiBehance,
    id: 'Behance',
  },
  {
    href: 'https://www.github.com/masonjnguyen',
    icon: SiGithub,
    id: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/masonjnguyen',
    icon: SiLinkedin,
    id: 'Linkedin',
  },
];
