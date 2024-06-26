import type { Metadata } from 'next';
import { HiDownload } from 'react-icons/hi';

import clsxMerge from '@/lib/clsxMerge';

import CloudImage from '@/components/images/CloudImage';
import ButtonLink from '@/components/links/ButtonLink';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: 'About',
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <>
      <header>
        <h1 className='mb-5'>About</h1>
      </header>
      <main>
        <section>
          <CloudImage
            priority
            className='float-right ml-3 w-24 sm:w-36 md:ml-5 md:w-48 md:-translate-y-6 lg:-translate-y-12 xl:mr-4'
            id='AP1GczPTx3o1j8nTN-jmKiqef6jm6W-Tpc22kn47zp7xzZiUAcDLh_2Uo1WEwi43tlDUK1GCMCUPb04WIlg-Nx0iMJKfPpOr41RwU6yX2j6Bw8QebLDSgRdri-MBtjteNy-0BljEUzu84sSbwRowIlj-YmDI'
            // WHERE DOES THIS ID COME FROM?
            // See my explanation in file galleryImages.ts
            width={350}
            height={350}
            alt='Photo of Nhat'
            hasCaption={false}
          />
          <h2>{siteConfig.title}</h2>
          <h3 className='mt-1 font-medium'>Developer</h3>

          <p className='mt-3'>
            I'm on my journey to design and build accessible, fast, secure, and
            beautiful products that users love to interact with. In my free
            time, I enjoy singing karaoke, eating Vietnamese food, and taking
            photos.
          </p>
        </section>
        <Section section={experience} title='Experience' />
        <Section section={education} title='Education' />
        <Section section={licenses} title='Licenses and certifications' />
        <Section section={technologies} title='Tools and technologies' />
        <Section section={knowledge} title='Industry knowledge' />
        <Section section={honors} title='Honors and awards' />
        <Section section={volunteering} title='Volunteering' />
        <Section section={languages} title='Languages' />
        <div className='-mb-2 mt-6 flex'>
          <ButtonLink
            href='/pdf/Nhat-Nguyen-resume.pdf'
            type='text'
            leftIcon={HiDownload}
            className='mx-auto'
          >
            Download resume
          </ButtonLink>
        </div>
      </main>
    </>
  );
}

type GroupType = {
  title?: string;
  org?: string;
  logoId: string;
  date?: string;
  description: JSX.Element;
  id?: string;
};

type SectionType = {
  section: GroupType[];
  title: string;
};

function Section({ section, title }: SectionType) {
  return (
    <section className='mt-8 max-w-4xl md:ml-5'>
      <h2>{title}</h2>
      <div className='mt-2 space-y-5 md:mt-3'>
        {section.map((group: GroupType) => (
          <div key={group.id} className='ml-3 flex items-start'>
            <picture
              className={clsxMerge(
                'h-full max-h-[40px] w-full max-w-[40px] translate-y-2 sm:max-h-[50px] sm:max-w-[50px]',
                group.logoId === 'null' ? 'hidden' : '',
              )}
            >
              <CloudImage
                id={group.logoId}
                alt='Logo of organization'
                width={100}
                height={100}
                hasCaption={false}
              />
            </picture>
            <section className='ml-3.5 space-y-0.5 md:ml-5'>
              <h3 className='text-base font-semibold md:text-lg'>
                {group.title}
              </h3>
              <h4 className='font-medium'>{group.org}</h4>
              <p className='text-gray-500 dark:text-gray-400'>{group.date}</p>
              {group.description}
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}

const experience = [
  {
    id: 'website-admin-mshop',
    title: 'Website Admin',
    org: 'MCARE PLUS (MCV Group) • Freelance',
    logoId:
      'AP1GczPLDCcjGemHE02IA1jBYSUub9MU3ME1y-PqLJ--ysqNsD00jmv3WTumFz2OHgfdBMmVo3PA8JQrjV8tXQ01JfTmL4QskQS1zd61YCfpLmlgjXjRW83YNAEuklBDYQVZ43G30lkQZg0UfKBlGxF12vwC',
    date: 'Nov 2023 - Jan 2024',
    description: (
      <div>
        <p> Skills: CSS, Photoshop</p>
        <ul>
          Website Admin for LuLuLun.vn and SamVietnamNippon.vn (on Haravan’s
          platform):
          <li>
            ・ Improved user experience by modifying the CSS source code of the
            provided template to make the website align with the design
          </li>
          <li>
            ・ Provided website visitors with detailed product descriptions by
            translating and editing Japanese and English sources
          </li>
          <li>
            ・ Reduced Page Load Time to increase Average Visit Duration by
            editing, compressing, and cropping images using Photoshop
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'dev-designer-henibeauty',
    title: 'Designer and Developer',
    org: 'HeNi Beauty Hair and Nails Salon • Freelance',
    logoId:
      'AP1GczPSCnp7VhbS7iyvbXkS2sygxSGKXoXrz6vzFE03AD5HmGDeYR9QHAfDKdkTN0sIvPsXrEZh3u_uvrr8CYJpS3KEwLYH77Mwi4IPub7f50CHmhbzL39ycF6_KbkButB5G_lkw7BrAy1BcsxAYMeuEpSe',
    date: 'Oct 2022 - Dec 2022',
    description: (
      <div>
        <p> Skills: Next.js, Tailwind CSS, Figma</p>
        <ul>
          <li>
            ・ Created a modern and memorable brand identity for the salon by
            designing the logo, name card, banner, and price list using Figma
          </li>
          <li>
            ・ Enabled the salon to showcase nail photos by developing a website
            using Next.js and Tailwind CSS
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'dev-inter-vinai',
    title: 'Intern and Developer',
    org: 'VinAI • Full-time',
    logoId:
      'AIL4fc8AVUYkffvn04hMSOBAehSeE_ViBGzTMLl34KGFdoOMLYhB9xsgy8l6aRsXmBj5vzwqvmywu7ExP47FZnlOp_TiNKZ8l80sQjlVt6DVSySdWu4Mu38hY8AdT8J25AgWkTdhCRiHLTW_NhBSMwEDDJ8',
    date: 'Mar 2021 - Dec 2021',
    description: (
      <div>
        <p> Skills: C++, SQLite, React</p>
        <ul>
          Intern and Developer in the Advanced Driver Assistance Systems
          project:
          <li>
            ・ Implemented the requirement to store data from vehicle sensors by
            developing the module with SQLite, C++
          </li>
          <li>
            ・ Provided stakeholders an intuitive way to view Lidar data by
            integrating the 3D model of the vehicle into the data visualizer
            using React
          </li>
        </ul>
      </div>
    ),
  },
];

const education = [
  {
    id: 'trainee-vinbigdata',
    title: 'Artificial Intelligence Trainee',
    org: 'VinBigData • Full-time',
    logoId:
      'AIL4fc-gFyhiebS5wUsNOAcMvQAZdPCo8BhFwuC1Strngw-UCCtgMlz8ofzfed7znFCeKIQhKGEikRZYpWlb35kXlto9VOrhAsJ3MBK0BsPMMdaGacALg9L4GyLM3eiIFfJjSm3YWREiz2EzzwIRiKnJbDk',
    date: 'Nov 2020 - Mar 2021',
    description: (
      <div>
        <p> Skills: Python, TensorFlow</p>
        <ul>
          Attended in foundational courses to get ready to join in Vingroup's
          key technology projects: Linear Algebra, Statistics and Probability,
          Deep Learning, Computer Vision, Natural Language Processing, AI Ethics
        </ul>
      </div>
    ),
  },
  {
    id: 'bachelor-uit',
    title: 'Bachelor of Science in Computer Science',
    org: 'University of Information Technology',
    logoId:
      'AIL4fc_F5l1a_LT2FWc8Z6ZceYDO7Jl7T0uleAWt5KXPXLEskEW22R_Qu7rfcO0QXdXBScw9-AZVWN9NY7UbOKPCFyGVXxcU2n_9qwPyc2E07IowJ5GsMdxPX-LOhHO2vqVM9AXPXPLUZruEA4gCjjISIuE',
    date: '2015 - 2020',
    description: (
      <ul>
        <li>・ Machine Learning for Computer Vision major</li>
        <li>・ Cumulative GPA: 8.0 (out of 10)</li>
      </ul>
    ),
  },
];

const licenses = [
  {
    id: 'responsivewebdesign-freecodecamp',
    title: 'Responsive Web Design Certification',
    org: 'freeCodeCamp',
    logoId:
      'AIL4fc9HVJKICGwF23U6xoqynlCQAVqcglMsI24LyMCGYoVZqZWkQA6cdsuJb7FHRk1MEUAiszbPpBBRGF3RO4_pYn_MYqf2CRFojreqIuRY1lUYJgMs3XpM02awo9f5QTWZFwmDZA6ql5qJ7Tf3u-d3LiE',
    date: 'Oct 2022',
    description: <p>Skills: HTML, CSS</p>,
  },
  {
    id: 'foundationofuxdesign-googlecareer',
    title: 'Foundations of User Experience Design',
    org: 'Google Career Certificates',
    logoId:
      'AP1GczMZwBrvOLuoZrl75MACRs2cM07rD3ev1HeMV4GuGinzRAlkCD0t-zTZDO8m5jyZtJCMlkfqhtsThSzKxmT6g4ZHxDbbvqVM_kQFxnhEoD1L_j8heAf48MEE7fPgIzXoWr0QDnfUiUBNUPLnFZtb11VE',
    date: 'Apr 2022',
    description: <p>Skills: UX Fundamentals</p>,
  },
  {
    id: 'deeplearning-deeplearningai',
    title: 'Deep Learning Specialization',
    org: 'DeepLearning.AI',
    logoId:
      'AIL4fc_e0DgOplZBMFPWIqohUc9MS4n9q0wRZLHSZwUJfOLYSm4cOovEc-Ts6mon6SPl2Ms4wD46rK-Ee7ObeeWFFoluuUUMJdnpSshl0DnL--YMpf668SThalnPVHGaC-3WAnkJpSw9ni1yAcsUaZxCqLE',
    date: 'Oct 2020',
    description: <p>Skills: Python, NumPy, TensorFlow</p>,
  },
  {
    id: 'machinelearning-googlecloud',
    title:
      'Machine Learning with TensorFlow on Google Cloud Platform Specialization',
    org: 'Google Cloud Training Online',
    logoId:
      'AIL4fc_-Uk5BD6sdzwoxvp1utPVqKwvKEWvLmmCUgz0Cj-zrdJQvYto-yhyNloq7ivWo-TH_hDlOY7bVVsK7_vRCkFIv5cvHWMFu6sOkioiaOXhGujXFWRLiTWQNqM3ejxmcNY_eIdJc4yKD0tcNb70-NNk',
    date: 'May 2020',
    description: <p>Skills: Python, TensorFlow, Google Cloud Platform</p>,
  },
];

const knowledge = [
  {
    id: 'knowledge-ux',
    description: <p>UX Research, Wireframing, Prototype, Usability Testing</p>,
    logoId: 'null',
  },
];

const technologies = [
  {
    id: 'technologies-ux',
    description: <p>Figma, HTML5, CSS, JavaScript, React, Git</p>,
    logoId: 'null',
  },
];

const volunteering = [
  {
    id: 'best-spring-volunteer',
    title: 'Mission Accomplishment as a Deputy Team Leader',
    org: 'Spring Volunteer Campaign at the University of Information Technology',
    logoId:
      'AIL4fc8PxMMl332SU3UUxcRp5oG4zl00K7ZRB90Oq217HIZBba4_VYZYViNrBItKeKTbehTvj4BeWiPP-DYaRXTekMREdhSdcRKomMAYK20pUEdjSOQ4eNX8n3DkjqELEhrEqfyHgC_S8mwfV5nl9lTgmlo',
    date: 'Jan 2017 - Feb 2017',
    description: (
      <div>
        Was awarded the Mission Accomplishment title as the Deputy Team Leader
        of a team making handmade products with these main tasks:
        <ul>
          <li>・ Took and edited photos for the final products</li>
          <li>・ Managed the team when the leader was busy with meetings</li>
        </ul>
      </div>
    ),
  },
];

const honors = [
  {
    id: 'scholarship-posco',
    title: 'POSCO TJ Park Scholarship for Asian Universities',
    org: 'POSCO TJ Park Foundation',
    logoId:
      'AIL4fc9Injd8nTRu9MYg4-ar16uH36nTuQTVVRieWLOraWRxCFLMyjgHuQL9cWV8_HQ7HHleb675e_Xol_FrRZOxYeZxVO252ZwuDXxDj-XvtjuIGXklBiCMj9aA6ebYr0sWJ0ba0QbOvlY6IprovM95Ed8',
    date: 'Oct 2019',
    description: (
      <div>
        Became the only awarded student from the University of Information
        Technology who:
        <ul>
          <li>
            ・ Had the Annual GPA of 8.5 or higher for the 2018-2019 academic
            year
          </li>
          <li>・ Achieved good academic results</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'award-digital-race',
    title:
      ' First Prize (Team of four) - University round - FPT Digital Race 2017-2018',
    org: 'FPT Corporation',
    logoId:
      'AP1GczNzVoPsmCko-rTKUMIEx2apQZOC8kwVYA3Tv3vqMn18rAra6MeMmv5-5Gcfqko70B3gce-9IXwBfJ5EIkDEVeeOH7htTW_VLuI3Kw66TUG-lJLfhZr6RVbuSdbD_tDeBBL18J53_5Chk1x-XhrWL0rU',
    date: 'Jan 2018',
    description: (
      <div>
        My team, who won the First prize in the University round:
        <ul>
          <li>
            ・ Got the highest combined score across the Computer Vision, Fast
            Programming, and Knowledge in Technology rounds
          </li>
          <li>
            ・ Was the delegate from my university to participate in the
            semi-final round of the competition
          </li>
        </ul>
      </div>
    ),
  },
];

const languages = [
  {
    id: 'languages-english',
    title: 'English',
    description: <p>Professional working proficiency</p>,
    logoId: 'null',
  },
  {
    id: 'languages-japanese',
    title: 'Japanese',
    description: <p>Elementary proficiency</p>,
    logoId: 'null',
  },
  {
    id: 'languages-vietnamese',
    title: 'Vietnamese',
    description: <p>Native proficiency</p>,
    logoId: 'null',
  },
];
