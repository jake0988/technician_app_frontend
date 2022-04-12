const initialState = {
  name: "",
  address: "",
  email: "",
  phone_number: "",
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
    case "SET_CUSTOMER_FORM_FOR_EDIT":
      return action.customerFormData;
    default:
      return state;
  }
};
