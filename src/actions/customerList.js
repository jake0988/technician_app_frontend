import { renderCustomers } from "./renderCustomers";

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
        }
      })
      .catch(console.log);
  };
};

export const createCustomer = (formData, userId, history) => {
  // debugger;
  const customerInfo = {
    name: formData.name,
    address: formData.address,
    email: formData.email,
    phone_number: formData.phone_number,
    number_of_pianos: formData.number_of_pianos,
    user_id: userId,
  };
  // debugger;
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/users/${userId}/customers`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(customerInfo),
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

export const patchCustomerInfo = (formData) => {
  const { userId, customerId } = formData;
  return (dispatch) => {
    return fetch(
      `http://localhost:3000/api/v1/users/${userId}/customers/${customerId}`,
      {
        credentials: "include",
        method: "PATCH",
        header: {
          "Content-Type": "application/json",
        },
        body: formData,
      }
    )
      .then((resp) => resp.json())
      .then((customer) => {
        if (customer.error) {
          alert(customer.error);
        } else {
          dispatch(editCustomerInfo(customer.data));
        }
      });
  };
};
