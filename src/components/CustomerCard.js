import React from "react";

const CustomerCard = (props) => {
  const { name, address, phone_number, email, id } = props.customer;

  const pianoList = props.pianos.filter(
    (piano) => piano.attributes.customer_id === id
  );
  const length = pianoList.length;

  return (
    <div className="customerCard">
      {" "}
      Name: {name} Address: {address} Phone Number: {phone_number} email:{" "}
      {email} Number Of Pianos: {length}
    </div>
  );
};
export default CustomerCard;
