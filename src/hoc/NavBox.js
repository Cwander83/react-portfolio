import React from "react";

const navBox = props => {
  const navStyle = {
    display: "flex",
    marginTop: "7%",
    textAlign: "center",
    width: "15%",
    marginLeft: "40px",
    flexDirection: "column",
    backgroundColor: "rgba(5, 5, 5, 0.3)",

    position: "fixed"
  };

  return <div style={navStyle}>{props.children}</div>;
};

export default navBox;

/* border-bottom: solid rgba(40, 40, 40, 0.3) 1px;
  border-left: solid rgba(40, 40, 40, 0.3) 1px;
  border-right: solid rgba(40, 40, 40, 0.3) 1px; */
/* border-radius: 15px; */
/* box-shadow: 0px 5px black; */
