import React from "react";
import { Spring } from "react-spring/renderprops";
import "./Footer.css";

import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Facebook from "../../assets/icons/facebook.png";
import Auxiliary from "../../hoc/Auxiliary";

const footer = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 3000, duration: 1000 }}
    >
      {spring => (
        <footer style={spring}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 3000, duration: 1500 }}
          >
            {springs => (
              <Auxiliary>
                <a href="https://github.com/Cwander83">
                  <img style={springs} src={Github} alt="github link" />
                </a>
                <a href="https://www.linkedin.com/in/chris-wander-832329151/">
                  <img style={springs} src={Linkedin} alt="linkedin link" />
                </a>
                <a href="https://www.facebook.com/cwander1">
                  <img style={springs} src={Facebook} alt="facebook link" />
                </a>
              </Auxiliary>
            )}
          </Spring>
        </footer>
      )}
    </Spring>
  );
};

export default footer;
