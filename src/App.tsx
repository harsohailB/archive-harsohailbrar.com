import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import EducationPage from "./components/EducationPage";
import ProjectsPage from "./components/ProjectsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/education" component={EducationPage}></Route>
          <Route exact path="/projects" component={ProjectsPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
