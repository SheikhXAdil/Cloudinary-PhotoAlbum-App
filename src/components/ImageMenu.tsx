import {
    Menu,
    Folder
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import AddToAlbum from "./AddToAlbum"
import { SearchResult } from "@/app/page"
import { useState } from 'react'

export default function ImageMenu({ image }: { image: SearchResult }) {

    const [open, setOpen] = useState(false);

    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-6 h-6 p-1">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuItem asChild>
                        <AddToAlbum image={image} onClose={() => setOpen(false)} />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    )
}
