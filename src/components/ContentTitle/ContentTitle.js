import React from "react";

const contentTitle = props => {
  const h1Style = {
    color: "white",
    textTransform: "capitalize",
    display: "inline-block",
    borderBottom: "solid white 1px",
    padding: "0 5px 10px 5px",
    letterSpacing: "3px"
  };
  return <h1 style={h1Style}>{props.children}</h1>;
};
export default contentTitle;
