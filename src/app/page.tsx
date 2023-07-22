import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

export default function HomePage() {
  return (
    <section>
      <h1 className='mb-5 md:mb-7'>Home</h1>
    </section>
  );
}
