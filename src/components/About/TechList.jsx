import {technologies} from '../../assets/data/technology-list'
import { TechItem } from './TechItem';

export function TechList() {
    return(
        <div id="technology-list" className='px-4 py-4'>
            <div className="text-3xl font-bold text-center">Technologies</div>
            <div className='flex flex-row flex-wrap justify-center py-4'>   
            {
                technologies
                .map((technology) => {
                    return (    
                        <TechItem key={technology.id} techName={technology.title} techSrc={technology.imgUrl} imgSize={"100px"}/>
                    )
                })
            }
            </div>
        </div>
    );
}