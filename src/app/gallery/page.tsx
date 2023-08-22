import UploadButton from '@/components/UploadButton'
import cloudinary from "cloudinary"
import GalleryGrid from './GalleryGrid'
import { ForceRefresh } from '@/components/ForceRefresh'

export type SearchResult = {
    public_id: string,
    tags: string[]
    width: number,
    height: number
}

const GalleryPage = async () => {

    const results = (await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('uploaded_at', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] }

    return (
        <section>
            <ForceRefresh />

            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <UploadButton />
                </div>

                <GalleryGrid images={results.resources} />

            </div>
        </section>
    )
}

export default GalleryPage
