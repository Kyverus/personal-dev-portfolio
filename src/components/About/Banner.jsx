import { useState, useEffect } from "react";
import headerImg from '../../assets/header-picture.jpg';
import resumeFile from '../../assets/data/pacibe-resume.pdf';

export function Banner(){
    return (
        <div id="banner" className="bg-[#B8E0D0] dark:bg-[#316F56]">
            <div className="lg:flex py-10 px-10">
                <div className="lg:w-2/3">
                    <div className="rounded-2xl p-6 space-y-8">
                        <div className="mt-10 text-5xl font-bold text-left">Web Developer</div>
                        <div className="text-md text-justify indent-12 tracking-wider">
                            Hello, I'm Kirlian Pacibe, An Aspiring Software Developer/Engineer. I have fundamental knowledge in building simple and functional websites as well as applications.
                            I have made personal projects regarding web and desktop applications futher showcased below.
                        </div>
                        <div className="text-lg font-bold">
                            <a href={resumeFile} download="PACIBE RESUME">Download Resume</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 flex justify-center">
                    <img className="animate-updown size-[350px] object-scale-down rounded-3xl" src={headerImg}/>
                </div>
            </div>  
        </div>
    )
}