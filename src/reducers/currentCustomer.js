const initialState = {
  id: "",
  name: "",
  address: "",
  email: "",
  phone_number: "",
  number_of_pianos: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CURRENT_CUSTOMER":
      return action.customerData;
    default:
      return state;
  }
};
