"use client"

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from "react"


type UploadResult = {
  event: string,
  info: {
    public_id: string
  }
}

export default function Home() {

  const [imageId, setImageId] = useState("")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id)
        }}
        uploadPreset="m9dwtz8q" />

      {imageId &&
        <CldImage
          width="960"
          height="600"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />}
    </main>
  )
}
