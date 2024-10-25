export function CustomLink({path, children, onClick, download}){
    return(
        <a 
        href={path} 
        className='rounded-md px-3 py-2 font-medium text-base md:text-lg block md:inline
        text-dark-2 hover:text-black dark:text-light-2 dark:hover:text-white'
        onClick={onClick}
        download={download}
        >
            {children}
        </a>
    )
}