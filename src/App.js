import "./App.css";
import React, { Component } from "react";
import Login from "./component/Login";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import Logout from "./component/Logout";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return this.props.currentUser ? <Logout /> : <Login />;
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(App);
