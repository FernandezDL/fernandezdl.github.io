"use client"

import { useState } from "react";
import type { RoleSection } from "@/types/types";

type MyRoleProps = {
    title: string;
    roles: RoleSection[];
};

export default function MyRole({title, roles}: MyRoleProps){
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
                {roles.map((role) => {
                    const isOpen = openItem === role.id;

                    return (
                        <div key={role.id} className="border-b border-border">
                            <button type="button" onClick={() => toggleItem(role.id)} aria-expanded={isOpen}
                                className="flex w-full items-center justify-between py-4 text-left"
                            >
                                <span className="text-lg font-bold">
                                    {role.title}
                                </span>

                                <span className="text-2xl">
                                    {isOpen ? "−" : "+"}
                                </span>
                            </button>

                            {isOpen && (
                                <div className="pb-6">
                                    {role.tasks.map((task) => (
                                        <p key={task} className="text-xs lg:text-lg">
                                            - {task}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}