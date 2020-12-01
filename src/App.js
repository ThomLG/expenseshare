import './App.scss';
import React from "react";
import NavBar from "./components/layout/navbar/NavBar";
import {Switch, Route} from "react-router-dom";
import HomePage from "./components/pages/homepage/HomePage";
import About from "./components/pages/about/About";
import Create from "./components/pages/create/Create";
import Join from "./components/pages/join/Join";

function App() {
  return (
      <React.Fragment>
          <NavBar/>
          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path ='/About' component={About}/>
              <Route path ='/Create' component={Create}/>
              <Route path ='/Join' component={Join}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
