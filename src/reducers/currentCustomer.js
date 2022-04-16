const initialState = {
  id: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CURRENT_CUSTOMER":
      return action.customerData;
    case "CLEAR_CURRENT_CUSTOMER":
      return initialState;
    default:
      return state;
  }
};
