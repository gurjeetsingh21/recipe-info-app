import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import RecipeListHomePage from "./RecipeListHomePage/RecipeListHomePage";
import { Container } from "react-bootstrap";
import "bootstrap-less/bootstrap/bootstrap.less";
import "./App.scss";
import Root from "./Root/Root"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/recipe" component={Root} />
        <Redirect from="/" to="/recipe/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
