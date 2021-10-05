import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = ({ currentUser, currentCustomer, location }) => {
  return (
    <div className="NavBar">
      <NavLink
        exact
        activeClassName="active"
        activeStyle={{
          background: "blue",
          color: "white",
        }}
        to={`/users/${currentUser.id}/customers`}
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
        to={`/users/${currentUser.id}/customers/new`}
      >
        Add A Customer
      </NavLink>

      {currentUser ? <p>Welcome {currentUser.name}</p> : ""}
      {currentCustomer ? (
        <p>
          Customer Name: {currentCustomer.name}{" "}
          <NavLink
            to={`/users/${currentUser.id}/customers/${currentCustomer.id}/edit`}
          >
            <button className="button">Edit Customer</button>
          </NavLink>
          <NavLink
            to={`/users/${currentUser.id}/customers/${currentCustomer.id}/pianos/new`}
          >
            Add Piano
          </NavLink>
        </p>
      ) : (
        <p>Select a customer from customer list to add customers</p>
      )}

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
  return {
    currentUser: state.currentUser,
    currentCustomer: state.currentCustomer,
  };
};

export default connect(mapStateToProps)(NavBar);
