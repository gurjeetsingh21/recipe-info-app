import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NutrientInfo from "./NutrientInfo";
import RecipeDetails from "./RecipeDetails";
import SingleService from "../sevices/Singleton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const RecipeCard = (props) => {
  const data = props.recipeData;
  const classes = useStyles();
  const history = useHistory();
  const Singleton = SingleService.getInstance();

  const handleHeadingClick = (id) => {
    Singleton.setID(id);
    history.push("/recipe/details");
  };

  if (data) {
    return data.map((recipe) => {
      return (
        <Card style={{ width: "230px" }} key={recipe.id}>
          <div key={recipe.id}>
            <img src={recipe.image} alt="" className="image" />
          </div>
          <div className="recipe-details">
            <div className="card-details">
              <strong
                type="button"
                className="recipe-name"
                onClick={(e) => {handleHeadingClick(recipe.id)}}
              >
                {recipe.title}
              </strong>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography component={"div"}>Nutrients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography component={"div"}>
                    <NutrientInfo id={recipe.id} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </Card>
      );
    });
  }
  return <div>Made by Gurjeet Singh Sahney</div>;
};

export default RecipeCard;
