import type { Member } from "@/types/types";

type MembersProps = {
    title: string;
    members: Member[] | null;
};

export default function Members({title, members}: MembersProps){
    return(
        <div>
            <h3 className="text-3xl font-bold">
                {title}
            </h3>

            <div className="mt-6 space-y-3">
                {members?.map((member) => {
                    return (
                        <div key={member.name} className="text-sm lg:text-lg">
                            <p className="font-bold">- {member. name}</p>
                            <p className="text-xs lg:text-md">{member.role}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
