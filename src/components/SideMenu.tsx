import { Button } from '@/components/ui/button'
import { Image, Folder, Heart } from 'lucide-react'
import Link from 'next/link'

const SideMenu = () => {
    return (
        <div className="pb-12 w-1/4">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Manage
                    </h2>
                    <div className="space-y-1">
                        <Link href={"/gallery"}>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Image />
                                Gallery
                            </Button>
                        </Link>
                        {/* <Link href={"/albums"}>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Folder />
                                View Albums
                            </Button>
                        </Link> */}
                        <Link href={"/favorites"}>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Heart />
                                Favorites
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
