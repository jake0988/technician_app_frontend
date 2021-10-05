import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser";

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout} className="button">
      <input type="submit" value="Log Out" />
    </form>
  );
};

export default connect(null, { logout })(Logout);
