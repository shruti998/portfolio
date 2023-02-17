import React from 'react';

const ProjectCard = () => {
    return (
        <>

{/* 
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt="props.imgsrc" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.tech}</p>
                        <a href="https://github.com/dscnsec/MaternalWomenHealthcare" target="_blank" className="btnn " rel="noopener noreferrer"> <GitHubIcon /> Github Link </a>

                    </div>

                </div>
            </div> */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              {/* <Image src={props.imgsrc} width={100} height={100} />  */}
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>


        </>
    )
}
export default ProjectCard;

