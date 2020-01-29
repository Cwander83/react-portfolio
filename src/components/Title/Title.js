import React, { Fragment } from "react";

import "./Title.css";

import TitleBox from "../../hoc/TitleBox/Titlebox";

const title = () => {
  return (
    <TitleBox>
      <h1 className="title">Christopher Wander</h1>
      <h3 className="subTitle">
        orlando, fl 32807 · <a href="tel:+6145065435">(614) 506-5435</a> ·
        <a href="mailto:chriswandermail@gmail.com">chriswandermail@gmail.com</a>
      </h3>
    </TitleBox>
  );
};

export default title;
