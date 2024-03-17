import React from 'react';
import { Metadata } from 'next';
import HomePage from './home-page';
import AboutPage from './about/about-page';
import RolesPage from './roles/roles-page';

export const metadata: Metadata = {
  title: 'Torie Kim',
  description: `Hi! I'm a full-stack web developer and bootcamp grad. Get in touch with me!`,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: `https://toriekim.dev`,
    siteName: 'Torie Kim',
    title: 'Torie Kim Developer Portfolio',
    description: `Hi! I'm a full-stack web developer and bootcamp grad. Get in touch with me!`,
    images: '/avatar.png',
  },
  alternates: {
    canonical: `https://toriekim.dev`,
  },
};

const Page = () => {
  return (
    <main className="mx-[7vw] md:mx-[6.2vw]">
      <HomePage />
      {/* <AboutPage /> */}
      <RolesPage />
    </main>
  );
};

export default Page;
