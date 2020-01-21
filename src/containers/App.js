import React, { useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import Cockpit from "../components/Cockpit/Cockpit";
import BodyContainer from "../containers/BodyContainer/BodyContainer";

import jsonData from "../assets/data.json";

const App = () => {
  const [data, setData] = useState({
    data: []
  });
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

  useEffect(() => {
    setData({ data: jsonData.data });
  }, []);

  console.log(data.data[0]);

  // nav area connecting Button map
  let navBtns = (
    <nav>
      <Button pages={pageState.pages} />
    </nav>
  );

  return (
    <Router>
      <div className="App">
        <Title />
        <BodyContainer>
          {navBtns}

          <Cockpit />
        </BodyContainer>
      </div>
    </Router>
  );
};

export default App;
