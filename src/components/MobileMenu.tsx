"use client"
import {
    Menu,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react'
import Link from "next/link"
import { Image, Folder, Heart } from 'lucide-react'



export default function MobileMenu() {

    const [open, setOpen] = useState(false);

    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-8 h-8 p-1 mt-[0.7rem]">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href={"/"}>
                            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => setOpen(false)}>
                                <Image />
                                Gallery
                            </Button>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href={"/favorites"}>
                            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => setOpen(false)}>
                                <Heart />
                                Favorites
                            </Button>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href={"/albums"}>
                            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => setOpen(false)}>
                                <Folder />
                                View Albums
                            </Button>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    )
}
