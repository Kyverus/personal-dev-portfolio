import { Banner } from "./Banner";
import { TechList } from "./TechList";
import {technologies} from '../../assets/data/technology-list'

export function About(){
    return (
        <div className="min-h-dvh xl:container xl:px-28 pt-36 mx-auto space-y-10 text-black dark:text-white" id="about">
            <Banner />
            <div className="text-3xl font-bold text-center">TECHNOLOGIES</div>
            <TechList technologies={technologies} className={"justify-center"} itemClass={"p-3 m-2 rounded-3xl border-8"} imgClass={"size-20 rounded-2xl"}/>
        </div>
    );
}