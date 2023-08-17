"use client"
import { CldImage } from "next-cloudinary";
import { Heart } from 'lucide-react'
import { setAsFavoriteAction } from "@/app/gallery/actions";
import { useTransition } from "react";
import { SearchResult } from "@/app/gallery/page";
import { FullHeart } from "@/components/icons/FullHeart";
import { useRouter } from "next/navigation";

const CloudinaryImage = ({ imageData, path }: { imageData: SearchResult, path: string }) => {

    const router = useRouter()

    const [transition, startTransition] = useTransition()

    const isFavorite = imageData.tags.includes("favorite")

    return (
        <div className="relative">
            <CldImage
                key={imageData.public_id}
                src={imageData.public_id}
                width={imageData.width}
                height={imageData.height}
                alt="Image of something"
            />
            {isFavorite
                ?
                <FullHeart
                    onClick={() => {
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, false, path)
                            router.refresh()
                        })
                    }}
                    className="absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer"
                />
                :
                <Heart
                    onClick={() => {
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, true, path)
                            router.refresh()
                        })
                    }}
                    className="absolute top-2 right-2 hover:text-red-600 cursor-pointer"
                />
            }
        </div>
    )
}

export default CloudinaryImage
