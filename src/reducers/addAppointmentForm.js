const initialState = {
  initial_a4: "",
  work_done: "",
  price: "",
  date: "",
  hours: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RESET_APPOINTMENT_FORM":
      return initialState;
    case "UPDATE_APPOINTMENT_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value,
      };
    case "SET_APPOINTMENT_FORM_FOR_EDIT":
      return action.appointmentFormData;
    default:
      return state;
  }
};
