export default (state = [], action) => {
  switch (action.type) {
    case "RENDER_CUSTOMERS":
      return action.customers;
    case "CLEAR_CUSTOMERS":
      return (state = []);
    case "CREATE_NEW_CUSTOMER":
      return state.concat(action.formData);
    default:
      return state;
  }
};
