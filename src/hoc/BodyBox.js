import React from "react";

const bodybox = props => {
  const bodyStyle = {
    display: "flex",
    textAlign: "center",
    width: "100%"
  };

  return <div style={bodyStyle}>{props.children}</div>;
};

export default bodybox;
