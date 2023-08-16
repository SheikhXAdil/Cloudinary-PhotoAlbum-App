"use client";

import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Upload } from 'lucide-react'

type UploadResult = {
    event: string,
    info: {
        public_id: string
    }
}

export default function UploadButton() {
    const router = useRouter();

    return (
        <Button asChild>
            <CldUploadButton
                onUpload={(result: UploadResult) => {
                    setTimeout(() => {
                        router.refresh();
                    }, 2000);
                }}
                uploadPreset="giomsr4s"
            >
                <div className="flex gap-2">
                    <Upload />
                    Upload
                </div>
            </CldUploadButton>
        </Button>
    );
}