"use client"

import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"
import { useState } from 'react'


const EditPage = ({ searchParams: { publicId } }: { searchParams: { publicId: string } }) => {

    const [transformation, setTransformation] = useState<
        | undefined
        | "generative-fill"
        | "blur"
        | "grayscale"
        | "pixelate"
        | "bg-remove"
    >();

    return (
        <section>
            {/* <ForceRefresh /> */}

            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Edit {publicId}</h1>
                </div>

                <div className="flex gap-4">
                    <Button variant="ghost" onClick={() => setTransformation(undefined)}>
                        Clear All
                    </Button>

                    <div className="flex flex-col gap-4">
                        <Button
                            onClick={() => {
                                setTransformation("generative-fill");
                            }}
                        >
                            Apply Generative Fill
                        </Button>

                    </div>

                    <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
                    <Button onClick={() => setTransformation("grayscale")}>
                        Convert to Gray
                    </Button>
                    <Button onClick={() => setTransformation("pixelate")}>
                        Pixelate
                    </Button>

                    <Button onClick={() => setTransformation("bg-remove")}>
                        Remove Background
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-12">
                    <CldImage src={publicId} width="400" height="300" alt="some image" />

                    {transformation === "generative-fill" && (
                        <CldImage
                            src={publicId}
                            width="400"
                            height="300"
                            alt="some image"
                            crop="pad"
                            fillBackground
                        />
                    )}

                    {transformation === "blur" && (
                        <CldImage
                            src={publicId}
                            width="400"
                            height="300"
                            blur="800"
                            alt="some image"
                        />
                    )}

                    {transformation === "grayscale" && (
                        <CldImage
                            src={publicId}
                            width="400"
                            height="300"
                            grayscale
                            alt="some image"
                        />
                    )}

                    {transformation === "pixelate" && (
                        <CldImage
                            src={publicId}
                            width="400"
                            height="300"
                            pixelate
                            alt="some image"
                        />
                    )}

                    {transformation === "bg-remove" && (
                        <CldImage
                            src={publicId}
                            width="400"
                            height="300"
                            removeBackground
                            alt="some image"
                        />
                    )}

                </div>
            </div>
        </section>
    )
}

export default EditPage
