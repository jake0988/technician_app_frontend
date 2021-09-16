export const renderCustomers = (customers) => {
  return {
    type: "RENDER_CUSTOMERS",
    customers,
  };
};

export const customerList = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/customers")
      .then((res) => res.json())
      .then((customers) => {
        if (customers.error) {
          alert(customers.error);
        } else {
          dispatch(renderCustomers(customers.data));
        }
      })
      .catch(console.log);
  };
};
