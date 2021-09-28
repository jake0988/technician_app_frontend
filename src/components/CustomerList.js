import React from "react";
import { connect } from "react-redux";
import { customerList } from "../actions/customerList";
import { Link } from "react-router-dom";
import { currentCustomer } from "../actions/currentCustomer";

const CustomerList = (props, { customerList }) => {
  // debugger;
  const handleClick = (customer) => {
    const currentCustomerData = {
      id: customer.attributes.id,
      name: customer.attributes.name,
    };
    props.dispatch({ customerList }(currentCustomerData));
  };

  const customerCard =
    props.customers.length > 0
      ? props.customers.map((customer) => (
          <p key={customer.id}>
            {customer.id}. {customer.name}
            <Link
              to={`/users/${props.currentUser.id}/customers/${customer.id}`}
              onClick={() => handleClick(customer)}
            >
              {customer.name ? (
                customer.attributes.name
              ) : (
                <span>.No customer name rendered</span>
              )}
              )
            </Link>
          </p>
        ))
      : null;
  return customerCard;
};

const mapStateToProps = ({ customers, currentUser }) => ({
  customers,
  currentUser,
});

export default connect(mapStateToProps, { customerList, currentCustomer })(
  CustomerList
);
