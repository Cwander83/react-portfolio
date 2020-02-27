import React, { useEffect } from "react";

import "./ListOfSkills.css";

const listOfSkills = React.memo(props => {
  useEffect(() => {
    return () => {};
  }, []);
  
  const skills = props.content.map((skill, i) => {
    return (
      <li key={i} className="listsLi">
        {skill}
      </li>
    );
  });

  return (
    <ul>
      <h3 className="contentH3">{props.header}</h3>
      {skills}
    </ul>
  );
});

export default listOfSkills;
