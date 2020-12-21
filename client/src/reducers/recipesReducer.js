import { ADD_NEW_RECIPE } from "../actions/recipeActions";

const initialState = {
  recipes: [
    { name: "Shrimp Bobtail", recStatus: true, recipeMat:"Tommato, fishkilts, stomach broth" },
    { name: "Gumbo Soup", recStatus: false,  recipeMat:"Sardines, Lettus" }
  ]
};

export const recipesReducer = (state = initialState, action) => {
  /// need help here keeps displaying wrong no matter how i put the states
  console.log(`NAL: recipesReducer: action: `, action);
  switch (action.type) {
    case ADD_NEW_RECIPE:
      return {
        
          ...state,
        recipes: [
          ...state.recipes,
          
          { name: action.payload.newRecipe, recStatus: action.payload.recStatus, recipeMat: action.payload.newRecipeMat }
        ]
      };
      // case ADD_NEW_RECIPE_MAT:
      // return {
      //   ...state,
      //   recipes: [
      //     ...state.recipes,
      //     {recipeMat: action.payload },
          
      //   ]
      // };
    default:
      return state;
  }
};
