import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm";

const Login = () => {
  // const handleClick = (e) => {
  //   e.preventDefault();
  // };

  // const handleChange = (e) => {
  //   if (e.target.name === "username") {
  //     this.text.setState({ username: e.target.value });
  //   } else {
  //     this.text.setState({ password: e.target.value });
  //   }
  // };

  return (
    <div>
      <form onSubmit>
        <input
          type="text"
          placeholder="Username: "
          value={undefined}
          name="username"
          onChange
        />
        <input
          type="text"
          placeholder="Password: "
          value={undefined}
          name="password"
          onChange
        />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
  };
};

export default connect(mapStateToProps, updateLoginForm)(Login);
