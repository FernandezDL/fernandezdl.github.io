"use client"

import {useState} from "react";
import type {ProblemSection} from "@/types/types";

type ProjectChallengesProps = {
    title: string;
    challenges: ProblemSection[];
};

export  default function Challenge({title, challenges}: ProjectChallengesProps) {
    const [openItem, setOpenItem] = useState<string|null>(null);

    function toggleItem(id: string) {
        setOpenItem((current) =>
            current === id ? null : id
        );
    }
    
    return(
        <div>
            <h3 className="text-3xl font-bold">
                {title}
            </h3>

            <div className="mt-6 space-y-3">
                {challenges.map((challenge) => {
                    const isOpen = openItem === challenge.id;

                    return (
                        <div key={challenge.id} className="border-b border-border">
                            <button
                                type="button"
                                onClick={() => toggleItem(challenge.id)}
                                className="flex w-full items-center justify-between py-4 text-left"
                                aria-expanded={isOpen}
                            >
                                <span className="text-lg font-bold">
                                    {challenge.title}
                                </span>

                                <span className="text-2xl">
                                    {isOpen ? "−" : "+"}
                                </span>
                            </button>

                            {isOpen && (
                                <div className="pb-6">
                                    <p className="leading-relaxed">
                                        {challenge.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}