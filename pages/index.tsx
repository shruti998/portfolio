import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import shruti_ani from "../public/Images/Shruti_ani.jpg";
import ProjectCard from "../public/Components/Projects/ProjectCard.js"
// import code from "../public/code.png";
// import design from "../public/design.png";
// import consulting from "../public/consulting.png";
 import Image from "next/image";
// import web1 from "../public/web1.png";
// import web2 from "../public/web2.png";
// import web3 from "../public/web3.png";
// import web4 from "../public/web4.png";
// import web5 from "../public/web5.png";
// import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Shruti Srivastava</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedByShruti</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Shruti Srivastava
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
Hello
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
             <Image src={shruti_ani} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I am a creative and versatile Information Systems graduate student at <span className="text-teal-500">Northeastern University </span> with two years of work experience as a Software Engineer at Tata Consultancy Services. I have expertise in Java, Data Structures and Algorithms, Web Development, Database Management, Object Oriented Programming, and UX Design. I am interested in full-stack development and UX Engineer roles. If you have any opportunities for me, please feel free to reach out to me at srivastava.shru@northeastern.edu.
            
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
        <div>
        <h1 className="text-3xl py-1 dark:text-white mt-10">Projects</h1>
        <div className="lg:flex gap-10">
            
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
        
        
          </div>
          <h1 className="text-3xl py-1 dark:text-white mt-10">Experience</h1>
          <div className="lg:flex gap-10">
           
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
        
        
          </div>
          <h1 className="text-3xl py-1 dark:text-white mt-10">Education</h1>
          <div className="lg:flex gap-10">
           
       <ProjectCard/>
       <ProjectCard/>
       <ProjectCard/>
        
        
          </div>
        </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              /> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}