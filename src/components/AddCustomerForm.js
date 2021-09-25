import React from "react";
import { connect } from "react-redux";
import { updateCustomerForm } from "../actions/updateCustomerForm";
import { createCustomer } from "../actions/customerList";

const AddCustomerForm = ({
  formData,
  createCustomer,
  name,
  updateCustomerForm,
  userId,
  history,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCustomerForm(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCustomer(formData, userId, history);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Customer Name"
        onChange={handleChange}
      />
      <input type="submit" value="Add Customer" />
    </form>
  );
};

const mapStateToProps = (state) => {
  const userId = state.currentUser ? state.currentUser.id : null;
  const { name } = state.addCustomerForm;
  return {
    formData: name,
    userId,
  };
};

export default connect(mapStateToProps, { createCustomer, updateCustomerForm })(
  AddCustomerForm
);
