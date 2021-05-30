import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceData from "../DataFiles/ServiceData";

const Services = () => {
    return(
     <>
       
       <div className="my-5">
          <h1 className="text-center">Our Services</h1>
       </div>

       <div className="container-fluid mb-5">
          <div className="row">
              <div className="col-10 mx-auto">
                 <div className="row gy-4">
                   {ServiceData.map( (values) => {
                        return(
                           <>
                            <ServiceCard key={values.id} imgsrc={values.imgsrc} title={values.title} />
                           </>
                        );
                   })}
                 </div>
              </div>
          </div>
       </div>
        
     </>
    );
}

export default Services;