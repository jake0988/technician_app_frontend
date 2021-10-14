import React from "react";
import { PianoList } from "../../pianos/PianoList";
import { useEffect } from "react";

const CustomerCard = (props) => {
  const { name, address, phone_number, email, id, user_id } =
    props.customer.attributes;

  const pianoList = props.pianos.filter(
    (piano) =>
      piano.attributes.customer_id === id &&
      piano.attributes.user_id === user_id
  );
  const length = pianoList.length;
  useEffect(() => {
    props.setCurrentCustomer(props.customer.attributes, props.history);
  });

  return (
    <div className="customerCard">
      {" "}
      Name: {name} Address: {address} Phone Number: {phone_number} email:{" "}
      {email} Number Of Pianos: {length}
      <PianoList pianos={pianoList} />
    </div>
  );
};
export default CustomerCard;
