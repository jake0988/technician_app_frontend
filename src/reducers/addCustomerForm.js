const initialState = {
  name: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RESET_CUSTOMER_FORM":
      return initialState;
    case "UPDATE_CUSTOMER_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value,
      };
    default:
      return state;
  }
};
