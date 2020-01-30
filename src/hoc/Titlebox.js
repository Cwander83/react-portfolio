import React from "react";


const titleBox = props => {
  const style = {
    backgroundColor: "rgba(5, 5, 5, 0.4)"
  };

  return <div style={style}>{props.children}</div>;
};

export default titleBox;
