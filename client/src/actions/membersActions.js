export const ADD_NEW_MEMBER = "ADD_NEW_MEMBER";

export const addNewMember = (memberName) => {
  return {
    type: ADD_NEW_MEMBER,
    payload: memberName
  };
};
