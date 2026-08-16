"use client";

import { useState } from "react";
import type { Project, Tab, TabTitles } from "@/types/types";
import TabButton from "./Tabs/TabButton";
import ProjectOverview from "@/components/projects/Tabs/Overview";
import Challenge from "@/components/projects/Tabs/Challenge";
import MyRole from "./Tabs/MyRole";
import Goals from "./Tabs/Goals";
import Techologies from "./Tabs/Technologies";
import Members from "./Tabs/Members";
import Image from "next/image";
import ItchIcon from "@/components/Icons/itch";
import PersonIcon from "../Icons/person";
import GithubIcon from "../Icons/github";

type ProjectCaseStudyProps = {
    project: Project;
    onClose: () => void;
    tabTitles: TabTitles
};

export default function ProjectCaseStudy({project, onClose, tabTitles}: ProjectCaseStudyProps) {
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

                    <h2 className="text-5xl font-bold mt-2">
                        {project.title}
                    </h2>

                    <div className="flex space-x-2 mt-2">
                        <p>{project.description} -</p>

                        <div className="flex">
                            <p>{project.members?.length ? project.members.length : 1}</p>

                            <PersonIcon/>
                        </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-2">
                        {project.hostedLink && (
                            <a href={project.hostedLink} target="_blank" rel="noopener noreferrer">
                                <ItchIcon/>
                            </a>
                        )}

                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <GithubIcon/>
                            </a>
                        )}
                    </div>
                </div>


                {/* TABS */}
                <div className="sticky top-0 z-10 flex overflow-x-auto border-y border-border bg-background">
                    <TabButton
                        text={tabTitles[0].shortTitle}
                        active={activeTab === "overview"}
                        onClick={() => setActiveTab("overview")}
                    />

                    <TabButton
                        text={tabTitles[1].shortTitle}
                        active={activeTab === "challenges"}
                        onClick={() => setActiveTab("challenges")}
                    />

                    <TabButton
                        text={tabTitles[2].shortTitle}
                        active={activeTab === "role"}
                        onClick={() => setActiveTab("role")}
                    />

                    <TabButton
                        text={tabTitles[3].shortTitle}
                        active={activeTab === "goals"}
                        onClick={() => setActiveTab("goals")}
                    />

                    <TabButton
                        text={tabTitles[4].shortTitle}
                        active={activeTab === "technologies"}
                        onClick={() => setActiveTab("technologies")}
                    />

                    {project.members?.length && (
                        <TabButton
                            text={tabTitles[5].shortTitle}
                            active={activeTab === "members"}
                            onClick={() => setActiveTab("members")}
                        />
                    )}
                </div>
                
                {/* TAB CONTENT */}
                <div className="p-8">
                    {activeTab === "overview" && (
                        <ProjectOverview overview={project.overview} photos={project.photos} title={tabTitles[0].title ? tabTitles[0].title : tabTitles[0].shortTitle} />
                    )}

                    {activeTab === "challenges" && (
                        <Challenge title={tabTitles[1].title ? tabTitles[1].title : tabTitles[1].shortTitle} challenges={project.problems}/>
                    )}

                    {activeTab === "role" && (
                        <MyRole title={tabTitles[2].title ? tabTitles[2].title : tabTitles[2].shortTitle} roles={project.myRole} />
                    )}

                    {activeTab === "goals" && (
                        <Goals title={tabTitles[3].title ? tabTitles[3].title : tabTitles[3].shortTitle} goal={project.goals} />
                    )}

                    {activeTab === "technologies" && (
                        <Techologies title={tabTitles[4].title ? tabTitles[4].title : tabTitles[4].shortTitle} technologies={project.technologies}/>
                    )}

                    {activeTab === "members" && (
                        <Members title={tabTitles[5].title ? tabTitles[5].title : tabTitles[5].shortTitle} members={project.members}/>
                    )}
                </div>
            </div>
        </div>
    );
}