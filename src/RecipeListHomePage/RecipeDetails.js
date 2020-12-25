import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleService from "../sevices/Singleton";

const RecipeDetails = () => {
  const [specificRecipeData, setSpecificRecipeData] = useState({ data: [] });
  const Singleton = SingleService.getInstance();
  const id = Singleton.getID();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=010a659bc7254b7fa8d110bf6b72c82d&includeNutrition=true`
      );
      console.log(response.data);
      setSpecificRecipeData({ data: response.data });
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{specificRecipeData.data.title}</h2>
      <img
        src={specificRecipeData.data.image}
        className="recipe-details-image"
        alt=""
      />
      <p>{specificRecipeData.data.summary}</p>
      <br />
      <p>Gets Ready In {specificRecipeData.data.readyInMinutes} minutes</p>
    </div>
  );
};

export default RecipeDetails;
