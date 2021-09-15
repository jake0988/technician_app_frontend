import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { connect } from "react-redux";

const Nav = ({ currentUser }) => {
  return (
    <div className="NavBar">
      {currentUser ? <p>Welcome {currentUser.name}</p> : ""}
      {currentUser ? <Logout /> : <Login />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps)(Nav);
