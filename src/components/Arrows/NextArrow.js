import React from "react";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        width: "0",
        height: "0",
        borderStyle: "solid",
        borderWidth: "75px 0 75px 20px",
        borderColor: "transparent transparent transparent #ffffff"
      }}
      onClick={onClick}
    />
  );
}

export default NextArrow;

/* 
.rightArrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 75px 0 75px 20px;
  border-color: transparent transparent transparent #ffffff;
 
}

.leftArrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 75px 20px 75px 0;
  border-color: transparent #ffffff transparent transparent;
} */
