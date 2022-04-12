export default (state = [], action) => {
  switch (action.type) {
    case "RENDER_CUSTOMERS":
      return action.customers;
    case "CLEAR_CUSTOMERS":
      return (state = []);
    case "CREATE_NEW_CUSTOMER":
      return state.concat(action.formData);
    case "EDIT_CUSTOMER_INFO":
      return state.map((customer) =>
        customer.id === action.customerData.id ? action.customerData : customer
      );
    case "DESTROY_CUSTOMER_SUCCESS":
      const customer = state.find(
        (customer) => customer.attributes.id === action.customerId
      );
      return { ...state.slice(0, customer), ...state.slice(customer, 1) };
    default:
      return state;
  }
};
