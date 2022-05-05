export const updatePianoForm = (name, value) => {
  return {
    type: "UPDATE_PIANO_FORM",
    formData: { name, value },
  };
};
