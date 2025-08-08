import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crest Education Center',
  description: 'Homeschooling and Tuition Services in Nairobi for multiple curriculums.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 leading-relaxed">
        {children}
      </body>
    </html>
  );
}
