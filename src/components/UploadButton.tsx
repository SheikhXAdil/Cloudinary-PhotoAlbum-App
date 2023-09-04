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
                <div className="flex gap-2 tsxt-sm md:text-base">
                    <Upload className="w-5 md:w-6 h-5 md:h-6" />
                    Upload
                </div>
            </CldUploadButton>
        </Button>
    );
}