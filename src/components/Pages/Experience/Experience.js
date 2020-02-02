import React from "react";
import ContentBox from "../../../hoc/ContentBox";

const experience = () => {
  return (
    <ContentBox>
      <h1>experience</h1>

    
      <div className="row justify-content-between">
        <div className="col">
          <h3>freelance web developer</h3>
          <h4>full-stack web developer</h4>
          <p className="description">
            Responsible for the design, layout and coding of websites. Involved
            with the technical and graphical aspects of a website - how the site
            works and how it looks. As well as involved with the maintenance and
            update of an existing site.
          </p>
        </div>

        <div className="col-4">
          <p className="dates">April 2018 - Current</p>
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col">
          <h3>Universal studios citywalk</h3>
          <h4>bartender</h4>
          <p className="description">
            In Universal Studios I work in the highest rated and busiest
            restaurant in the CityWalk area. In this very high stress department
            I make drinks and serve and exceed all guests need. While driving
            thousands of dollars of sales every week, while maximuming upselling
            company standards.
          </p>
        </div>

        <div className="col-4">
          <p className="dates">August 2015 - Current</p>
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col">
          <h3>tgi fridays</h3>
          <h4>bartender / trainer</h4>
          <p className="description">
            Starting at Friday's right out of high school, I moved from up from
            Server Assistant to Wait Staff to Bartender in months. No quit No
            rest attitude, putting all I had everyday I moved Bar Trainer in
            serveral locations in Columbus, OH and Orlando, FL.
          </p>
        </div>

        <div className="col-4">
          <p className="dates">October 2004 - August 2015</p>
        </div>
      </div>
    </ContentBox>
  );
};

export default experience;
