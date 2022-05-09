const initialState = {
  make: "",
  model: "",
  serial: "",
  notes: "",
  year: "",
  appointment_id: "",
  imageName: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PIANO_FORM":
      return { ...state, [action.formData.name]: action.formData.value };
    case "CLEAR_PIANO_FORM":
      return initialState;
    default:
      return state;
  }
};
