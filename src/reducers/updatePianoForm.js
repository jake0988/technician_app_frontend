const initialState = {
  make: "",
  model: "",
  serial: "",
  notes: "",
  year: "",
  images: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PIANO_FORM":
      return action.pianoForm;
    case "CLEAR_PIANO_FORM":
      return initialState;
    default:
      return state;
  }
};
