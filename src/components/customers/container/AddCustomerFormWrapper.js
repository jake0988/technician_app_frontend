import React, { Component } from "react";
import { connect } from "react-redux";
import CustomerForm from "../presentation/CustomerForm";
import { createCustomer } from "../../../actions/customerList";
import { resetCustomerForm } from "../../../actions/customerList";

class AddCustomerFormWrapper extends Component {
  handleSubmit = (formData) => {
    const customerId = this.props.currentCustomer.id;
    const { history, userId } = this.props;
    console.log("Form data", formData);
    const newFormData = {
      ...formData,
      customerId: customerId,
      userId: this.props.userId,
    };
    this.props.createCustomer(newFormData, userId, history);
  };

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, { createCustomer, resetCustomerForm })(
  AddCustomerFormWrapper
);
