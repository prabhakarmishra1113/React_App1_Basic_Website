import React from "react";
import HomeAbout from "./HomeAbout";
import abtimg from "../images/about.png";

const About = () => {
    return(
      <>
     
        <HomeAbout imgsrc={abtimg} welcomeQuote="Welcome to About Page" buttonQuote="Contact Now" lnk="/contact"/>

      </>
    );
}

export default About;