export const clearCurrentCustomer = () => {
  return {
    type: "CLEAR_CURRENT_CUSTOMER",
  };
};

export const setCurrentCustomer = (customerData) => {
  return {
    type: "ADD_CURRENT_CUSTOMER",
    customerData,
  };
};
