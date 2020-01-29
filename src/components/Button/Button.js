import React, { Fragment } from "react";

import "./Button.css";

const button = props => {
  console.log(props);

  return (
    <Fragment>
      {props.pages.map((page, i) => {
        return (
          <button
            type="submit"
            value={i + 1}
            key={i}
            className="button"
            onClick={value => props.click(value)}
          >
            <span>{page.page}</span>
          </button>
        );
      })}
    </Fragment>
  );
};

export default button;
