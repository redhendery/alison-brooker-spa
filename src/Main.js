import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Technique from "./Technique";
import Contact from "./Contact";
import Bookings from "./Bookings";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/technique">Technique</NavLink></li>
            <li><NavLink to="/bookings">Bookings</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact} />
            <Route path="/technique" component={Technique} />
            <Route path="/bookings" component={Bookings} />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main;
