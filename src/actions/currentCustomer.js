export const currentCustomer = (customerData) => {
  return {
    type: "ADD_CURRENT_CUSTOMER",
    customerData,
  };
};
