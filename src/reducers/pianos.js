export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PIANO":
      return state.concat(action.formData);
    case "RENDER_PIANOS":
      return action.pianos;
    case "CLEAR_PIANOS":
      return (state = []);
    case "DELETE_PIANO":
      const piano = state.find(
        (piano) => piano.attributes.id === action.pianoId
      );
      return { ...state.slice(0, piano), ...state.slice(piano, 1) };
    default:
      return state;
  }
};
