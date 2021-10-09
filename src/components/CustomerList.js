import React from "react";
import { connect } from "react-redux";
import { customerList } from "../actions/customerList";
import { Link } from "react-router-dom";
import { currentCustomer } from "../actions/currentCustomer";

const CustomerList = (props) => {
  const handleClick = (id) => {
    const customerData = props.customers.find(
      (customer) => customer.attributes.id === id
    );
    props.currentCustomer(customerData.attributes);
  };

  const customerCard =
    props.customers.length > 0 ? (
      props.customers.map((customer, index) => (
        <p key={customer.attributes.id}>
          <Link
            onClick={() =>
              handleClick(customer.attributes.id, customer.attributes.name)
            }
            to={`/users/${props.currentUser.id}/customers/${customer.attributes.id}`}
          >
            {customer.attributes ? (
              <span>
                {index + 1}. {customer.attributes.name}
              </span>
            ) : (
              <span>.No customer name rendered</span>
            )}
          </Link>
        </p>
      ))
    ) : (
      <h2>No Customers In Database</h2>
    );
  return customerCard;
};

const mapStateToProps = ({ customers, currentUser }) => ({
  customers,
  currentUser,
});

export default connect(mapStateToProps, { customerList, currentCustomer })(
  CustomerList
);
