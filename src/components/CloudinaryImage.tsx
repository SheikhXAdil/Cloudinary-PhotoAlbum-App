"use client"
import { CldImage } from "next-cloudinary";
import { Heart } from 'lucide-react'
import { setAsFavoriteAction } from "@/app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "@/app/gallery/page";
import { FullHeart } from "@/components/icons/FullHeart";
import { useRouter } from "next/navigation";

const CloudinaryImage = ({ imageData, onUnheart }: { imageData: SearchResult, onUnheart?: (unheartedResource: SearchResult) => void }) => {

    const router = useRouter()

    const [transition, startTransition] = useTransition()

    const [isFavorite, setIsFavorite] = useState(imageData.tags.includes("favorite"))

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
                        onUnheart?.(imageData)
                        setIsFavorite(false)
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, false)
                            router.refresh()
                        })
                    }}
                    className="absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer"
                />
                :
                <Heart
                    onClick={() => {
                        setIsFavorite(true)
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, true)
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
