import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";

const NavBar = ({ currentUser }) => {
  return <div>{currentUser ? <Logout /> : <Login />}</div>;
};

const mapStateToProps = ({ currentUser }) => {
  return currentUser;
};

export default connect(mapStateToProps)(NavBar);
