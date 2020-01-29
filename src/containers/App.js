import React, { useState } from "react";

import "./App.css";

import Title from "../components/Title/Title";

import Carousel from "../components/Carousel/Carousel";

// import jsonData from "../assets/data.json";

const App = () => {
  // const [data, setData] = useState({
  //   data: []
  // });

  const [pageState] = useState({
    pages: [
      { page: "about" },
      { page: "skills" },
      { page: "experience" },
      { page: "projects" },
      { page: "education" },
      { page: "interests" }
    ]
  });

  // useEffect(() => {
  //   setData({ data: jsonData.data });
  // }, []);

  return (
    <div className="App">
      <Title />

      <Carousel pages={pageState.pages} />
    </div>
  );
};

export default App;
