import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentForm from "./AppointmentForm";
import { addAppointment } from "../../actions/appointment";
import { resetAppointmentForm } from "../../actions/appointment";

class AddAppointmentFormWrapper extends Component {
  handleSubmit = (formData) => {
    const { history, userId, customerId } = this.props;
    const newFormData = {
      ...formData,
    };
    this.props.addAppointment(userId, customerId, history, newFormData);
  };

  render() {
    // this.props.clearCurrentCustomer();
    return (
      <div className="AddAppointmentFormWrapper">
        <AppointmentForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updateFormInfo: state.updateFormInfo,
    userId: state.currentUser.id,
    customerId: state.currentCustomer.id,
  };
};

export default connect(mapStateToProps, {
  addAppointment,
  resetAppointmentForm,
})(AddAppointmentFormWrapper);
