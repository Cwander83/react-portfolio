import React from "react";

export default function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        width: "0",
        height: "0",
        borderStyle: "solid",
        borderWidth: "75px 20px 75px 0",
        borderColor: "transparent #ffffff transparent transparent"
      }}
      onClick={onClick}
    />
  );
}
