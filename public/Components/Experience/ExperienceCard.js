import React from 'react';
import Image from "next/image";
import tcs from "../../Images/tcs.png"


const ExperienceCard = (props) => {
    return (
        <>


       
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
  
          
      
            <h3 className="  text-lg font-medium pt-8 pb-2 text-teal-600 ">
             {  props.title}
              </h3>
            
         
              <p className="py-2 text-gray-300">
              { props.cName}
              </p>
              <p className="py-2 text-gray-300">
              { props.date}
              </p>
             
            
              <p className="text-gray-800 py-1"> <b>Technologies Used: </b>{props.tech}</p>
            
              <p className="text-gray-800 py-1">  Worked on an ETL( Extract Transform Load) project to migrate the data in IBM COS and the metadata
in MongoDB. Applied XML in the java application to eliminate the hard-codded values and to make the code more
dynamic</p>
               
            
              
              
            </div>
       


        </>
    )
}
export default ExperienceCard;

