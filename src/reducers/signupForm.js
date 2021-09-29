const initialState = {
  name: "",
  username: "",
  password: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData;
    case "CLEAR_SIGNUP_FORM":
      return initialState;
    default:
      return state;
  }
};
