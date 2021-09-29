const initialState = {
  id: "",
  name: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CURRENT_CUSTOMER":
      return action.customerData;
    case "EDIT_CUSTOMER_INFO":
      return state.map((customer) =>
        customer.id === action.customerData.id ? action.customerdata : customer
      );
    default:
      return state;
  }
};
