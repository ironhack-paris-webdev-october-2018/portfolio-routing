import React, { Component } from 'react';
import { Switch, Route, NavLink } from "react-router-dom";

import './App.css';

import HomePage from "./components/HomePage.js";
import AboutUs from "./components/AboutUs.js";
import ProjectList from "./components/ProjectList.js";
import NotFound from "./components/NotFound.js";
import ProjectDetails from "./components/ProjectDetails.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Nizar's Portfolio Site</h1>

          <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/projects">Our Projects</NavLink>
          </nav>
        </header>

        {/*
          * the router's "Switch" component defines a region in your app
          * that changes based on the URL (only chooses one piece of content)
          */}
        <Switch>
          {/*
            * the router's "Route" component defines one potential
            * piece of content that could show up here
            */}
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/projects/:projectId" component={ProjectDetails} />
          <Route path="/projects" component={ProjectList} />

          {/* 404 route ALWAYS LAST */}
          <Route component={NotFound} />
        </Switch>

        <footer>
          <p>Made with ⚙️ at Ironhack</p>
          <Switch>
            {/*
              * Use render() to define the route's content directly
              * (or to send your own PROPS to your component)
              */}
            <Route path="/projects" render={() => {
              return <p>WARNING: These Projects Are Fake.</p>;
            }} />
          </Switch>
        </footer>
      </div>
    );
  }
}

export default App;
