import '../styles/globals.css';
import '../styles/Home.module.css';
import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Torie Kim Developer Portfolio',
  description: `Hi! I'm a full-stack web developer and a bootcamp grad. Get in touch with me!`,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: `https://toriekim.dev`,
    siteName: 'Torie Kim',
    title: 'Torie Kim Developer Portfolio',
    description: `Hi! I'm a full-stack web developer and a bootcamp grad. Get in touch with me!`,
    images: '/avatar.png',
  },
  alternates: {
    canonical: `https://toriekim.dev`,
  },
};

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="dark:bg-gray-800 w-full">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Home;
