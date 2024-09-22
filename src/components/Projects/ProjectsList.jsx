import { ProjectItem } from "./ProjectItem"

export function ProjectsList({projects, className}){
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" + ((className) ? " " + className : "")} id="projects-list">
        {
            projects.map((project) => {
                return (
                    <ProjectItem project={project} key={project.id} />
                )
            })
        }
        </div>
    );
}