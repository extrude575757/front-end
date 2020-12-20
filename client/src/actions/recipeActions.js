export const ADD_NEW_RECIPE = "ADD_NEW_RECIPE";

export const addNewRecipe = (recipeName) => {
  return {
    type: ADD_NEW_RECIPE,
    payload: recipeName
  };
};
