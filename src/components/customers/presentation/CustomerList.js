import React from "react";
import { connect } from "react-redux";
import { customerList } from "../../../actions/customerList";
import { Link } from "react-router-dom";
import { setCurrentCustomer } from "../../../actions/currentCustomer";

const CustomerList = (props) => {
  const customerCard =
    props.customers.length > 0 ? (
      props.customers.map((customer, index) => (
        <p key={customer.attributes.id}>
          <Link to={`/customers/${customer.attributes.id}`}>
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

const mapStateToProps = ({ customers, currentUser }) => ({
  customers,
  currentUser,
});

export default connect(mapStateToProps, { customerList, setCurrentCustomer })(
  CustomerList
);
