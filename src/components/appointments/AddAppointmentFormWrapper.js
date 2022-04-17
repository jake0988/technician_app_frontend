import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentForm from "./AppointmentForm";
import { addAppointment } from "../../actions/appointment";
import { resetAppointmentForm } from "../../actions/appointment";
import { customerList } from "../../actions/customerList";

class AddAppointmentFormWrapper extends Component {
  componentDidMount() {
    customerList(this.props.userId);
  }
  handleSubmit = (formData) => {
    const { history, userId, currentCustomerId } = this.props;
    const newFormData = {
      ...formData,
    };
    this.props.addAppointment(userId, currentCustomerId, history, newFormData);
  };
  render() {
    const currentCustomer = this.props.customers.find(
      (customer) => customer.id === this.props.currentCustomerId
    );
    return (
      <div className="AddAppointmentFormWrapper">
        <AppointmentForm
          handleSubmit={this.handleSubmit}
          currentCustomer={currentCustomer}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updateFormInfo: state.updateFormInfo,
    userId: state.currentUser.id,
    customers: state.customers,
  };
};

export default connect(mapStateToProps, {
  addAppointment,
  resetAppointmentForm,
  customerList,
})(AddAppointmentFormWrapper);
