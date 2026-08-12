type ProjectOverviewProps = {
    overview: string;
};

export default function ProjectOverview({overview}: ProjectOverviewProps) {
    return(
        <div>
            <h3 className="text-3xl font-bold">
                Overview
            </h3>

            <p className="mt-4 mb-8">{overview}</p>
            
            <p>Pics to be showed here c:</p>
        </div>
    );
}