import React, { Component } from "react";
import { connect } from "react-redux";
import CustomerForm from "../presentation/CustomerForm";
import { createCustomer } from "../../../actions/customerList";
import { resetCustomerForm } from "../../../actions/customerList";
import { clearCurrentCustomer } from "../../../actions/currentCustomer";

class AddCustomerFormWrapper extends Component {
  handleSubmit = (formData) => {
    const { history, userId } = this.props;
    const newFormData = {
      ...formData,
    };
    this.props.createCustomer(newFormData, userId, history);
  };

  render() {
    // this.props.clearCurrentCustomer();
    return (
      <div className="AddCustomerFormWrapper">
        <CustomerForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updateFormInfo: state.updateFormInfo,
    userId: state.currentUser.id,
    currentCustomer: state.currentCustomer,
  };
};

export default connect(mapStateToProps, {
  createCustomer,
  resetCustomerForm,
  clearCurrentCustomer,
})(AddCustomerFormWrapper);
