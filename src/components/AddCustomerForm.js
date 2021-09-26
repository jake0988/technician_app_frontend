import React from "react";
import { connect } from "react-redux";
import { updateCustomerForm } from "../actions/updateCustomerForm";
import { createCustomer } from "../actions/customerList";

const AddCustomerForm = ({
  formData,
  createCustomer,
  name,
  address,
  email,
  number_of_pianos,
  phone_number,
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
      <input type="submit" value="Add Customer" />
    </form>
  );
};

const mapStateToProps = (state) => {
  const userId = state.currentUser ? state.currentUser.id : null;
  const { name, address, email, phone_number, number_of_pianos } =
    state.addCustomerForm;
  return {
    formData: {
      name,
      address,
      email,
      phone_number,
      number_of_pianos,
    },
    userId,
  };
};

export default connect(mapStateToProps, { createCustomer, updateCustomerForm })(
  AddCustomerForm
);
