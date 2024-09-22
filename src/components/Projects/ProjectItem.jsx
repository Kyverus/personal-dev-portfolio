import { DarkContext } from '../../App';
import { useContext } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import githubLogoLight from '../../assets/icons/darkmode/github-light-icon.svg';
import githubLogoDark from '../../assets/icons/darkmode/github-dark-icon.svg';
import { TechList } from '../About/TechList';
import { technologies } from '../../assets/data/technology-list';

export function ProjectItem({project, className}) {
    const dark = useContext(DarkContext);

    const projectTechs = technologies.filter((technology)=>{
        const techs = project.technologies;
        return techs.includes(technology.title);
    })

    return (
        <div className={"flex bg-light-tertiary dark:bg-dark-tertiary m-2 rounded-xl group/{overlay} relative" + (className ? " " + className : "")}>
            <div id="project-front" className='flex-col w-full py-2 space-y-1 px-4'>
                <div className='flex items-center space-x-1'>
                    <div className='flex-grow text-xl font-bold text-left'>{project.title}</div>
                    <a href={project.repoURL} target="_blank">
                        <img className="size-7" src={dark ? githubLogoLight : githubLogoDark} alt = "github logo" />
                    </a>
                    <a href={project.repoURL} target="_blank">
                        <ArrowTopRightOnSquareIcon color={dark? "#ffffff" : "#000000"} className='size-8'/>
                    </a>
                </div>
                <div className='text-left min-h-14'>{project.description}</div>
                <div>
                    <TechList technologies={projectTechs} className={"justify-left space-x-1"} itemClass={"p-1 rounded-lg"} imgClass={"size-7 rounded-xl"} labelHidden={true}/>
                </div>  
            </div>
        </div>
    );
}