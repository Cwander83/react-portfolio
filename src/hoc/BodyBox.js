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

/* border-bottom: solid rgba(40, 40, 40, 0.3) 1px;
  border-left: solid rgba(40, 40, 40, 0.3) 1px;
  border-right: solid rgba(40, 40, 40, 0.3) 1px; */
/* border-radius: 15px; */
/* box-shadow: 0px 5px black; */
