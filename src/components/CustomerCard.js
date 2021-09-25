import React from "react";

const CustomerCard = ({ id, name, index }) => {
  return (
    <span>
      {index}. {name}
    </span>
  );
};

export default CustomerCard;
