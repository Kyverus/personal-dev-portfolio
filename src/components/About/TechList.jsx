import { TechItem } from './TechItem';

export function TechList({technologies, className, itemClass, imgClass, labelHidden}) {

    return(
        <div id="technology-list" className={(className ? className + " " : "") + 'flex flex-row flex-wrap'}>
            {
                technologies
                .map((technology) => {
                    return (    
                        <TechItem key={technology.id} techName={technology.title} techSrc={technology.imgUrl} className={itemClass} imgClass={imgClass} labelHidden={labelHidden}/>
                    )
                })
            }
        </div>
    );
}