import React from "react";
import { Link } from "react-router-dom";
import { DeleteCustomerButton } from "./DeleteCustomerButton";

export const CustomerList = ({
  userId,
  customers,
  destroyCustomer,
  history,
}) => {
  const customerCard =
    customers.length > 0 ? (
      customers.map((customer, index) => (
        <p key={customer.attributes.id}>
          <Link to={`/users/${userId}/customers/${customer.attributes.id}`}>
            <span>
              {index + 1}. {customer.attributes.name}{" "}
            </span>
            <span>
              <DeleteCustomerButton
                destroyCustomer={destroyCustomer}
                userId={userId}
                id={customer.attributes.id}
                history={history}
              />
            </span>
          </Link>
        </p>
      ))
    ) : (
      <h2>No Customers In Database</h2>
    );
  return customerCard;
};

// export default connect(null, { customerList, setCurrentCustomer })(
//   CustomerList
// );
