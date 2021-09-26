import React from "react";
import { connect } from "react-redux";
import { customerList } from "../actions/customerList";
import { Link } from "react-router-dom";

const CustomerList = (props) => {
  // debugger;
  const customerCard =
    props.customers.length > 0
      ? props.customers.map((customer, index) => (
          <p key={customer.id}>
            {index + 1}. {customer.name}
            <Link
              to={`/users/${props.currentUser.id}/customers/${customer.id}`}
            >
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
