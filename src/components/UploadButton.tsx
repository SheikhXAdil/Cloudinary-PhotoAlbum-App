"use client";

import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Upload } from 'lucide-react'


export default function UploadButton() {
    const router = useRouter();

    return (
        <Button asChild>
            <CldUploadButton
                onUpload={() => {
                    setTimeout(() => {
                        router.refresh();
                    }, 1000);
                }}
                uploadPreset="m9dwtz8q"
            >
                <div className="flex gap-2">
                    <Upload />
                    Upload
                </div>
            </CldUploadButton>
        </Button>
    );
}