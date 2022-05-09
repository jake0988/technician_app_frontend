import React, { useRef } from "react";
import { Table, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { DeletePianoButton } from "./DeletePianoButton";
import Td from "../appointments/Td";
import { useEffect } from "react";
import { UserNavCard } from "../users/UserNavCard";
import { useDispatch, useSelector } from "react-redux";
import { getPianos } from "../../actions/addPiano";

export const PianoListTable = ({
  userId,
  history,
  customerName,
  pianos,
  image,
  currentCustomerId,
  appointmentId,
  currentCustomerPianos,
  currentAppointmentPianos,
  isCustomerCard,
  isAppointmentCard,
}) => {
  const dispatch = useDispatch()
  const current = useRef();
  useEffect(() => {
    current.current = currentVariable(isCustomerCard, isAppointmentCard);
  }, []);
  function currentVariable(isCustomer, isAppointment) {
    return isCustomer
      ? currentCustomerPianos
      : isAppointment
      ? currentAppointmentPianos
      : null;
  }

  const appointmentList = useSelector((state) => state.appointments);
  function appointments(piano) {
    return appointmentList.filter(
      (appointment) => appointment.attributes.piano_id === piano.attributes.id
    );
  }
  function tableList() {
    return (
      <Container fluid>
        <Table>
          <thead>
            <tr>
              <td>
                <strong>Customer Name: {customerName}</strong>
              </td>
              <td>
                <UserNavCard
                  userId={userId}
                  currentCustomerId={currentCustomerId}
                  history={history}
                />
              </td>
            </tr>
            <tr>
              <th key={uuidv4(1)}>#</th>
              <th key={uuidv4(1)}>Make</th>
              <th key={uuidv4(1)}>Model</th>
              <th key={uuidv4(1)}>Serial</th>
              <th key={uuidv4(1)}>Appointment</th>
              <th key={uuidv4(1)}>Picture</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentVariable(isCustomerCard, isAppointmentCard)
              ? currentVariable(isCustomerCard, isAppointmentCard).map(
                  (piano, key) => (
                    <tr key={uuidv4(key)}>
                      <Td
                        key={uuidv4(key)}
                        to={`/users/${userId}/customers/${currentCustomerId}/pianos/${piano.attributes.id}`}
                      >
                        {key + 1}
                      </Td>
                      <Td key={uuidv4(key)}>{piano.attributes.make}</Td>
                      <Td key={uuidv4(key)}>{piano.attributes.model}</Td>
                      <Td key={uuidv4(key)}>{piano.attributes.serial}</Td>
                      <td>
                        {appointments(piano) ? (
                          <div style={{ overflow: "auto" }}>
                            {appointments(piano).map((appointment) => {
                              console.log(appointment);

                              return (
                                <Td
                                  to={`/users/${userId}/customers/${currentCustomerId}/appointments/${appointment.id}`}
                                >
                                  {appointment
                                    ? appointment.attributes.date + ", "
                                    : null}
                                </Td>
                              );
                            })}
                          </div>
                        ) : null}
                      </td>
                      <Td key={uuidv4(key)}>
                        {piano.attributes.image_url ? (
                          <img
                            src={piano.attributes.image_url}
                            alt="Piano"
                            height="100"
                            width="100"
                          />
                        ) : null}
                      </Td>
                      <td>
                        <div>
                          <DeletePianoButton
                            customerId={currentCustomerId}
                            pianoId={piano.attributes.id}
                            history={history}
                            userId={userId}
                          />
                        </div>
                      </td>
                    </tr>
                  )
                )
              : null}
          </tbody>
        </Table>
      </Container>
    );
  }
  return tableList();
};
