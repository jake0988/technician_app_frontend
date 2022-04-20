import { setCurrentCustomer } from "./currentCustomer";
import { clearCurrentCustomer } from "./currentCustomer";
import { getPianos } from "./addPiano";

export const renderCustomers = (customers) => {
  return {
    type: "RENDER_CUSTOMERS",
    customers,
  };
};

export const resetCustomerForm = () => {
  return {
    type: "RESET_CUSTOMER_FORM",
  };
};

export const editCustomerInfo = (customerData) => {
  return {
    type: "EDIT_CUSTOMER_INFO",
    customerData,
  };
};

export const destroyCustomerSuccess = (customerId) => {
  return {
    type: "DESTROY_CUSTOMER_SUCCESS",
    customerId,
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
        if (customers.errors) {
          alert(customers.errors);
        } else {
          dispatch(renderCustomers(customers.data));
          // debugger
          // dispatch(getPianos(userId));
        }
      })
      .catch(console.log);
  };
};

export const createCustomer = (formData, userId, history) => {
  const createCustomerSuccess = { ...formData, user_id: userId };
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/users/${userId}/customers/`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(createCustomerSuccess),
    })
      .then((resp) => resp.json())
      .then((customer) => {
        if (customer.errors) {
          alert(customer.errors);
        } else {
          dispatch(customerList(userId));
          dispatch(setCurrentCustomer(customer.data));
          // dispatch(getPianos(userId));
          dispatch(resetCustomerForm());
          history.push(`/users/${userId}/customers/`);
        }
      })
      .catch(console.log());
  };
};


export const patchCustomerInfo = (formData, userId, history, customerId) => {
  

  debugger
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
        if (customer.errors) {
          alert(customer.errors);
        } else {
          dispatch(editCustomerInfo(customer.data));
          // dispatch(resetCustomerForm());
          history.push(`/users/${userId}/customers/${customer.data.id}`);
        }
      });
  };
};

export const destroyCustomer = (userId, customerId, history) => {
  return (dispatch) => {
    // debugger;

    return fetch(
      `http://localhost:3001/api/v1/users/${userId}/customers/${customerId}`,
      {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ userId, customerId }),
      }
    )
      .then((r) => r.json())

      .then((resp) => {
        if (resp.errors) {
          alert(resp.errors);
        } else {
          dispatch(customerList(userId));
          // dispatch(getPianos(userId));
          dispatch(clearCurrentCustomer());
          history.push(`/users/${userId}/customers`);
        }
      })
      .catch(console.log);
  };
};
