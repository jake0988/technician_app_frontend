import { renderCustomers } from "./renderCustomers";

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
