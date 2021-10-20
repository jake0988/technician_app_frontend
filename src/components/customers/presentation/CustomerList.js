import React from "react";
import { connect } from "react-redux";
import { customerList } from "../../../actions/customerList";
import { Link } from "react-router-dom";
import { setCurrentCustomer } from "../../../actions/currentCustomer";

export const CustomerList = ({
  userId,
  customers,
  customerList,
  setCurrentCustomer,
}) => {
  const customerCard =
    customers.length > 0 ? (
      customers.map((customer, index) => (
        <p key={customer.attributes.id}>
          <Link to={`/users/${userId}/customers/${customer.attributes.id}`}>
            <span>
              {index + 1}. {customer.attributes.name}
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
