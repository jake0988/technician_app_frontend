import React from "react";
import { connect } from "react-redux";
import { signup, updateSignupForm } from "../../actions/currentUser";

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  const handleClick = (e) => {
    e.preventDefault();
    signup(signupFormData, history);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updateFormInfo = {
      ...signupFormData,
      [name]: value,
    };
    updateSignupForm(updateFormInfo);
  };

  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.name}
        name="name"
        placeholder="Name:"
      />
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.username}
        name="username"
        placeholder="Username:"
      />
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.password}
        placeholder="Password:"
        name="password"
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupForm,
  };
};

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
