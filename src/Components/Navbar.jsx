import React from "react";
import {NavLink} from "react-router-dom";
const Navbar = () => {
 return(
    <>
     
     <div className="container-fluid nav_bg">
       <div className="row">
         <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg">
                <NavLink className="navbar-brand" to="/">PDGROUP</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                  <span><i className="fa fa-bars"></i></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink to="/" exact activeClassName="menu_active" className="nav-link active"  aria-current="page" href="#">Home</NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="menu_active" className="nav-link active"  aria-current="page" href="#">About</NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink to="/services" exact activeClassName="menu_active" className="nav-link active"  aria-current="page" href="#">Services</NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="menu_active" className="nav-link active"  aria-current="page" href="#">Contact</NavLink>
                      </li>

                    </ul>
                </div>  
              </nav>
         </div>
       </div>
     </div>
     
    </>
 );

}

export default Navbar;
