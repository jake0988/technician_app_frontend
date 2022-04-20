import React from "react";
import CustomerForm from "../presentation/CustomerForm";
import { patchCustomerInfo } from "../../../actions/customerList";
import { connect } from "react-redux";
import { setCustomerFormForEdit } from "../../../actions/updateCustomerForm";
import { resetCustomerForm } from "../../../actions/customerList";

class EditCustomerFormWrapper extends React.Component {
  componentDidMount() {
    this.props.customer &&
      this.props.setCustomerFormForEdit(this.props.customer);
  }

  componentDidUpdate(previousProps) {
    this.props.customer &&
      !previousProps.customer &&
      this.props.setCustomerFormForEdit(this.props.customer);
  }

  componentWillUnmount() {
    this.props.resetCustomerForm();
  }

  handleSubmit = (formData) => {
    const customerId = this.props.customer.attributes.id;
    const { patchCustomerInfo, history, userId } = this.props;
    const { address0, address1, address2, address3, address4 } = formData;
    const wholeAddress = this.arrJoin(
      address0,
      address1,
      address2,
      address3,
      address4
    );
    formData.address = wholeAddress;
    const newFormData = {
      ...formData,
      customerId: this.props.customer.attributes.id,
      userId: this.props.userId,
    };
    patchCustomerInfo(newFormData, userId, history, customerId);
  };

  arrJoin = (a0, a1, a2, a3, a4) => {
    const arr = [a0, a1, a2, a3, a4];
    const arrReturn = arr.join(" ");
    return arrReturn;
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
  resetCustomerForm,
})(EditCustomerFormWrapper);
