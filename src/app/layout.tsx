import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideMenu from '@/components/SideMenu'

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

        <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            Cloudinary Photos
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="flex">
          <SideMenu />

          <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  )
}
