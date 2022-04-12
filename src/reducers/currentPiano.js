const initialState = {
  id: "",
  make: "",
  model: "",
  year: "",
  images: "",
  serial: "",
  notes: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CURRENT_PIANO":
      return action.pianoData;
    case "CLEAR_CURRENT_PIANO":
      return initialState;
    default:
      return state;
  }
};
