import CloudinaryImage from '@/components/CloudinaryImage'
import UploadButton from '@/components/UploadButton'
import cloudinary from "cloudinary"

type SearchResult = {
    public_id: string,
    width: number,
    height: number
}

const GalleryPage = async () => {

    const results = (await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('uploaded_at', 'desc')
        .max_results(10)
        .execute()) as { resources: SearchResult[] }

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <UploadButton />
                </div>

                <div className='grid grid-cols-4 gap-4'>
                    {results.resources.map((result) => {
                        return (
                            <CloudinaryImage
                                key={result.public_id}
                                src={result.public_id}
                                width={result.width}
                                height={result.height}
                                alt="Image of something"
                            />
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default GalleryPage
