import projects from "../../assets/data/project-contents";
import { ProjectsList } from "./ProjectsList";

export function Projects() {
    return (
        <div className="min-h-dvh xl:container mx-auto xl:px-28 pt-36 pb-8 space-y-10 text-black dark:text-white" id="projects">
            <div className="text-3xl font-bold text-center px-2">PROJECTS</div>
            <ProjectsList projects={projects}/>
        </div>
    );
}