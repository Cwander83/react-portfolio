import React from "react";

import "./About.css";

import ContentBox from "../../../hoc/ContentBox";
import ContentTitle from "../../ContentTitle/ContentTitle";
import LeftBubble from "../../Bubbles/LeftBubble/LeftBubble";
import RightBubble from "../../Bubbles/RightBubble/RightBubble";

const about = () => {
  return (
    <ContentBox>
      <ContentTitle>about me</ContentTitle>
      <LeftBubble>
        I am experienced in creating superior websites. Whether it's as simple
        as "let me tell you about myself" project to full scale dynamic project
        complete with database. I will not disappoint you with modern User
        Interface (UX) designs, that have your clients enjoying visit after
        visit.
      </LeftBubble>

      
        <RightBubble>
          Interest in working together? Let's make it unforgettable.
        </RightBubble>
      
    </ContentBox>
  );
};

export default about;
