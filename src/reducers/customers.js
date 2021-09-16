export default (state = [], action) => {
  switch (action.type) {
    case "RENDER_CUSTOMERS":
      return action.customers;
    default:
      return state;
  }
};
