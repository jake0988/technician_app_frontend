const initialState = {
  id: "",
  name: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CURRENT_CUSTOMER":
      return action.customerData;
    default:
      return state;
  }
};
