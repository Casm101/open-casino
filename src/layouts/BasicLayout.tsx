// Global module imports
import { FC, ReactNode } from 'react';
import Head from 'next/head';

// Component imports
import { Header, Footer } from '@/components';


// Basic layout component props
interface BasicLayoutProps {
  children: ReactNode;
}


// Basic layout component declaration
export const BasicLayout: FC<BasicLayoutProps> = ({ children }) => {
  return (
    <>
      {/* Head metadata */}
      <Head>
        <title>Open Casino</title>
        <meta name="description" content="Open Casino OSS project site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header component */}
      <Header
        logo=""
        links={[
          { name: 'Sports', url: '/sports' },
          { name: 'Casino', url: '/casino' },
          { name: 'Poker', url: '/poker' }
        ]}
      />

      {/* Content */}
      <main className='content-main'>{children}</main>

      {/* Footer component */}
      <Footer
        companyName='Open Casino'
        year={new Date().getFullYear()}
      />
    </>
  );
};
