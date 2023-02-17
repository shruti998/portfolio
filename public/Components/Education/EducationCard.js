import React from 'react';



const ExperienceCard = (props) => {
    return (
        <>


       
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
  
          
           
            <h3 className="  text-lg font-medium pt-8 pb-2 text-teal-600 ">
             {  props.title}, {props.gpa}
              </h3>
            
         
              <p className="py-2 text-gray-300">
              { props.uni}
              </p>
              <p className="py-2 text-gray-300">
              { props.date}
              </p>
             
            
            
            
              
              
              
            </div>
       


        </>
    )
}
export default ExperienceCard;

