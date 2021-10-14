import React from "react";
import { Link } from "react-router-dom";
import Login from "./users/Login";
import Signup from "./users/Signup";

export const Home = ({ customers, loggedIn }) => {
  // const { customers } = props;
  const customerCard = !loggedIn ? (
    <h2>
      Welcome, please <Link to="/signup" onClick={() => <Signup />}></Link> or{" "}
      <Link to="/login" onClick={() => <Login />}>
        Login
      </Link>
    </h2>
  ) : customers ? (
    customers.map((customer, index) => (
      <li key={customer.id}>
        <Link to={`/customers/${customer.id}`}>
          {index + 1}. {customer.attributes.name}
        </Link>
      </li>
    ))
  ) : (
    <p>No customers in database </p>
  );
  return <div>{customerCard}</div>;
};
