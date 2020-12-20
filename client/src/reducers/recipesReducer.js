import { ADD_NEW_RECIPE } from "../actions/recipeActions";

const initialState = {
  recipes: [
    { name: "Jojo Zhang", recStatus: true },
    { name: "Brandon Harris", recStatus: false }
  ]
};

export const recipesReducer = (state = initialState, action) => {
  /// what actions ????
  console.log(`bk: membersReducer: action: `, action);
  switch (action.type) {
    case ADD_NEW_RECIPE:
      return {
        ...state,
        recipes: [
          ...state.recipes,
          { name: action.payload, recStatus: false }
        ]
      };
    default:
      return state;
  }
};
