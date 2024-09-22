import { DarkContext } from '../../App';
import { useContext } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import githubLogoLight from '../../assets/icons/darkmode/github-light-icon.svg';
import githubLogoDark from '../../assets/icons/darkmode/github-dark-icon.svg';

export function ProjectItem({project}) {
    const dark = useContext(DarkContext);

    return (
        <div className="flex bg-light-tertiary dark:bg-dark-tertiary m-2 rounded-xl">
            <div id="project-front" className='group/{overlay}'>
                 <div className='flex items-center space-x-1 py-2 px-4'>
                    <div className='flex-grow text-xl font-bold'>{project.title}</div>
                    <a href={project.repoURL} target="_blank">
                        <img className="size-7" src={dark ? githubLogoLight : githubLogoDark} alt = "github logo" />
                    </a>
                    <a href={project.repoURL} target="_blank">
                        <ArrowTopRightOnSquareIcon color={dark? "#ffffff" : "#000000"} className='size-8'/>
                    </a>
                </div>
                <div className='flex-col relative'>
                    <div id="image-overlay" className='flex justify-center absolute h-full w-full transition-all duration-500 group-hover/{overlay}:bg-light-green/90 dark:group-hover/{overlay}:bg-dark-green/90 rounded-xl'>
                        <div className='absolute w-[90%] h-0 p-3 rounded-xl top-0 font-bold transition-all duration-500 opacity-0 group-hover/{overlay}:opacity-100 group-hover/{overlay}:top-1/4 '>
                            {project.description}
                        </div>
                    </div>
                    <div className='p-3'>
                        <img className='rounded-xl' src={project.imgURL} alt="" />
                        <span>Technologies:</span>
                    </div>

                </div>      
            </div>
        </div>
    );
}