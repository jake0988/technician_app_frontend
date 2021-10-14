import React from "react";
import Login from "./users/Login";
import Logout from "./users/Logout";
import Signup from "./users/Signup";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { destroyCustomer } from "../actions/customerList";
import { destroyPiano } from "../actions/addPiano";

const NavBar = ({
  currentUser,
  currentCustomer,
  history,
  destroyCustomer,
  currentPiano,
}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Nav className="me-auto">
          {currentUser ? <span>Welcome {currentUser.name}</span> : ""}

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
            to={`/`}
          >
            Home
          </NavLink>

          <NavLink
            exact
            activeClassName="active"
            activeStyle={{
              background: "blue",
              color: "white",
            }}
            to={`/customers`}
          >
            Customer List
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
        </Nav>

        {currentCustomer.name ? (
          <div className="row">
            <div className="col-sm-6">
              Customer Name: {currentCustomer.name}{" "}
              <NavLink to={`/customers/${currentCustomer.id}/edit`}>
                <button className="button">Edit Customer</button>
              </NavLink>
              <button
                className="button"
                onClick={() =>
                  destroyCustomer(currentCustomer.id, currentUser.id, history)
                }
              >
                Delete Customer
              </button>
            </div>
            {currentPiano ? (
              <div className="col-sm-6">
                <NavLink to={`/pianos/new`}>Add Piano</NavLink>
                <button
                  className="button"
                  onClick={() =>
                    destroyPiano(
                      currentUser.id,
                      currentCustomer.id,
                      currentPiano.id,
                      history
                    )
                  }
                >
                  Delete Piano
                </button>{" "}
                :
              </div>
            ) : null}
            <div className="col-sm-6">
              <NavLink to={`/pianos/new`}>Add Piano</NavLink>
            </div>
          </div>
        ) : null}
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    currentCustomer: state.currentCustomer,
    currentPiano: state.currentPiano,
  };
};

export default connect(mapStateToProps, { destroyCustomer })(NavBar);
