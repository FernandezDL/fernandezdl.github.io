"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type ProjectOverviewProps = {
    overview: string;
    photos: string[]| null;
    videos: string[] | null;
    title: string;
};

function getYouTubeEmbedUrl(videoUrl: string): string | null {
    try {
        const url = new URL(videoUrl);

        if (url.hostname === "youtu.be") {
            return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
        }

        if (url.hostname === "youtube.com" || url.hostname === "www.youtube.com") {
            const videoId = url.searchParams.get("v");

            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }
        }

        return null;
    } catch {
        return null;
    }
}

export default function ProjectOverview({overview, photos, title, videos}: ProjectOverviewProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        }

        if (selectedImage) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

    return(
        <div>
            <h3 className="text-3xl font-bold">
                {title}
            </h3>

            <p className="mt-4 mb-8">{overview}</p>
            
            {photos && photos.length > 0 && (
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Main image */}
                    <div className="relative min-h-[300px] overflow-hidden rounded-md md:row-span-2 md:min-h-[500px]" onClick={() => setSelectedImage(photos[0])}>
                        <Image
                            src={photos[0]}
                            alt="Project screenshot 1"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Secondary images */}
                    {photos.slice(1).map((photo, index) => (
                        <div
                            key={photo}
                            className="relative min-h-[240px] overflow-hidden rounded-md"
                            onClick={() => setSelectedImage(photo)}
                        >
                            <Image
                                src={photo}
                                alt={`Project screenshot ${index + 2}`}
                                fill
                                className="
                                    object-cover
                                    transition-transform
                                    duration-300
                                    hover:scale-[1.02]
                                "
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Videos */}
            {videos && videos.length > 0 && (
                <div className="mt-8 grid grid-cols-1 gap-6">
                    {videos.map((video) => {
                        const embedUrl = getYouTubeEmbedUrl(video);

                        if (!embedUrl) {
                            return null;
                        }

                        return (
                            <div
                                key={video}
                                className="aspect-video w-full overflow-hidden rounded-md"
                            >
                                <iframe
                                    src={embedUrl}
                                    title={`${title} gameplay video`}
                                    className="h-full w-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        );
                    })}
                </div>
            )}
            
            {/* LIGHTBOX */}
            {selectedImage && (
                <div
                    className="
                        fixed inset-0 z-[300]
                        flex items-center justify-center
                        bg-black/80
                        p-4
                        backdrop-blur-sm
                    "
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        type="button"
                        onClick={() => setSelectedImage(null)}
                        className="
                            absolute right-6 top-6
                            z-10
                            text-4xl
                            text-white
                        "
                        aria-label="Close image"
                    >
                        ×
                    </button>

                    <div
                        className="
                            relative
                            h-[90vh] w-[95vw]
                            max-w-7xl
                        "
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Expanded project screenshot"
                            fill
                            sizes="95vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}