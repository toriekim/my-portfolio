import '../styles/globals.css';
import { IBM_Plex_Mono } from 'next/font/google';
import Providers from './providers';
import Navigation from '@/components/navigation';
import Footer from '@/components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

// The app directory MUST include a root layout
// Root layout MUST define <html> & <body> tags since Next.js doesn't auto create them. It's also used to define other globally shared UI
// Root layout replaces the `pages/_app.tsx` & `pages/_document.tsx` files
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Note! If you do not add suppressHydrationWarning to your <html> you will get warnings because next-themes updates that element. This property only applies one level deep, so it won't block hydration warnings on other elements.
    // https://github.com/pacocoursey/next-themes#with-app
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wwe7svy.css" />
      </head>
      <body
        className={`${ibm_plex_mono.className} bg-yellowParchment font-light text-darkEmerald dark:bg-darkEmerald dark:text-yellowParchment`}
      >
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
