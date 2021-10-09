import React from "react";
import { connect } from "react-redux";
import { updateCustomerForm } from "../actions/updateCustomerForm";
import { createCustomer } from "../actions/customerList";

const CustomerForm = ({
  handleSubmit,
  formData,
  updateCustomerForm,
  editMode,
}) => {
  const { name, address, email, phone_number } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCustomerForm(name, value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createCustomer(formData, userId, history);
  // };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);
      }}
    >
      <p>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Customer Name"
          onChange={handleChange}
        />
      </p>

      <p>
        <input
          type="tel"
          value={phone_number}
          name="phone_number"
          placeholder="Phone Number"
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="email"
          value={email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="text"
          size="75"
          value={address}
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
      </p>
      {editMode ? (
        <input type="submit" value="Edit Customer" />
      ) : (
        <input type="submit" value="Add Customer" />
      )}
    </form>
  );
};

const mapStateToProps = (state) => {
  const userId = state.currentUser ? state.currentUser.id : null;

  return {
    customers: state.customers,
    formData: state.addCustomerForm,
    userId,
  };
};

export default connect(mapStateToProps, { createCustomer, updateCustomerForm })(
  CustomerForm
);
