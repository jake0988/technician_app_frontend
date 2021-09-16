import React from "react";

const Customer = ({ name, index }) => {
  return (
    <div>
      <li key={index}>
        {index} {name}
      </li>
    </div>
  );
};

export default Customer;
