import React from "react";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";
import SearchRecipe from "../SeachRecipe/SearchRecipe";
import RecipeListHomePage from "../RecipeListHomePage/RecipeListHomePage";
import RecipeDetails from "../RecipeListHomePage/RecipeDetails";

const Content = () => (
  <>
    <Container fluid>
      <Topbar />
      <div className="div-container">
        <Switch>
          <Route exact path="/recipe/search" component={SearchRecipe} />
          <Route exact path="/recipe/home" component={RecipeListHomePage} />
          <Route exact path="/recipe/details" component={RecipeDetails} />
        </Switch>
      </div>
    </Container>
  </>
);

export default Content;
