import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/currentUser";
import { withRouter } from "react-router";
const Logout = ({ logout, history }) => {
  return (
    <form
      className="logout"
      onSubmit={(e) => {
        e.preventDefault();
        logout();
        history.push("/");
      }}
    >
      <input type="submit" value="Log Out" />
    </form>
  );
};

export default withRouter(connect(null, { logout })(Logout));
