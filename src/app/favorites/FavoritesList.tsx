"use client";

import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/ImageGrid";
import { SearchResult } from "@/app/gallery/page";
import CloudinaryImage from '@/components/CloudinaryImage'

export default function FavoritesList({
    initialResources,
}: {
    initialResources: SearchResult[];
}) {
    const [resources, setResources] = useState(initialResources);

    useEffect(() => {
        setResources(initialResources);
    }, [initialResources]);

    return (
        <ImageGrid
            images={resources}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        imageData={imageData}
                        onUnheart={(unheartedResource) => {
                            setResources((currentResources) =>
                                currentResources.filter(
                                    (resource) =>
                                        resource.public_id !== unheartedResource.public_id
                                )
                            );
                        }}
                    />
                );
            }}
        />
    );
}