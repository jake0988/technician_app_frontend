import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import { connect } from "react-redux";

const Nav = ({ currentUser }) => {
  return (
    <div className="NavBar">
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

export default connect(mapStateToProps)(Nav);
