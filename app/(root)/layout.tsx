import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { FC, ReactNode } from 'react';
import '../globals.css';
import TopBar from '@/components/Shared/TopBar/TopBar';
import LeftSideBar from '@/components/Shared/LeftSideBar/LeftSideBar';
import RightSideBar from '@/components/Shared/RightSideBar/RightSideBar';
import BottomBar from '@/components/Shared/BottomBar/BottomBar';
import { dark } from '@clerk/themes';

interface layoutProps {
  children: ReactNode;
}

export const maxDuration = 60;

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application',
};

const inter = Inter({ subsets: ['latin'] });

const RootLayout: FC<layoutProps> = ({ children }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>
          <TopBar />
          <main className='flex flex-row'>
            <LeftSideBar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
