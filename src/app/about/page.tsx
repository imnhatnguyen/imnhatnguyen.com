import clsx from 'clsx';
import type { Metadata } from 'next';
import { HiDownload } from 'react-icons/hi';

import CloudImage from '@/components/images/CloudImage';
import ButtonLink from '@/components/links/ButtonLink';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Mason is an entry-level UX Designer with a background in Machine Learning and some Front-End Development skills',
};

export default function AboutPage() {
  return (
    <>
      <section>
        <h1 className='mb-5'>About</h1>
        <CloudImage
          priority
          className='float-right ml-3 md:ml-5 w-24 sm:w-36 md:w-48 md:-translate-y-6 xl:mr-4 lg:-translate-y-12'
          id='AIL4fc-v6FLfTRklgMVgBUxsHbx1pSWyxPoMuXUdbCpEnjvBjlawZIvFNC7kiriMa24S6G2cQCZhu87Kn7C1Bue71CTWYXGV--Ds0ACJmC24ZDpetGvaXsVl9sC55WJHHotJrV71uHNsKfJjH8_cQmFTC60'
          width={350}
          height={350}
          alt='Photo of Mason'
          hasCaption={false}
        />
        <h2>Mason Nguyen</h2>
        <p className='mt-1 font-medium'>UX Designer</p>

        <p className='mt-3 max-w-4xl'>
          I am an entry-level UX Designer with some Front-End Development
          skills. My goal is to create accessible, fast, and visually appealing
          products that users love to interact with. In my free time, I enjoy
          singing karaoke, listening to K-pop, eating Vietnamese food, and
          taking photos.
        </p>
        <ButtonLink
          href='/pdfs/masonjnguyen_com_resume.pdf'
          type='outlined'
          leftIcon={HiDownload}
          className='my-7'
        >
          Download PDF resume
        </ButtonLink>
      </section>

      <section className='max-w-3xl space-y-6 md:ml-5'>
        <Section sections={experience} groupTitle='Experience' />
        <Section sections={education} groupTitle='Education' />
        <Section sections={licenses} groupTitle='Licenses and certifications' />
        <Section sections={technologies} groupTitle='Tools and technologies' />
        <Section sections={knowledge} groupTitle='Industry knowledge' />
        <Section sections={honors} groupTitle='Honors and awards' />
        <Section sections={volunteering} groupTitle='Volunteering' />
        <Section sections={languages} groupTitle='Languages' />
      </section>
    </>
  );
}

type SectionType = {
  title?: string;
  org?: string;
  logoId: string;
  date?: string;
  description: JSX.Element;
  id?: string;
};

type GroupType = {
  sections: SectionType[];
  groupTitle: string;
};

function Section({ sections, groupTitle }: GroupType) {
  return (
    <div>
      <h2>{groupTitle}</h2>
      <div className='mt-2 space-y-5 md:mt-3'>
        {sections.map((section: SectionType) => (
          <div key={section.id} className='ml-3 flex items-start '>
            <div
              className={clsx(
                'h-full max-h-[40px] w-full max-w-[40px] translate-y-2 sm:max-h-[50px] sm:max-w-[50px] ',
                section.logoId === 'null' ? 'hidden' : '',
              )}
            >
              <CloudImage
                id={section.logoId}
                alt='Logo of organization'
                width={100}
                height={100}
                hasCaption={false}
              />
            </div>
            <div className='ml-3.5 space-y-0.5 md:ml-5'>
              <p className='text-base font-semibold md:text-lg'>
                {section.title}
              </p>
              <p className='font-medium'>{section.org}</p>
              <p className='text-gray-500 dark:text-gray-400'>{section.date}</p>
              {section.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const experience = [
  {
    id: 'dev-vinai',
    title: 'Developer',
    org: 'VinAI • Full-time',
    logoId:
      'AIL4fc8AVUYkffvn04hMSOBAehSeE_ViBGzTMLl34KGFdoOMLYhB9xsgy8l6aRsXmBj5vzwqvmywu7ExP47FZnlOp_TiNKZ8l80sQjlVt6DVSySdWu4Mu38hY8AdT8J25AgWkTdhCRiHLTW_NhBSMwEDDJ8',
    date: 'Oct 2021 - Dec 2021',
    description: <p> Skills: JavaScript, React</p>,
  },
  {
    id: 'intern-vinai',
    title: 'Middleware Intern',
    org: 'VinAI • Full-time',
    logoId:
      'AIL4fc8AVUYkffvn04hMSOBAehSeE_ViBGzTMLl34KGFdoOMLYhB9xsgy8l6aRsXmBj5vzwqvmywu7ExP47FZnlOp_TiNKZ8l80sQjlVt6DVSySdWu4Mu38hY8AdT8J25AgWkTdhCRiHLTW_NhBSMwEDDJ8',
    date: 'Mar 2021 - Oct 2021',
    description: <p>Skills: C++, SQLite, Data Distribution Service</p>,
  },
  {
    id: 'trainee-vinbigdata',
    title: 'Artificial Intelligence Trainee',
    org: 'VinBigData • Full-time',
    logoId:
      'AIL4fc-gFyhiebS5wUsNOAcMvQAZdPCo8BhFwuC1Strngw-UCCtgMlz8ofzfed7znFCeKIQhKGEikRZYpWlb35kXlto9VOrhAsJ3MBK0BsPMMdaGacALg9L4GyLM3eiIFfJjSm3YWREiz2EzzwIRiKnJbDk',
    date: 'Nov 2020 - Mar 2021',
    description: <p>Skills: Python, TensorFlow</p>,
  },
];

const education = [
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
    org: 'freeCodeCamp.org',
    logoId:
      'AIL4fc9HVJKICGwF23U6xoqynlCQAVqcglMsI24LyMCGYoVZqZWkQA6cdsuJb7FHRk1MEUAiszbPpBBRGF3RO4_pYn_MYqf2CRFojreqIuRY1lUYJgMs3XpM02awo9f5QTWZFwmDZA6ql5qJ7Tf3u-d3LiE',
    date: 'Oct 2022',
    description: <p>Skills: HTML, CSS</p>,
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
      <p>
        Helped a team that creates handmade products successfully raise enough
        money for charity
      </p>
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
        One of the 10 recipients from Vietnam National University - Ho Chi Minh
        City who had:
        <ul>
          <li>
            ・ The Annual GPA of 8.5 or higher for the 2018-2019 academic year
          </li>
          <li>・ Good academic achievements </li>
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
    id: 'languages-vietnamese',
    title: 'Vietnamese',
    description: <p>Native proficiency</p>,
    logoId: 'null',
  },
];
