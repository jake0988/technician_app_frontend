import React from "react";

const CustomerCard = (props) => {
  const { name, address, phone_number, email, number_of_pianos } =
    props.customer.attributes;
  return (
    <span>
      Name: {name} Address: {address} Phone Number: {phone_number} email:{" "}
      {email} Number Of Pianos: {parseInt(number_of_pianos).length}
    </span>
  );
};

export default CustomerCard;
