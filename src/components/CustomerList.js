import React from "react";
import { connect } from "react-redux";
import { customerList } from "../actions/customerList";
import Customer from "./Customer";
import { Link } from "react-router-dom";

const CustomerList = (props) => {
  // debugger;
  const customerCard =
    props.customers.length > 0
      ? props.customers.map((customer) => (
          <p key={customer.id}>
            <Customer id={customer.id} name={customer.name} />
            <Link to={`/customers/${customer.id}`}>
              {customer.attributes.name}
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

export default connect(mapStateToProps, { customerList })(CustomerList);
