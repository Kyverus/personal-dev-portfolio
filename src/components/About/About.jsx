import { Banner } from "./Banner";
import { TechList } from "./TechList";

export function About(){
    return (
        <div className="min-h-dvh xl:container xl:px-28 pt-36 mx-auto space-y-10 text-black dark:text-white" id="about">
            <Banner />
            <TechList />
        </div>
    );
}