"use client";

import { useState } from "react";
import type { Project, Tab } from "@/types/types";
import TabButton from "./Tabs/TabButton";
import ProjectOverview from "@/components/projects/Tabs/Overview";
import Challenge from "@/components/projects/Tabs/Challenge";
import Image from "next/image";
import ItchIcon from "@/components/Icons/itch";

type ProjectCaseStudyProps = {
    project: Project;
    onClose: () => void;
};

export default function ProjectCaseStudy({project, onClose}: ProjectCaseStudyProps) {
    const [activeTab, setActiveTab] = useState<Tab>("overview");

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" 
             onClick={onClose}>
            <div className="h-[90vh] w-[90%] max-w-6xl overflow-y-auto rounded-md bg-background"
                onClick={(event) => event.stopPropagation()}>

                {/* HEADER */}
                <div className="p-8">
                    <button onClick={onClose} className="float-right text-4xl">
                        ×
                    </button>

                    {/* Image */}
                    <div className="relative mt-9 h-[250px] w-full sm:h-[400px]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="rounded-md object-cover"
                        />
                    </div>

                    <h2 className="text-5xl font-bold">
                        {project.title}
                    </h2>

                    <p className="mt-2">
                        {project.description}
                    </p>
                    
                    <div className="flex space-x-2">
                        {project.hostedLink && (
                            <a href={project.hostedLink}>
                                <ItchIcon/>
                            </a>
                        )}
                    </div>
                </div>


                {/* TABS */}
                <div className="sticky top-0 z-10 flex overflow-x-auto border-y border-border bg-background">
                    <TabButton
                        text="Overview"
                        active={activeTab === "overview"}
                        onClick={() => setActiveTab("overview")}
                    />

                    <TabButton
                        text="Challenges"
                        active={activeTab === "challenges"}
                        onClick={() => setActiveTab("challenges")}
                    />

                    <TabButton
                        text="My Role"
                        active={activeTab === "role"}
                        onClick={() => setActiveTab("role")}
                    />

                    <TabButton
                        text="Goals"
                        active={activeTab === "goals"}
                        onClick={() => setActiveTab("goals")}
                    />

                    <TabButton
                        text="Technologies"
                        active={activeTab === "technologies"}
                        onClick={() => setActiveTab("technologies")}
                    />
                </div>
                
                {/* TAB CONTENT */}
                <div className="p-8">
                    {activeTab === "overview" && (
                        <ProjectOverview overview={project.overview} />
                    )}

                    {activeTab === "challenges" && (
                        <Challenge challenges={project.problems}/>
                    )}

                    {activeTab === "role" && (
                        <div>
                            <h3 className="text-3xl font-bold">
                                My Role
                            </h3>
                        </div>
                    )}

                    {activeTab === "goals" && (
                        <div>
                            <h3 className="text-3xl font-bold">
                                Goals
                            </h3>
                        </div>
                    )}

                    {activeTab === "technologies" && (
                        <div>
                            <h3 className="text-3xl font-bold">
                                Technologies used
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}