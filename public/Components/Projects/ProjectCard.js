import React from 'react';
import Image from "next/image";


const ProjectCard = (props) => {
    return (
        <>


       
        <div className="text-center shadow-lg  shadow p-10 rounded-xl my-10  dark:bg-white flex-1">
  
               <Image src={props.imgsrc}  />  
           
            <h3 className="  text-lg font-medium pt-8 pb-2 text-teal-600 ">
              <a href={props.link}>{  props.title}</a>
              </h3>
            
         
              <p className="py-2 text-gray-300">
              { props.type}
              </p>
             
            
              <p className="text-gray-800 py-1"> <b>Technologies Used: </b>{props.tech}</p>
            
              <a href={props.link}></a>
              
            </div>
       


        </>
    )
}
export default ProjectCard;

