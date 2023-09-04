"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary"
import { useState } from 'react'


const EditPage = ({ searchParams: { publicId, width, height } }: { searchParams: { publicId: string, width: number, height: number } }) => {

    const [transformation, setTransformation] = useState<
        | undefined
        | "generative-fill"
        | "blur"
        | "grayscale"
        | "pixelate"
        | "bg-remove"
        | "tint"
    >();


    const [pendingPrompt, setPendingPrompt] = useState("");
    const [prompt, setPrompt] = useState("");

    return (
        <section>
            {/* <ForceRefresh /> */}

            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-xl md:text-4xl font-bold break-words">Edit {publicId}</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4">

                    <Button variant="ghost" onClick={() => setTransformation(undefined)}>
                        Clear All
                    </Button>

                    <Button
                        onClick={() => {
                            setTransformation("generative-fill");
                            setPrompt(pendingPrompt);
                        }}
                    >
                        Apply Generative Fill
                    </Button>

                    <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
                    <Button onClick={() => setTransformation("grayscale")}>
                        Convert to Gray
                    </Button>
                    <Button onClick={() => setTransformation("pixelate")}>
                        Pixelate
                    </Button>
                    <Button onClick={() => setTransformation("tint")}>
                        Tint
                    </Button>

                    <Button onClick={() => setTransformation("bg-remove")}>
                        Remove Background
                    </Button>
                </div>

                <div className="flex flex-col gap-4">
                    <Label>Generative Fill Prompt:</Label>
                    <Input
                        value={pendingPrompt}
                        className="w-1/2"
                        onChange={(e) => setPendingPrompt(e.currentTarget.value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">

                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg md:text-2xl font-bold">Original Picture</h1>
                        <CldImage src={publicId} width={400} height={300} alt="some image" priority />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg md:text-2xl font-bold">Modified Picture</h1>

                        {transformation === "generative-fill" && (
                            <CldImage
                                src={publicId}
                                width={1400}
                                height={900}
                                alt="some image"
                                crop="pad"
                                fillBackground={{
                                    prompt,
                                }}
                            />
                        )}

                        {transformation === "blur" && (
                            <CldImage
                                src={publicId}
                                width={400}
                                height={300}
                                effects={[{
                                    blur: "800"
                                }]}
                                alt="some image"
                            />
                        )}

                        {transformation === "grayscale" && (
                            <CldImage
                                src={publicId}
                                width={400}
                                height={300}
                                effects={[{
                                    grayscale: true
                                }]}
                                alt="some image"
                            />
                        )}

                        {transformation === "pixelate" && (
                            <CldImage
                                src={publicId}
                                width={402}
                                height={302}
                                effects={[{
                                    pixelate: true
                                }]}
                                alt="some image"
                            />
                        )}

                        {transformation === "tint" && (
                            <CldImage
                                src={publicId}
                                width={400}
                                height={300}
                                effects={[{
                                    tint: "equalize:80:blue:blueviolet"
                                }]}
                                alt="some image"
                            />
                        )}

                        {transformation === "bg-remove" && (
                            <CldImage
                                src={publicId}
                                width={400}
                                height={300}
                                removeBackground
                                alt="some image"
                            />
                        )}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default EditPage
