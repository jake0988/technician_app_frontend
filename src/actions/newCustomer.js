export const newCustomer = (formData) => {
  return {
    type: "CREATE_NEW_CUSTOMER",
    formData,
  };
};
