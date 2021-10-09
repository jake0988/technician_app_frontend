export const setCurrentCustomer = (customerData) => {
  return {
    type: "ADD_CURRENT_CUSTOMER",
    customerData,
  };
};
