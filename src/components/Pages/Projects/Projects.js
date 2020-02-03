import React from "react";

import "./Projects.css";

import ContentBox from "../../../hoc/ContentBox";
import ContentTitle from "../../ContentTitle/ContentTitle";
import LeftBubble from "../../Bubbles/LeftBubble/LeftBubble";
import RightBubble from "../../Bubbles/RightBubble/RightBubble";

// import Project from './Project/Project'
//
//
//  projects will hold a state to render

function Projects() {
  return (
    <ContentBox>
      <ContentTitle>projects</ContentTitle>
      <LeftBubble>
        <h3 className="contentH3">HJM company</h3>
        <h4>
          <a className="linkBubble" href="https://github.com/Cwander83/HJM">
            Github repo
          </a>
        </h4>
        <h4>
          <a className="linkBubble" href="http://hjmjanitorial.com">
            hjmjanitorial.com
          </a>
        </h4>
        <p>
          · I built this site for the Hospitality Janitorial & Maintenance
          Services Company. It was built as a static website to help find
          clients and as well as place for people to apply when positions are
          avaliable.
        </p>
        <h3 className="contentH3"> Languages/Tools:</h3>
        <p>HTML, CSS, JavaScript, jQuery, Bootstrap, Github pages</p>
      </LeftBubble>
      <RightBubble>
        <h3 className="contentH3">300 Challenge</h3>
        <h4>
          <a className="linkBubble" href="https://github.com/Cwander83/HJM">
            GitHub
          </a>
        </h4>
        <h4>
          <a
            className="linkBubble"
            href="http://limitless-harbor-65814.herokuapp.com"
          >
            limitless-harbor-65814.herokuapp.com
          </a>
        </h4>
        <p>
          This is a username and password protected site where one or groups can
          join to challenge each others. The 300 Workout from the movie 300 is a
          series of exercises done in a nonstop circuit.
        </p>
        <h4 className="contentH3">Languages/Tools:</h4>
        <p>React, CSS, Node.JS, MongodB, Express.JS, Mongoose, mLab, Heroku</p>
      </RightBubble>
      <LeftBubble>
        <h3 className="contentH3">SpaceX</h3>
        <h4>
          <a className="linkBubble" href="https://github.com/Cwander83/HJM">
            GitHub
          </a>
        </h4>
        <h4>
          <a
            className="linkBubble"
            href="http://safe-garden-24124.herokuapp.com"
          >
            safe-garden-24124.herokuapp.com
          </a>
        </h4>
        <p>
          This interesting little app shows all the rockets from the SpaceX
          program. And then calls the api to display successful or unsuccessful
          launch and extra details.
        </p>
        <h3 className="contentH3">Languages/Tools:</h3>
        <p>React, Node.JS, Graphql, Apollo, CSS, Express.JS, Heroku</p>
      </LeftBubble>
    </ContentBox>
  );
}

export default Projects;
