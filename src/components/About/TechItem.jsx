export function TechItem({techName, techSrc, imgSize}){
    return(
        <span id="technology-item" className="p-3 m-2 rounded-3xl bg-light-secondary dark:bg-dark-secondary border-8 border-light-tertiary dark:border-dark-tertiary hover:shadow-[0_0_10px_4px_rgb(0,0,0,0.3)] hover:dark:shadow-light-tertiary hover:shadow-dark-tertiary">
            <img className="rounded-2xl" src={techSrc} width={imgSize} height={imgSize} alt = "" onDragStart={(e) => {e.preventDefault();}}/>
            <h5 className="text-center">{techName}</h5>
        </span>
    );
}