import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser";
import Nav from "./components/Nav";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return <Nav />;
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(App);
