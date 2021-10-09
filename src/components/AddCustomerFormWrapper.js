import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCustomerForm } from "../actions/updateCustomerForm";
import CustomerForm from "./CustomerForm";
import { createCustomer } from "../actions/customerList";

class AddCustomerFormWrapper extends Component {
  handleSubmit = (formData) => {
    this.props.createCustomer(formData, this.props.userId, this.props.history);
  };

  render() {
    return (
      <div>
        <CustomerForm editMode handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updateFormInfo: state.updateFormInfo,
    userId: state.currentUser.id,
  };
};

export default connect(mapStateToProps, { createCustomer })(
  AddCustomerFormWrapper
);
