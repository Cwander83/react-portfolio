import React from "react";
import { Spring } from "react-spring/renderprops";
import "./Title.css";

import TitleBox from "../../hoc/Titlebox";
import Resume from "../../assets/resume/Chris_Wander_Resume.docx";

const title = () => {
  return (
    <TitleBox>
      <h1 className="title">Christopher Wander</h1>
      <Spring from={{ marginLeft: -10000 }} to={{ marginLeft: 30 }}>
        {springs => (
          <h3 style={springs} className="subTitle">
            Orlando, FL 32807 · <a href="tel:+6145065435">(614) 506-5435</a> ·{" "}
            <a href="mailto:chriswandermail@gmail.com">
              chriswandermail@gmail.com
            </a>{" "}
            ·{" "}
            <a href={Resume} download>
              resume
            </a>
          </h3>
        )}
      </Spring>
    </TitleBox>
  );
};

export default title;
