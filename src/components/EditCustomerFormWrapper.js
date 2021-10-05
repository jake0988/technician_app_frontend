import React from "react";
import CustomerForm from "./CustomerForm";
import { patchCustomerInfo } from "../actions/customerList";
import { connect } from "react-redux";
import { setCustomerFormForEdit } from "../actions/updateCustomerForm";

class EditCustomerFormWrapper extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.props.setCustomerFormForEdit(this.props.currentCustomer);
  // }

  render() {
    const handleSubmit = (formData) => {
      const customerId = this.props.currentCustomer.id;
      const { patchCustomerInfo, history, userId } = this.props;
      patchCustomerInfo(formData, userId, history, customerId);
    };

    return (
      <div>
        <CustomerForm editMode handleSubmit={handleSubmit} />
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
