import { ProjectItem } from "./ProjectItem"
import { useEffect } from 'react';

export function ProjectsList({projects, className}){
    
    useEffect(()=>{
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    entry.target.classList.remove("opacity-0", "translate-y-8");
                    observer.unobserve(entry.targer);
                }
            })
        },
        {
            threshold:1,
        })

        document.querySelectorAll(".project-item").forEach(item => {
            observer.observe(item);
        })

        return () => {
            document.querySelectorAll(".project-item").forEach(item => {
                observer.unobserve(item);
            })
        }
    }, [projects]);

    return (
        <div className={"grid grid-cols-1 lg:grid-cols-2" + ((className) ? " " + className : "")} id="projects-list">
        {
            projects.map((project,i) => {
                return (
                    <ProjectItem project={project} key={i} className={"project-item opacity-0 translate-y-8 transition-all ease-in-out duration-300"}/>
                )
            })
        }
        </div>
    );
}