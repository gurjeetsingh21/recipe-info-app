import React, { useState } from "react";
import axios from "axios";

const NutrientInfo = (props) => {
  const [specificRecipeData, setSpecificRecipeData] = useState({ data: [] });
  const [calories, setCalories] = useState("0");
  const [carbs, setCarbs] = useState("0");
  const [protiens, setProtiens] = useState("0")
  const [fats, setFats] = useState("0")

  useState(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${props.id}/information?apiKey=cf3f4d7d66ed4705ae119477a5322927&includeNutrition=true`
      );
      setNutrients(response.data);
      setSpecificRecipeData({ data: response.data });
    }
    fetchData();
  }, [props.id]);

  const setNutrients = (data) => {
    const caloriesIndex = data.nutrition.nutrients.findIndex((nutrient) => {
      return nutrient.title === "Calories";
    });
    const tempcalories = data.nutrition.nutrients[caloriesIndex].amount;
    setCalories(tempcalories);

    const carbsIndex = data.nutrition.nutrients.findIndex((nutrient) => {
      return nutrient.title === "Carbohydrates";
    });
    const tempcarbs = data.nutrition.nutrients[carbsIndex].amount;
    setCarbs(tempcarbs);

    const protiensIndex = data.nutrition.nutrients.findIndex((nutrient) => {
      return nutrient.title === "Protein";
    });
    const tempprotiens = data.nutrition.nutrients[protiensIndex].amount;
    setProtiens(tempprotiens);

    const fatsIndex = data.nutrition.nutrients.findIndex((nutrient) => {
      return nutrient.title === "Fat";
    });
    const tempfats = data.nutrition.nutrients[fatsIndex].amount;
    setFats(tempfats);
  };

  return (
    <div className="nutrient-details">
      <div className="calories-carbs">
        <span>Calories: {calories} </span>
        <span>Carbs: {carbs} </span>
      </div>
      <div className="protiens-fats">
        <span>Protiens: {protiens} </span>
        <span>Fats: {fats} </span>
      </div>
    </div>
  );
};

export default NutrientInfo;
