import MobileMenu from '@/components/MobileMenu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="border-b">
            <div className="flex justify-between h-16 items-center px-4 w-11/12 mx-auto">

                <Link href={"/"}>Cloudinary Photos</Link>

                <div>
                    <div className='flex md:hidden items-center justify-center'>
                        <MobileMenu />
                    </div>

                    <div className="ml-auto hidden md:flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage
                                src="/avatar.jpg"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
