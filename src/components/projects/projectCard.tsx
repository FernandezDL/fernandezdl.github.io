"use client"

import Image from "next/image";
import type { Project, TabTitles } from "@/types/types";
import ProjectCaseStudy from "@/components/projects/projectCaseStudy";
import {useState, useEffect} from "react";

type ProjectsProps = {
    projectList: Project[];
    tabTitles: TabTitles;
};

export default function Projects({ projectList, tabTitles }: ProjectsProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);
    
    return (
        <>
            <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {projectList.map((project) => (
                    <button key={project.number} type="button" onClick={() => setSelectedProject(project)}
                         className=" w-full overflow-hidden rounded-md border-2 border-border 
                            transition-[background-color,border-color,translate] duration-(--hover-duration) ease-(--hover-ease)
                            hover:translate-y-(--hover-offset) hover:border-accent cursor-pointer"
                    >
                        <div className="relative h-[250px] lg:h-[350px] w-full">
                            <Image src={project.image} alt={project.title} fill
                                sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"
                            />
                        </div>
    
                        <div className="p-4">
                            <div className="mb-2 flex items-center justify-between text-md lg:text-lg font-bold text-white">
                                <h3>{project.title}</h3>
                                <p>{project.year}</p>
                            </div>
    
                            <p className="text-xs lg:text-sm font-light text-white text-left">
                                {project.description}
                            </p>
    
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border-2 border-primary px-2 py-1 text-xs lg:text-md text-white"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {selectedProject && (
                <ProjectCaseStudy
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    tabTitles={tabTitles}
                />
            )}
        </>
    );
}