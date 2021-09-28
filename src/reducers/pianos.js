// const initialState = {
//   make: "",
//   model: "",
//   serial: "",
//   notes: "",
//   year: "",
// };

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PIANO":
      return state.concat(action.formData);
    case "CLEAR_PIANOS":
      return (state = []);
    default:
      return state;
  }
};
