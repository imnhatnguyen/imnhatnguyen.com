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
        <h1 className='mb-5 md:mb-7'>About</h1>
        <CloudImage
          priority
          className='float-right ml-5 mb-5 w-24 sm:w-36 md:w-48 md:-translate-y-6 xl:mr-4 lg:-translate-y-12'
          publicId='AMWts8DO5cGABbo6ErdLXURTAY0KhtIQscvtIHtcyZE7mUaT9s7Tdtl2JDCG4k5uABWETYuwlsEuQCp2kH8cTO1SFAIOSiOHDAaL16UWsyXo7T1rW-Cvecf2VP4rC-wyfx8HLOez5wW1XqZG8r6kuUC04Szr'
          width={350}
          height={350}
          alt='Photo of Mason'
          hasCaption={false}
        />
        <h2 className='text-lg font-semibold md:text-xl'>Mason Nguyen</h2>
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
  orgImgSrc: string;
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
      <h2 className='text-lg font-semibold md:text-xl'>{groupTitle}</h2>
      <div className='mt-2 space-y-5 md:mt-3'>
        {sections.map((section: SectionType) => (
          <div key={section.id} className='ml-3 flex items-start '>
            <div
              className={clsx(
                'h-full max-h-[40px] w-full max-w-[40px] translate-y-2 sm:max-h-[50px] sm:max-w-[50px] ',
                section.orgImgSrc ===
                  'AMWts8CVmgO1swCxN0OXQJaJUYwBfkDzYC2ubtx0wrCuSPAMbGB7hEQfeOTYmDcCZVpGwCGpwbIihJqMOc1QZA3f1cDghPA24MY82LOL3-uoW79t0230MowmB413sYro0qPsAjT0gqUDn4ipmmK_pS3hb8WU'
                  ? 'hidden'
                  : '',
              )}
            >
              <CloudImage
                publicId={section.orgImgSrc}
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
    id: 'dev-minimalbeauty',
    title: 'Developer',
    org: 'minimalbeauty.vn • Freelance',
    orgImgSrc:
      'AMWts8DlQRd0pE4Kqwzrqbo6LoeykpH5MKywBKl6qaIHBmdWbSs95G_6IGS5mM1ggNuDipA3d5Zc9tAVnw2DlUIN2CDTkXmruRMMfWQqIlQ_KGDSy9FbLnX23qhlbcARqhwfTK2kYgCGHJx7lQIgbao_jWJZ',
    date: 'Aug 2022',
    description: <p>Skills: HTML, CSS</p>,
  },
  {
    id: 'dev-vinai',
    title: 'Developer',
    org: 'VinAI • Full-time',
    orgImgSrc:
      'AMWts8BZKEyShhoeH2ABRDXtSjS72Dj6V8tSDT9IOQHZcKJU6L_PDVOn4Wr3R3BOn3PYO9PFuMhBYrldA8UglppkrHPznthYz49FOgb5qmd2Fpxg7pHT-rrc6Hs-ZrGFdJgMYjLbSNWKAurCrQ76WodxxGo1',
    date: 'Oct 2021 - Dec 2021',
    description: <p> Skills: JavaScript, React</p>,
  },
  {
    id: 'intern-vinai',
    title: 'Middleware Intern',
    org: 'VinAI • Full-time',
    orgImgSrc:
      'AMWts8BZKEyShhoeH2ABRDXtSjS72Dj6V8tSDT9IOQHZcKJU6L_PDVOn4Wr3R3BOn3PYO9PFuMhBYrldA8UglppkrHPznthYz49FOgb5qmd2Fpxg7pHT-rrc6Hs-ZrGFdJgMYjLbSNWKAurCrQ76WodxxGo1',
    date: 'Mar 2021 - Oct 2021',
    description: <p>Skills: C++, SQLite, Data Distribution Service</p>,
  },
  {
    id: 'trainee-vinbigdata',
    title: 'Artificial Intelligence Trainee',
    org: 'VinBigData • Full-time',
    orgImgSrc:
      'AMWts8DHYIDfhEkqzQ-wNa1MA7Sex5zqEbq6mz-57S9_M8KRNx5qV0j-Cn4MjSthBSODRN7GGa1-R7t488nIqo1JaqlJUU5SzHdqUjSYPbTZT-3wm1Qie94duWqu-6c_OZh48IQGYC9pid13bd1cjxaU_GC2',
    date: 'Nov 2020 - Mar 2021',
    description: <p>Skills: Python, TensorFlow</p>,
  },
];

const education = [
  {
    id: 'bachelor-uit',
    title: 'University of Information Technology',
    org: 'B.S. in Computer Science • Machine Learning Major',
    orgImgSrc:
      'AMWts8Bi1kHnEUzUk_cw-OOm9mChLcoLpRpep3Yoz2lquoEXZeWtvYna3SslIJ3RUYUU34xXNpxiD6SzlPtV3370vpXYNEqrDGQS3eDYEJNeAThYr-GCF0bgzjyd33hx3-dDinsIGdx00YBHyIqEkadofxXh',
    date: '2015 - 2020',
    description: <p>Cumulative GPA: 8.0 (out of 10) </p>,
  },
];

const licenses = [
  {
    id: 'deeplearning-deeplearningai',
    title: 'Deep Learning Specialization',
    org: 'DeepLearning.AI',
    orgImgSrc:
      'AMWts8Do5zJ8495aKNJ_9rARdYc6hAI1qDaxQFfRsPUMbrAHKQkIR582SJX3o63CnN5jJ2sSJDDrgDCuilU9GdgAu2xgj1HzjS2fi2pB7VEqEEjTNosKXrwPXyfB7XYsBEaiBpTqTeH00y96egRG-UvnfLQ1',
    date: 'Oct 2020',
    description: <p>Skills: Python, NumPy, TensorFlow</p>,
  },
  {
    id: 'machinelearning-googlecloud',
    title:
      'Machine Learning with TensorFlow on Google Cloud Platform Specialization',
    org: 'Google Cloud Training Online',
    orgImgSrc:
      'AMWts8Bk3LsYVgeZmgOVRutpJutQipRGYfSu9D547U1PnKp0TtFr2U0gq4mJkY8FdSsXeaTQ6oSsFtTwZzKcgor8x3yrFogYVeTy4dLX2jJWVQt1bddbR9r_nvICXEmiS9E--V6WMIg0-oKshv0sw8pYaHVw',
    date: 'May 2020',
    description: <p>Skills: Python, TensorFlow, Google Cloud Platform</p>,
  },
];

const knowledge = [
  {
    id: 'knowledge-ux',
    description: <p>UX Research, Wireframing, Prototype, Usability Testing</p>,
    orgImgSrc:
      'AMWts8CVmgO1swCxN0OXQJaJUYwBfkDzYC2ubtx0wrCuSPAMbGB7hEQfeOTYmDcCZVpGwCGpwbIihJqMOc1QZA3f1cDghPA24MY82LOL3-uoW79t0230MowmB413sYro0qPsAjT0gqUDn4ipmmK_pS3hb8WU',
  },
];

const technologies = [
  {
    id: 'technologies-ux',
    description: <p>Figma, HTML5, CSS, JavaScript, React, Git</p>,
    orgImgSrc:
      'AMWts8CVmgO1swCxN0OXQJaJUYwBfkDzYC2ubtx0wrCuSPAMbGB7hEQfeOTYmDcCZVpGwCGpwbIihJqMOc1QZA3f1cDghPA24MY82LOL3-uoW79t0230MowmB413sYro0qPsAjT0gqUDn4ipmmK_pS3hb8WU',
  },
];

const volunteering = [
  {
    id: 'best-spring-volunteer',
    title: 'Mission Accomplishment as a Deputy Team Leader',
    org: 'Spring Volunteer Campaign at the University of Information Technology',
    orgImgSrc:
      'AMWts8ByoITbA7w8aGSb_ONJegWNMys4eWVFKMWLva-ML9X_FjE6TvpCcGv2IsNAuScZgiquL53kdxU5foZGza47uA9JrHwiuHwZIUENjtLS2I9nF4yjyMOm1brKvnsdIWtTdsNHz7G19cNkKM1hZXpcLBjF',
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
    orgImgSrc:
      'AMWts8AJxL8U3lNeNHRJdzIszWIOtxbbI-cVadu_5C7Bz5IJCtt6luS5fONYakK9TunKfzLDOwvputLAz4KLk1BAhQD2pXv7mq06Bx2XoTsCIyFAs-DwKwruLfjs2QYhOfG5zccwxbVvQoKlB5D3XzarvS2O',
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
    orgImgSrc:
      'AMWts8CVmgO1swCxN0OXQJaJUYwBfkDzYC2ubtx0wrCuSPAMbGB7hEQfeOTYmDcCZVpGwCGpwbIihJqMOc1QZA3f1cDghPA24MY82LOL3-uoW79t0230MowmB413sYro0qPsAjT0gqUDn4ipmmK_pS3hb8WU',
  },
  {
    id: 'languages-vietnamese',
    title: 'Vietnamese',
    description: <p>Native proficiency</p>,
    orgImgSrc:
      'AMWts8CVmgO1swCxN0OXQJaJUYwBfkDzYC2ubtx0wrCuSPAMbGB7hEQfeOTYmDcCZVpGwCGpwbIihJqMOc1QZA3f1cDghPA24MY82LOL3-uoW79t0230MowmB413sYro0qPsAjT0gqUDn4ipmmK_pS3hb8WU',
  },
];
