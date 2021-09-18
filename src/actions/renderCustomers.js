export const renderCustomers = (customers) => {
  return {
    type: "RENDER_CUSTOMERS",
    customers,
  };
};
