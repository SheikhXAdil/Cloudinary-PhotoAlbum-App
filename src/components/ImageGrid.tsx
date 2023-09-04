"use client";

import { SearchResult } from "@/app/page";
import { ReactNode, useEffect, useState } from "react";


export function ImageGrid({ images, getImage }: { images: SearchResult[]; getImage: (imageData: SearchResult) => ReactNode }) {

    const [maxColumns, setMaxColumns] = useState(3)
    const [windowWidth, setWindowWidth] = useState(1)

    useEffect(() => {

        setWindowWidth(window.innerWidth)

        if (window.innerWidth > 1024) {
            setMaxColumns(4)
        } else if (window.innerWidth > 768) {
            setMaxColumns(3)
        } else if (window.innerWidth > 400) {
            setMaxColumns(2)
        } else {
            setMaxColumns(1)
        }

    }, [windowWidth])


    function getColumns(colIndex: number) {
        return images.filter((resource, idx) => idx % maxColumns === colIndex);
    }

    if (maxColumns === 4) {
        return (
            <div className="grid grid-cols-4 gap-4">
                {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
                    (column, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                            {column.map(getImage)}
                        </div>
                    )
                )}
            </div>
        );
    } else if (maxColumns === 3) {
        return (
            <div className="grid grid-cols-3 gap-4">
                {[getColumns(0), getColumns(1), getColumns(2)].map(
                    (column, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                            {column.map(getImage)}
                        </div>
                    )
                )}
            </div>
        );
    } else if (maxColumns === 2) {
        return (
            <div className="grid grid-cols-2 gap-4">
                {[getColumns(0), getColumns(1)].map(
                    (column, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                            {column.map(getImage)}
                        </div>
                    )
                )}
            </div>
        );
    } else {
        return (
            <div className="grid grid-cols-1">
                {[getColumns(0)].map(
                    (column, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                            {column.map(getImage)}
                        </div>
                    )
                )}
            </div>
        );
    }
}