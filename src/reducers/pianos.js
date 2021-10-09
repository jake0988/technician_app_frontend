export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PIANO":
      return state.concat(action.formData);
    case "RENDER_PIANOS":
      return action.pianos;
    case "CLEAR_PIANOS":
      return (state = []);
    default:
      return state;
  }
};
