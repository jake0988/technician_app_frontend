export default (state = [], action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT_SUCCESS":
      return [...state, action.appointment];
    case "LIST_APPOINTMENTS":
      return action.appoinments;
    default:
      return state;
  }
};
