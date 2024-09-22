export function TechItem({techName, techSrc, className, imgClass="80px", labelHidden = false}){
    return(
        <span id="technology-item" className={"bg-light-secondary dark:bg-dark-secondary border-light-tertiary dark:border-dark-tertiary hover:shadow-[0_0_10px_4px_rgb(0,0,0,0.3)] hover:dark:shadow-light-tertiary hover:shadow-dark-tertiary" + (className ? " " + className : "")}>
            <img className={(imgClass? " " + imgClass : "")} src={techSrc} alt = "" onDragStart={(e) => {e.preventDefault();}}/>
            <div className={"text-center" + (labelHidden? " hidden" : "")}>{techName}</div>
        </span>
    );
} 