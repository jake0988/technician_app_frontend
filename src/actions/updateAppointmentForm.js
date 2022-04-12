export const setAppointmentFormForEdit = (appointment) => {
  const appointmentFormData = {
    a4: appointment.attributes.a4,
    work_done: appointment.attributes.work_done,
    price: appointment.attributes.price,
    date: appointment.attributes.date,
    hours: appointment.attributes.hours,
  };
  return {
    type: "SET_APPOINTMENT_FORM_FOR_EDIT",
    appointmentFormData,
  };
};

export const updateAppointmentForm = (name, value) => {
  return {
    type: "UPDATE_APPOINTMENT_FORM",
    formData: { name, value },
  };
};
