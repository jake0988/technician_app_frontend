import React from "react";
import { Link } from "react-router-dom";

const Customer = ({ id, name }) => {
  return (
    <div>
      <p key={id}>{name}</p>
    </div>
  );
};

export default Customer;
