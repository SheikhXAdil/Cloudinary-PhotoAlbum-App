import CloudinaryImage from '@/components/CloudinaryImage'
import cloudinary from "cloudinary"
import { SearchResult } from '@/app/gallery/page'
import { ForceRefresh } from '@/components/ForceRefresh'

const FavoritesPage = async () => {

    const results = (await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('uploaded_at', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] }

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Favorites</h1>
                </div>

                <div className='grid grid-cols-4 gap-4'>
                    {results.resources.map((result) => {
                        return (
                            <CloudinaryImage key={result.public_id} imageData={result} path="/favorites" />
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default FavoritesPage
