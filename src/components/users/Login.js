import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../../actions/loginForm";
import { login } from "../../actions/currentUser.js";

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  const handleClick = (e) => {
    e.preventDefault();
    login(loginFormData, history);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value,
    };
    updateLoginForm(updatedFormInfo);
  };

  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        placeholder="Username: "
        value={loginFormData.username}
        name="username"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Password: "
        value={loginFormData.password}
        name="password"
        onChange={handleInputChange}
      />
      <input type="submit" value="Log In" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm,
  };
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
