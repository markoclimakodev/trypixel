import './globals.css'
import { Epilogue } from 'next/font/google';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  
}

const epilogue = Epilogue({
  weight: '500',
  subsets: ['latin'],
});
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-l from-green-400 via-purple-700 to-blue-500 ${epilogue.className}`}>{children}</body>
    </html>
  )
}
