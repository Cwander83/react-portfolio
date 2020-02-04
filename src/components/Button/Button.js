import React, { Fragment } from "react";
import { Spring } from "react-spring/renderprops";

import "./Button.css";

function button(props) {
  

  return (
    <Fragment>
      {props.pages.map((page, i) => {
        return (
          <Spring
            from={{ opacity: 0, marginTop: -500, marginLeft: -200 }}
            to={{ opacity: 1, marginTop: 0, marginLeft: 0 }}
            config={{ delay: 500, duration: i * 300 }}
            key={i}
          >
            {springs => (
              <button
                style={springs}
                type="submit"
                value={i}
                className="button"
                onClick={i => {
                  props.click(i);
                }}
              >
                <span>{page.page}</span>
              </button>
            )}
          </Spring>
        );
      })}
    </Fragment>
  );
}

export default button;
