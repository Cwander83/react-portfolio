// import React, { useState } from "react";
import React from "react";

import "./App.css";

import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";
import Carousel from "./Carousel/Carousel";

// import jsonData from "../assets/data.json";

const App = () => {

  return (
    <div className="App">
      <Title />
      <Carousel />
     <Footer />
    </div>
  );
};

export default App;
