import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { FC, ReactNode } from 'react';
import '../globals.css';

interface layoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application',
};

const inter = Inter({ subsets: ['latin'] });

const RootLayout: FC<layoutProps> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
