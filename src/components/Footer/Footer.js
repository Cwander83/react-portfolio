import React from "react";

import "./Footer.css";

import Github from "../../assets/icons/github.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Facebook from "../../assets/icons/facebook.png";

const footer = () => {
  return (
    <footer>
      <img src={Github} alt="github link" />
      <img src={Linkedin} alt="linkedin link" />
      <img src={Facebook} alt="facebook link" />
    </footer>
  );
};

export default footer;
