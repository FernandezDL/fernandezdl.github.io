type TechProps = {
    title: string;
    technologies: string[];
};

export default function Techologies({title, technologies}: TechProps){
    return(
        <div>
            <h3 className="text-3xl font-bold">
                {title}
            </h3>

            <div className="mt-6 space-y-3">
                {technologies.map((tech) => {
                    return (
                        <p key={tech} className="text-xs lg:text-lg">
                            - {tech}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
