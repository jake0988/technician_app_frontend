import React from "react";
import Login from "./users/Login";
import Logout from "./users/Logout";
import Signup from "./users/Signup";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = ({ currentUser, currentCustomer, history }) => {
  return (
    <div className="NavBar">
      {currentUser ? (
        <Logout />
      ) : (
        <div>
          <Login /> <Signup />{" "}
        </div>
      )}
      <NavLink
        exact
        activeClassName="active"
        activeStyle={{
          background: "blue",
          color: "white",
        }}
        to={`/customers`}
      >
        Customer List |
      </NavLink>
      <NavLink
        exact
        activeClassName="active"
        activeStyle={{
          background: "blue",
          color: "white",
        }}
        to={`/customers/new`}
      >
        Add A Customer
      </NavLink>

      {currentUser ? <p>Welcome {currentUser.name}</p> : ""}
      {currentCustomer ? (
        <p>
          Customer Name: {currentCustomer.name}{" "}
          <NavLink to={`/customers/${currentCustomer.id}/edit`}>
            <button className="button">Edit Customer</button>
          </NavLink>
          <NavLink to={`/pianos/new`}>Add Piano</NavLink>
        </p>
      ) : (
        <p>Select a customer from customer list to add customers</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    currentCustomer: state.currentCustomer,
  };
};

export default connect(mapStateToProps)(NavBar);
