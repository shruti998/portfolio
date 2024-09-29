import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMediumCircle
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import shruti_ani from "../public/Images/Shruti_ani.jpg";
import ProjectCard from "../public/Components/Projects/ProjectCard.js";
import ReactTypingEffect from 'react-typing-effect';
import ProjectData from "../public/Components/Projects/ProjectData.js";
import ExperienceCard from '../public/Components/Experience/ExperienceCard.js';
import ExperienceData from "../public/Components/Experience/ExperienceData.js";
import EducationCard from '../public/Components/Education/EducationCard.js';
import EducationData from "../public/Components/Education/EducationData.js";
import Skills from "../public/Components/Skills/Skills.js"

 import Image from "next/image";
 import web1 from "../public/Images/java.png";
 import web2 from "../public/Images/mongo.png";
 import web3 from "../public/Images/react.png";
 import web4 from "../public/Images/node.png";


export default function Home() {


  return (
    <div >
      <Head>
        <title>Shruti Srivastava</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-teal-600 font-burtons text-xl">ShrutiSrivastava</h1>
            <ul className="flex items-center">
            
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1h5Ln_ugeZlJf6GPsmAtASsdAesFFovf6/view?usp=sharing" target="_blank" rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
           <ReactTypingEffect className="sm:text-2px md:text-6xl lg:text-10xl" text={['Hello!! I am']} speed={100} eraseDelay={700} />
            </h2>
            <h1 className="text-2xl py-2 dark:text-white md:text-3xl text-teal-600 font-bold">Shruti Srivastava</h1>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
             Aspiring Software Engineer
            </h3>
           
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/shruti-srivastava333/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            <a href="https://medium.com/@shruti.shrivastava333" target="_blank" rel="noreferrer"><AiFillMediumCircle/></a>
           <a href="https://github.com/shruti998" target="_blank" rel="noreferrer"> <AiFillGithub/></a>
             
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
             <Image  alt="#"src={shruti_ani} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-teal-600 text-2xl bold text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Hi there! 👋 I'm Shruti, an experienced Software Engineer with a background in application development. Currently pursuing a Master's in Information Systems at Northeastern University, I bring over 2 years of full-stack experience, specializing in Java, React.js, and cloud technologies. As a Google Certified Associate Cloud Engineer, I excel in designing scalable applications for optimal performance and user experience.

Throughout my career, I've led complex projects, including Java-based cloud-native applications and data migration for global clients. I thrive in collaborative environments, leveraging agile methodologies, automated testing, and DevOps to ensure efficient project delivery.

I'm dedicated to continuous learning, embracing new challenges and emerging technologies to stay ahead in the industry. I'm eager to apply my skills in software engineering ,cloud computing, and UI/UX design in a growth-oriented organization
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            If you have any potential opportunities that align with my interests and skills, please don't hesitate to contact me at <b className="text-teal-600">srivastava.shru@northeastern.edu.</b>
            </p>
          </div>
        <div>
          <div className="  py-10">
          <h1 className=" text-teal-600  text-2xl bold text-3xl py-1 dark:text-white my-8 ">Skills</h1>
          <Skills/>
        
          </div>
        <h1 className="text-teal-600 bold text-2xl text-3xl py-1  dark:text-white mt-10 ">Projects</h1>
        <div className="lg:flex gap-10 shadow-lg">
            
        {
                                ProjectData.map((val, ind) => {
                                    return <ProjectCard key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        type={val.type}
                                        tech={val.tech}
                                        link={val.link}
                                    />
                                })
                            }
        
        
          </div>
          <h1 className="text-teal-600 bold text-3xl py-1 dark:text-white mt-10">Experience</h1>
          <div className="lg:flex gap-10 content-start shadow" >
           
          {
                                ExperienceData.map((val, ind) => {
                                    return <ExperienceCard key={ind}
                                      
                                        title={val.title}
                                       cName={val.cName}
                                        tech={val.tech}
                                        date={val.date}
                                        
                                    />
                                })
                            }
        
        
          </div>
          <h1 className="text-teal-600 bold text-3xl py-1 dark:text-white mt-10">Education</h1>
          <div className="lg:flex gap-10 shadow-lg">
           
          {
                                EducationData.map((val, ind) => {
                                    return <EducationCard key={ind}
                                      
                                        title={val.title}
                                     uni={val.uni}
                                       gpa={val.gpa}
                                        date={val.date}
                                        
                                    />
                                })
                            }
        
        
          </div>
        </div>
        </section>
    
      </main>
    </div>
  );
}
