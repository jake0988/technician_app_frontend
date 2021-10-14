const initialState = {
  id: "",
  make: "",
  model: "",
  year: "",
  image: "",
  serial: "",
  notes: "",
};

export default (state = initialState, action) => {
  console.log("IN REDUCER", action.pianoData);
  switch (action.type) {
    case "ADD_CURRENT_PIANO":
      return action.pianoData;
    case "CLEAR_CURRENT_PIANO":
      return initialState;
    default:
      return state;
  }
};
