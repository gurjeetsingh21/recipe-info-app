import React, { useState, useEffect } from "react";
import axios from "axios";
import SingletonService from "../sevices/Singleton";
import RecipeCard from "../RecipeListHomePage/RecipeCard";
import Pagination from "react-js-pagination";

const SearchRecipe = () => {
  const [recipeData, setRecipeData] = useState({ data: [] });
  const [length, setLength] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [recipePageData, setRecipePageData] = useState({ data: [] });
  const Singleton = SingletonService.getInstance();
  const search = Singleton.getSearch();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=010a659bc7254b7fa8d110bf6b72c82d&query=${search}&number=25`
      );
      setLength(response.data.results.length);
      const pageOneData = response.data.results.slice(0, 12);
      setRecipePageData({ data: pageOneData });
      setRecipeData({ data: response.data.results });
    }
    fetchData();
  }, [search]);

  const handlePageChange = (e) => {
    setActivePage(e);
    const end = e * 12;
    const start = end - 12;
    const data = recipeData.data.slice(start, end);
    setRecipePageData({ data: data });
  };

  return (
    <div>
      {recipeData.data.length > 0 ? (
        <RecipeCard recipeData={recipePageData.data} />
      ) : <div>Sorry, this search is not currently available, Please search a different recipe</div>}

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

export default SearchRecipe;
