import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./Button.css";

const button = props => {
  console.log(props.pages);

  return (
    <Fragment>
      {props.pages.map((page, i) => {
        return (
          <NavLink
            activeClassName="selected"
            to={page.page}
            key={i}
            className="button"
          >
            <span> {page.page}</span>
          </NavLink>
        );
      })}
    </Fragment>
  );
};

export default button;
