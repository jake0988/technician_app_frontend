import React from "react";
import AppointmentForm from "./AppointmentForm";
import { patchCustomerInfo } from "../../actions/customerList";
import { connect } from "react-redux";
import { setAppointmentFormForEdit } from "../../actions/updateAppointmentForm";
import { resetCustomerForm } from "../../actions/customerList";
import { patchAppointmentInfo } from "../../actions/appointment";
class EditAppointmentFormWrapper extends React.Component {
  componentDidMount() {
    const appointment = this.props.appointments.find(
      (appointment) => appointment.id === this.props.currentAppointmentId
    );
    appointment && this.props.setAppointmentFormForEdit(appointment);
  }

  componentDidUpdate(previousProps) {
    const appointment = this.props.appointments.find(
      (appointment) => appointment.id === this.props.currentAppointmentId
    );
    appointment &&
      !previousProps.appointment &&
      this.props.setAppointmentFormForEdit(appointment);
  }

  componentWillUnmount() {
    this.props.resetCustomerForm();
  }

  handleSubmit = (formData) => {
    const {
      patchAppointmentInfo,
      history,
      userId,
      currentAppointmentId,
    } = this.props;
    const newFormData = {
      ...formData,
      currentAppointmentId,
      userId,
    };
    patchAppointmentInfo(
      newFormData,
      this.props.userId,
      history,
      this.props.currentCustomerId,
      this.props.currentAppointmentId
    );
  };

  render() {
    return (
      <div>
        <AppointmentForm editMode handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customers: state.customers,
  };
};

export default connect(mapStateToProps, {
  patchAppointmentInfo,
  setAppointmentFormForEdit,
  resetCustomerForm,
})(EditAppointmentFormWrapper);
