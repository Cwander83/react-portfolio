import React, { useState } from "react";

import ContentBox from "../../../hoc/ContentBox";
import ContentTitle from "../../ContentTitle/ContentTitle";
import LeftBubble from "../../Bubbles/LeftBubble/LeftBubble";
import RightBubble from "../../Bubbles/RightBubble/RightBubble";
import ListOfSkiils from "./ListOfSkills/ListOfSkills";

function Skills() {
  const [headersState] = useState({
    headers: ["languages", "frameworks", "tools"]
  });
  const [langState] = useState({
    languages: [
      "Html",
      "CSS",
      "SASS",
      "JavaScript",
      "Java",
      "Python",
      "jQuery",
      "Node"
    ]
  });
  const [frameworkState] = useState({
    frameworks: ["React", "Angular"]
  });
  const [toolsState] = useState({
    tools: ["Mongodb ", "MySQL", "Firebase", "AWS", "Git"]
  });

  return (
    <ContentBox>
      <ContentTitle>Skills</ContentTitle>
      <LeftBubble>
        <ListOfSkiils
          header={headersState.headers[0]}
          content={langState.languages}
        />
      </LeftBubble>
      <RightBubble>
        <ListOfSkiils
          header={headersState.headers[1]}
          content={frameworkState.frameworks}
        />
      </RightBubble>
      <LeftBubble>
        <ListOfSkiils
          header={headersState.headers[2]}
          content={toolsState.tools}
        />
      </LeftBubble>
    </ContentBox>
  );
}

export default Skills;
