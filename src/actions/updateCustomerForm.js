export const setCustomerFormForEdit = (customer) => {
  const customerFormData = {
    name: customer.attributes.name,
    phone_number: customer.attributes.phone_number,
    email: customer.attributes.email,
    address: customer.attributes.address,
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
