import React from "react";

import "./Cockpit.css";

import { Switch, Route } from "react-router-dom";

import About from "../Cockpit/Pages/About/About";
import Skills from "../Cockpit/Pages/Skills/Skills";
import Experience from "../Cockpit/Pages/Experience/Experience";
import Projects from "../Cockpit/Pages/Projects/Projects";
import Education from "../Cockpit/Pages/Education/Education";
import Interests from "../Cockpit/Pages/Interests/Interests";
import Default from '../Cockpit/Pages/Default/Default'


const cockpit = props => {
  return (
    <div className="cockpit">
      
      <Switch>
        <Route exact path="/" component={Default} />

        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/interests" component={Interests} />
      </Switch>
    </div>
  );
};

export default cockpit;
