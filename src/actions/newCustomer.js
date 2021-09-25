export const newCustomer = (name) => {
  return {
    type: "CREATE_NEW_CUSTOMER",
    formData: name,
  };
};
