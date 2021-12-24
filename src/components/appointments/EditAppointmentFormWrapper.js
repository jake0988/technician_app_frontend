// import React from "react";
// import AppointmentForm from "./AppointmentForm";
// import { patchCustomerInfo } from "../../../actions/customerList";
// import { connect } from "react-redux";
// import { setCustomerFormForEdit } from "../../../actions/updateCustomerForm";
// import { resetCustomerForm } from "../../../actions/customerList";

// class EditAppointmentFormWrapper extends React.Component {
//   componentDidMount() {
//     this.props.customer &&
//       this.props.setCustomerFormForEdit(this.props.customer);
//   }

//   componentDidUpdate(previousProps) {
//     this.props.customer &&
//       !previousProps.customer &&
//       this.props.setCustomerFormForEdit(this.props.customer);
//   }

//   componentWillUnmount() {
//     this.props.resetCustomerForm();
//   }

//   handleSubmit = (formData) => {
//     const customerId = this.props.customer.attributes.id;
//     const { patchCustomerInfo, history, userId } = this.props;
//     const newFormData = {
//       ...formData,
//       customerId: this.props.customer.attributes.id,
//       userId: this.props.userId,
//     };
//     patchCustomerInfo(newFormData, userId, history, customerId);
//   };

//   render() {
//     return (
//       <div>
//         <AppointmentForm editMode handleSubmit={this.handleSubmit} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     userId: state.currentUser.id,
//     currentCustomer: state.currentCustomer,
//     customers: state.customers,
//   };
// };

// export default connect(mapStateToProps, {
//   patchCustomerInfo,
//   setCustomerFormForEdit,
//   resetCustomerForm,
// })(EditAppointmentFormWrapper);
