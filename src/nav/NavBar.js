import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="linkClass">Locations</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/employees">Employees</Link>
      </div>
    );
  }
}
