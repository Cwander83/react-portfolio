import React from "react";
import ContentBox from "../../../hoc/ContentBox";

const education = () => {
  return (
    <ContentBox>
      <h1>education</h1>

      <div className="row justify-content-between">
        <div className="col">
          <h3>valencia college</h3>
          <h4>computer programming technical certificate</h4>

          <p className="description">
            I currently in the process of increasing my knowledge of Web
            Development, as well as basic programming standards including C
            language, flowcharts, binary, etc.
          </p>
        </div>

        <div className="col-4">
          <p className="dates">Graduated</p>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <h3>university of central florida</h3>
          <h4>web development boot camp</h4>
          <p className="description">
            In this high intensity 24 week program Full Stack Web Development.
            We started the basics of Git, HTML, and CSS. As long the way, we
            learned covered Databases, Backend programming, and modern Frontend
            Programming like React and Handlebars.JS.
          </p>
        </div>

        <div className="col-4">
          <p className="dates">Graduated</p>
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col">
          <h3>Pickerington High School</h3>
          <h4>college prep / autocad curriculum</h4>
          <p className="description"></p>
        </div>

        <div className="col-4">
          <p className="dates">Graduated</p>
        </div>
      </div>
    </ContentBox>
  );
};

export default education;
