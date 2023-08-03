import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        {/* TO DO: Add Nav Bar & Footer here, since it's UI that is shared globally */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
