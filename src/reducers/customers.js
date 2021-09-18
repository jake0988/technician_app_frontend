export default (state = [], action) => {
  switch (action.type) {
    case "RENDER_CUSTOMERS":
      return action.customers;
    case "CLEAR_CUSTOMERS":
      return (state = []);
    default:
      return state;
  }
};
