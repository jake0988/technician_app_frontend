import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/customers">
        Customer List |
      </NavLink>
      <NavLink exact activeClassName="active" to="/customers/new">
        Add A Customer
      </NavLink>
      {currentUser ? <p>Welcome {currentUser.name}</p> : ""}
      {currentUser ? (
        <Logout />
      ) : (
        <div>
          <Login /> <Signup />{" "}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps)(NavBar);
