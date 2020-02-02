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
      config={{ delay: 5000, duration: 1000 }}
    >
      {spring => (
        <footer style={spring}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 300, duration: 3500 }}
          >
            {springs => (
              <Auxiliary>
                <img style={springs} src={Github} alt="github link" />
                <img style={springs} src={Linkedin} alt="linkedin link" />
                <img style={springs} src={Facebook} alt="facebook link" />
              </Auxiliary>
            )}
          </Spring>
        </footer>
      )}
    </Spring>
  );
};

export default footer;
