import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

const MyRoute = () => {
   return(
       <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
       </>
   );

}

export default MyRoute;