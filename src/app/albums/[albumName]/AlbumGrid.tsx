"use client";

import { ImageGrid } from "@/components/ImageGrid";
import CloudinaryImage from "@/components/CloudinaryImage";
import { SearchResult } from "@/app/gallery/page";

export default function AlbumGrid({ images }: { images: SearchResult[] }) {
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