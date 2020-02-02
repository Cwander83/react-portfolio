import React from "react";

const contentBox = props => {
  const divStyle = {
    // backgroundColor: "rgba(0, 0, 0, 0.6)",
   // boxShadow: "-7px 7px 179px -34px rgba(71,71,71,1) ",
    width: '80%',
    margin: 'auto',
    textAlign: 'center'
  };
  return <div style={divStyle}>{props.children}</div>;
};

export default contentBox;
