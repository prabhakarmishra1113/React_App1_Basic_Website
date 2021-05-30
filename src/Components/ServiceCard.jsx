import React from "react";
import {NavLink} from "react-router-dom";

const ServiceCard = (props) => {
    return(
     <>
        
        <div className="col-md-4 col-10 mx-auto">
           <div className="card">
             <img src={props.imgsrc} alt="" />
             <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <p className="card-text">hello guys this is dumy data for showing services</p>
               <NavLink to="/services" className="btn btn-primary">Go Somewhere</NavLink>
             </div>
           </div>
        </div>

     </>
    );
}

export default ServiceCard;