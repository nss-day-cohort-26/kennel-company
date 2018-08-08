import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import KennelCompany from "./KennelCompany";
import "./index.css";
import history from "./history"

ReactDOM.render(
  <Router history={history}>
    <KennelCompany />
  </Router>,
  document.querySelector("#root")
);

registerServiceWorker();
