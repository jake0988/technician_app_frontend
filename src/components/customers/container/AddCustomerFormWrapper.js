import React, { Component } from "react";
import { connect } from "react-redux";
import CustomerForm from "../presentation/CustomerForm";
import { createCustomer } from "../../../actions/customerList";
import { resetCustomerForm } from "../../../actions/customerList";
import { clearCurrentCustomer } from "../../../actions/currentCustomer";

class AddCustomerFormWrapper extends Component {
  handleSubmit = (formData) => {
    const { history, userId } = this.props;
    
  
    const {address0, address1, address2, address3, address4} = formData
    const wholeAddress = this.arrJoin(address0, address1, address2, address3, address4)
    formData.address = wholeAddress
    const newFormData = {
      ...formData,
    };
    this.props.createCustomer(newFormData, userId, history);
  };
  arrJoin = (a0, a1, a2, a3, a4) => {
    const arr= [a0, a1, a2, a3, a4]
   const arrReturn = arr.join(" ")
   return arrReturn
  }

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
