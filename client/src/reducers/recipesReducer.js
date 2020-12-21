import { ADD_NEW_RECIPE, EDIT_RECIPE } from "../actions/recipeActions";

const initialState = {
  recipes: [
    { name: "Shrimp Bobtail", recStatus: true, recipeMat:"Tommato, fishkilts, stomach broth", recipeDir: ['Two table spoons Sardines','Three table spoons Lettus'] },
    { name: "Gumbo Soup", recStatus: false,  recipeMat:"Sardines, Lettus", recipeDir: ['Two table spoons Sardines','Three table spoons Lettus'] }
  ],
  recStatus: true
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
          
          { name: action.payload.newRecipe, 
            recStatus: action.payload.recStatus,
            recipeMat: action.payload.newRecipeMat,
            recipeDir: action.payload.newRecipeDir 
          }
        ]
      };
      case EDIT_RECIPE:
        return {
          ...state,
          recStatus: !state.recStatus
        };
    default:
      return state;
  }
};
