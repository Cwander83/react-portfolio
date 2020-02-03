import React from "react";
import ContentBox from "../../../hoc/ContentBox";
import ContentTitle from "../../ContentTitle/ContentTitle";
import LeftBubble from "../../Bubbles/LeftBubble/LeftBubble";
import RightBubble from "../../Bubbles/RightBubble/RightBubble";

const education = () => {
  return (
    <ContentBox>
      <ContentTitle>education</ContentTitle>
      <LeftBubble>
        <h3 className="contentH3">valencia college</h3>
        <h4>Computer Programming Technical Certificate</h4>

        <p>
          · I currently in the process of increasing my knowledge of Web
          Development, as well as basic programming standards including C
          language, flowcharts, binary, etc.
        </p>

        <p>· Graduated</p>
      </LeftBubble>

      <RightBubble>
        <h3 className="contentH3">university of central florida</h3>
        <h4>Web Development Boot Camp</h4>
        <p>
          · In this high intensity 24 week program Full Stack Web Development.
          We started the basics of Git, HTML, and CSS. As long the way, we
          learned covered Databases, Backend programming, and modern Frontend
          Programming like React and Handlebars.JS.
        </p>

        <p>· Graduated</p>
      </RightBubble>

      <LeftBubble>
        <h3 className="contentH3">Pickerington High School</h3>
        <h4>College Prep / Autocad Curriculum</h4>
        <p></p>

        <p>· Graduated</p>
      </LeftBubble>
    </ContentBox>
  );
};

export default education;
