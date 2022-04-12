import React from "react";
import { PianoList } from "../../pianos/PianoList";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { appointmentsList } from "../../../actions/appointment";

const CustomerCard = ({
  customer,
  pianos,
  setCurrentCustomer,
  destroyCustomer,
  history,
  destroyPiano,
  appointments,
}) => {
  const { name, address, phone_number, email, id, user_id } =
    customer.attributes;
  const pianoList = pianos.filter(
    (piano) =>
      piano.attributes.customer_id === id &&
      piano.attributes.user_id === user_id
  );
  const length = pianoList.length;
  useEffect(() => {
    setCurrentCustomer(customer.attributes, history);
<<<<<<< HEAD
  }, [customer.attributes]);
=======
  }, []);
>>>>>>> refs/remotes/origin/main

  // const appointmentIds = Object.values(
  //   Object.fromEntries(
  //     Object.entries(appointments).filter(([key]) => key.includes("id"))
  //   )
  // );
  // // debugger;
  // const appointmentsLink = appointmentIds.map((appointment, index) => (
  //   <p key={appointment}>
  //     <Link
  //       to={`/users/${user_id}/customers/${id}/appointments/${appointment}`}
  //     >
  //       Appointment {index + 1}
  //     </Link>
  //   </p>
  // ));
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
      {/* <div>{appointmentsLink}</div> */}
      <ul>
        <PianoList
          pianos={pianoList}
          userId={user_id}
          customerId={id}
          destroyPiano={destroyPiano}
          history={history}
        />
      </ul>
      <Link to={`/users/${user_id}/customers/${id}/edit`}>
        <button className="button">Edit Customer</button>
      </Link>{" "}
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          destroyCustomer(user_id, id, history);
        }}
      >
        Delete Customer
      </button>
    </div>
  );
};
export default CustomerCard;
