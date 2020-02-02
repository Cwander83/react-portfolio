import React from "react";

import ContentBox from "../../../hoc/ContentBox";

//
//
//  projects will hold a state to render

const projects = () => {
  return (
    <ContentBox>
      <h1>projects</h1>

      <div className="work-card row justify-content-between">
        <div className="col">
          <h3>HJM company</h3>
          <h4>
            <a href="https://github.com/Cwander83/HJM">GitHub</a>
          </h4>
          <p className="description tools">
            Languages/Tools: HTML, CSS, JavaScript, jQuery, Bootstrap, Github
            pages
          </p>
          <p className="description">
            I built this site for the Hospitality Janitorial & Maintenance
            Services Company. It was built as a static website to help find
            clients and as well as place for people to apply when positions are
            avaliable.
          </p>
        </div>

        <div className="col-4">
          <p className="live-links">
            <a href="http://hjmjanitorial.com">hjmjanitorial.com</a>
          </p>
        </div>
      </div>

      <div className="work-card row justify-content-between">
        <div className="col">
          <h3>300 Challenge</h3>
          <h4>
            <a href="https://github.com/Cwander83/HJM">GitHub</a>
          </h4>
          <p className="description">
            Languages/Tools: React, CSS, Node.JS, MongodB, Express.JS, Mongoose,
            mLab, Heroku
          </p>
          <p className="description">
            This is a username and password protected site where one or groups
            can join to challenge each others. The 300 Workout from the movie
            300 is a series of exercises done in a nonstop circuit.
          </p>
        </div>

        <div className="col-4">
          <p className="live-links">
            <a href="http://limitless-harbor-65814.herokuapp.com">
              limitless-harbor-65814.herokuapp.com
            </a>
          </p>
        </div>
      </div>

      <div className="work-card row justify-content-between">
        <div className="col">
          <h3>SpaceX</h3>
          <h4>
            <a href="https://github.com/Cwander83/HJM">GitHub</a>
          </h4>
          <p className="description">
            Languages/Tools: React, Node.JS, Graphql, Apollo, CSS, Express.JS,
            Heroku
          </p>
          <p className="description">
            This interesting little app shows all the rockets from the SpaceX
            program. And then calls the api to display successful or
            unsuccessful launch and extra details.
          </p>
        </div>

        <div className="col-4">
          <p className="live-links">
            <a href="http://safe-garden-24124.herokuapp.com">
              safe-garden-24124.herokuapp.com
            </a>
          </p>
        </div>
      </div>
    </ContentBox>
  );
};

export default projects;
