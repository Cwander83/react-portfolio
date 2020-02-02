import React from "react";

import ContentBox from "../../../hoc/ContentBox";

const skills = () => {
  return (
    <ContentBox>
      <h1>skills</h1>
      <ul>
        <h3>languages</h3>
        <li>html</li>
        <li>CSS</li>
      </ul>
      <ul>
        <h3>frameworks</h3>
        <li>React</li>
        <li>Angular</li>
      </ul>
      <ul>
        <h3>tools</h3>
        <li>Mongodb</li>
        <li>mysql</li>
      </ul>
    </ContentBox>
  );
};

export default skills;
