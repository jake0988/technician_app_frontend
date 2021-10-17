import React from "react";
import { PianoList } from "../../pianos/PianoList";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const CustomerCard = (props, { destroyCustomer, history }) => {
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
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Number Of Pianos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phone_number}</td>
            <td>{email}</td>
            <td>{length}</td>
          </tr>
        </tbody>
      </Table>
      <ol>
        <PianoList pianos={pianoList} />
      </ol>
      <Link to={`/customers/${id}/edit`}>
        <button className="button">Edit Customer</button>
      </Link>{" "}
      <button
        className="button"
        onClick={() => destroyCustomer({ user_id }, { id }, history)}
      >
        Delete Customer
      </button>
    </div>
  );
};
export default CustomerCard;
