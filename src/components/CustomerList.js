import React from "react";
import { connect } from "react-redux";
import { customerList } from "../actions/customerList";
import Customer from "./Customer";

class CustomerList extends React.Component {
  componentDidMount() {
    this.props.customerList();
  }
  render() {
    return (
      <ul>
        {this.props.customers.map((customer, index) => (
          <Customer name={customer.attributes.name} index={index + 1} />
        ))}
      </ul>
    );
  }
}
const mapStateToProps = ({ customers }) => ({ customers });

export default connect(mapStateToProps, { customerList })(CustomerList);
