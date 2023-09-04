import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloudinary PhotoAlbum Nextjs 13',
  description: 'Code by SheikhXAdil on github',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>

        <Header />

        <div className="flex">
          <SideMenu />

          <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  )
}
