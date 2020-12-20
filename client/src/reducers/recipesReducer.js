import { ADD_NEW_RECIPE, ADD_NEW_RECIPE_MAT } from "../actions/recipeActions";

const initialState = {
  recipes: [
    { name: "Jojo Zhang", recStatus: true, recipeMat:"Materials" },
    { name: "Brandon Harris", recStatus: false,  recipeMat:"Materials" }
  ]
};

export const recipesReducer = (state = initialState, action) => {
  /// what actions ????
  console.log(`NAL: recipesReducer: action: `, action);
  switch (action.type) {
    case ADD_NEW_RECIPE:
      return {
        ...state,
        recipes: [
          ...state.recipes,
          { name: action.payload, recStatus: false, recipeMat: action.payload }
        ]
      };
      case ADD_NEW_RECIPE_MAT:
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {  recipeMat: action.payload }
        ]
      };
    default:
      return state;
  }
};
