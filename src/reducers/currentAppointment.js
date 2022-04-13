const initialState = {
  id: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CURRENT_APPOINTMENT":
      return action.appointmentData;
    case "CLEAR_CURRENT_APPOINTMENT":
      return initialState;
    default:
      return state;
  }
};
