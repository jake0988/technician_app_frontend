import React from "react";
import CustomerForm from "./CustomerForm";
import { patchCustomerInfo } from "../actions/customerList";
import { connect } from "react-redux";
import { setCustomerFormForEdit } from "../actions/updateCustomerForm";

class EditCustomerFormWrapper extends React.Component {
  componentDidMount() {
    this.props.setCustomerFormForEdit(this.props.currentCustomer);
  }

  handleSubmit = (formData) => {
    const customerId = this.props.currentCustomer.id;
    const { patchCustomerInfo, history, userId } = this.props;
    patchCustomerInfo(...formData, userId, history, customerId);
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
    userId: state.currentUser.id,
    currentCustomer: state.currentCustomer,
    customers: state.customers,
  };
};

export default connect(mapStateToProps, {
  patchCustomerInfo,
  setCustomerFormForEdit,
})(EditCustomerFormWrapper);
