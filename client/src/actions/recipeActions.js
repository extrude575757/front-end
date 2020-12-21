export const ADD_NEW_RECIPE = "ADD_NEW_RECIPE";
export const ADD_NEW_RECIPE_MAT = "ADD_NEW_RECIPE_MAT";
export const addNewRecipe = (recipe) => {
  return {
    type: ADD_NEW_RECIPE,
    payload: recipe
  };
};

// export const addNewRecipeMat = (recipeMatName) => {
//   return {
//     type: ADD_NEW_RECIPE_MAT,
//     payload: recipeMatName
//   };
// };
