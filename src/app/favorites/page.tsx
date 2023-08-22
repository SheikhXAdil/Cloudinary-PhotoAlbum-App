import cloudinary from "cloudinary"
import { SearchResult } from '@/app/page'
import FavoritesList from "@/components/FavoritesList"

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

                <FavoritesList initialResources={results.resources} />

            </div>
        </section>
    )
}

export default FavoritesPage
