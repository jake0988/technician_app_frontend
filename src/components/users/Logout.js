import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/currentUser";
import { withRouter } from "react-router";
import { Button } from "react-bootstrap";

const Logout = ({ logout, history }) => {
  function handleClick(e) {
    e.preventDefault();
    logout();
    history.push("/");
  }

  return (
    <Button variant="secondary" onClick={(e) => handleClick(e)}>
      Log Out
    </Button>
  );
};

export default withRouter(connect(null, { logout })(Logout));
