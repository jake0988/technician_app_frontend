import React from "react";
import { connect } from "react-redux";
import { customerList } from "../actions/customerList";
import Customer from "./Customer";

const CustomerList = (props) => {
  const customerCard = props.customers.map((customer, index) => {
    <Customer name={customer.name} customer={customer} />;
  });
  return props.currentUser && props.customers ? <ul>{customerCard}</ul> : "";
};

const mapStateToProps = ({ customers, currentUser }) => ({
  customers,
  currentUser,
});

export default connect(mapStateToProps, { customerList })(CustomerList);
