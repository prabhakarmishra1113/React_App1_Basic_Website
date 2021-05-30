import React from "react";
import HomeAbout from "./HomeAbout";
import homimg from "../images/home.png";

const Home = () => {
    return(
      <>
     
        <HomeAbout imgsrc={homimg} welcomeQuote="Grow your business with" buttonQuote="Get Started" lnk="/services"/>

      </>
    );
}

export default Home;