import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "../Content/Content";

const Root = () => {
  return (
    <Router>
      <Content />
    </Router>
  );
};

export default Root;
