import { getPianos } from "./addPiano";

export const renderCustomers = (customers) => {
  return {
    type: "RENDER_CUSTOMERS",
    customers,
  };
};

const resetCustomerForm = () => {
  return {
    type: "RESET_CUSTOMER_FORM",
  };
};

const editCustomerInfo = (customerData) => {
  return {
    type: "EDIT_CUSTOMER_INFO",
    customerData,
  };
};

export const customerList = (userId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/users/${userId}/customers`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((customers) => {
        // dispatch(renderCustomers(customers.data));
        if (customers.error) {
          alert(customers.error);
        } else {
          dispatch(renderCustomers(customers.data));
          customers.data.forEach((customer) => {
            dispatch(getPianos(userId, customer.id));
          });
        }
      })
      .catch(console.log);
  };
};

export const createCustomer = (formData, userId, history) => {
  // const customerId = formData.id;
  // const customerFormPatchInfo = {
  //   customer: formData,
  // };
  // const customerInfo = {
  //   name: formData.name,
  //   address: formData.address,
  //   email: formData.email,
  //   phone_number: formData.phone_number,
  //   user_id: userId,
  // };
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/users/${userId}/customers/`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((customer) => {
        // dispatch(newCustomer(customerInfo));
        dispatch(customerList());
        dispatch(resetCustomerForm());
        history.push(`/users/${userId}/customers`);
      });
  };
};

export const patchCustomerInfo = (formData, userId, history, customerId) => {
  return (dispatch) => {
    const customerEditData = {
      customer: {
        id: customerId,
        name: formData.name,
        address: formData.address,
        email: formData.email,
        phone_number: formData.phone_number,
        user_id: formData.user_id,
      },
    };
    const e = { name: "adsf", address: "asdfad" };
    const formDataJsonString = JSON.stringify(e);
    return fetch(
      `http://localhost:3001/api/v1/users/${userId}/customers/${customerId}`,
      {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerEditData),
      }
    )
      .then((resp) => resp.json())
      .then((customer) => {
        if (customer.error) {
          alert(customer.error);
        } else {
          dispatch(editCustomerInfo(customer.data.attributes));
          history.push(`/users/${userId}/customers/${customerId}}`);
        }
      });
  };
};
