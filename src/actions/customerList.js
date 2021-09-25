import { renderCustomers } from "./renderCustomers";

const resetCustomerForm = () => {
  return {
    type: "RESET_CUSTOMER_FORM",
  };
};

const newCustomer = (name) => {
  return {
    type: "CREATE_NEW_CUSTOMER",
    formData: name,
  };
};

export const customerList = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/customers", {
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

export const createCustomer = (name, userId, history) => {
  const customerInfo = {
    customer: {
      name,
      user_id: userId,
    },
  };
  // debugger;
  return (dispatch) => {
    return (
      fetch("http://localhost:3001/api/v1/customers", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(customerInfo),
      })
        .then((resp) => resp.json())
        .then((customer) => dispatch(newCustomer(name))),
      dispatch(resetCustomerForm(), history.push("/"))
    );
  };
};
