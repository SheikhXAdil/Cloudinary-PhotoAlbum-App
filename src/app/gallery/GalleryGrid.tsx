"use client";

import { ImageGrid } from "@/components/ImageGrid";
import { SearchResult } from "./page";
import CloudinaryImage from '@/components/CloudinaryImage'

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
    return (
        <ImageGrid
            images={images}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        imageData={imageData}
                    />
                );
            }}
        />
    );
}