import { ADD_NEW_MEMBER } from "../actions/membersActions";

const initialState = {
  members: [
    { name: "Jojo Zhang", status: true },
    { name: "Brandon Harris", status: false }
  ]
};

export const membersReducer = (state = initialState, action) => {
  /// what actions ????
  console.log(`NAL: membersReducer: action: `, action);
  switch (action.type) {
    case ADD_NEW_MEMBER:
      return {
        ...state,
        members: [
          ...state.members,
          { name: action.payload, status: false }
        ]
      };
    default:
      return state;
  }
};
