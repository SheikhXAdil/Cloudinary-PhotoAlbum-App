import { Folder as folder } from '@/app/albums/page';
import { Button } from '@/components/ui/button'
import { Image, Folder, Heart } from 'lucide-react'
import Link from 'next/link'
import cloudinary from 'cloudinary'

const SideMenu = async () => {

    const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: folder[];
    };

    return (
        <section className='hidden md:block pb-12 w-1/4'>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Manage
                    </h2>
                    <div className="space-y-1">
                        <Link href={"/"}>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Image />
                                Gallery
                            </Button>
                        </Link>
                        <Link href={"/favorites"}>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Heart />
                                Favorites
                            </Button>
                        </Link>
                        <Link href={"/albums"}>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Folder />
                                View Albums
                            </Button>
                        </Link>
                        {folders.map((folder) => (
                            <Button variant="ghost" asChild key={folder.name} className="w-full justify-start flex gap-2">
                                <Link className="pl-8" href={`/albums/${folder.path}`}>
                                    {folder.name}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SideMenu
