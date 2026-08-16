import type { GoalSection } from "@/types/types";

type GoalsProps = {
    title: string;
    goal: GoalSection;
};

export default function Goals({title, goal}: GoalsProps){
    return(
        <div>
            <h3 className="text-3xl font-bold">
                {title}
            </h3>

            <p className="mt-5 text-sm lg:text-lg">{goal.description}</p>

            <div className="mt-6 space-y-3">
                {goal.objectives.map((goalDesc) => {
                    return (
                        <p key={goalDesc} className="text-xs lg:text-lg">
                            - {goalDesc}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
