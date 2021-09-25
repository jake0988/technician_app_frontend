export const updateCustomerForm = (name, value) => {
  return {
    type: "UPDATE_CUSTOMER_FORM",
    formData: { name, value },
  };
};
