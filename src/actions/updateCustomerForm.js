export const setCustomerFormForEdit = (customer) => {
  const customerFormData = {
    name: customer.name,
    phone_number: customer.phone_number,
    email: customer.email,
    address: customer.address,
  };
  return {
    type: "SET_CUSTOMER_FORM_FOR_EDIT",
    customerFormData,
  };
};

export const updateCustomerForm = (name, value) => {
  return {
    type: "UPDATE_CUSTOMER_FORM",
    formData: { name, value },
  };
};
