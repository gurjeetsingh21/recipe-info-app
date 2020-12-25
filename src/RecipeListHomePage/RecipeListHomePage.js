import React, { useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import RecipeCard from "./RecipeCard";

const RecipeListHomePage = () => {
  const [recipeData, setRecipeData] = useState({ data: [] });
  const [length, setLength] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [recipePageData, setRecipePageData] = useState({ data: [] });

  useState(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=010a659bc7254b7fa8d110bf6b72c82d&number=25"
      );
      setLength(response.data.recipes.length);
      const pageOneData = response.data.recipes.slice(0, 12);
      setRecipePageData({ data: pageOneData });
      setRecipeData({ data: response.data.recipes });
    }
    fetchData();
  }, []);

  const handlePageChange = (e) => {
    setActivePage(e);
    const end = e * 12;
    const start = end - 12;
    const data = recipeData.data.slice(start, end);
    setRecipePageData({ data: data });
  };

  return (
    <div>
      <RecipeCard recipeData={recipePageData.data} />

      <div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={12}
          totalItemsCount={length}
          pageRangeDisplayed={10}
          onChange={(e) => handlePageChange(e)}
        />
      </div>
    </div>
  );
};

export default RecipeListHomePage;
