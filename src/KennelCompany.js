import React, { Component } from "react";

import ApplicationViews from "./ApplicationViews";
import NavBar from "./nav/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

export default class KennelCompany extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}
