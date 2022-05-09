import { clearPianoForm, getPianos } from "../../actions/addPiano";

export function newPiano(userId, customerId, data, history) {
  return (dispatch) => {
    return fetch(
      `http://localhost:3001/api/v1/users/${userId}/customers/${customerId}/pianos`,
      {
        credentials: "include",
        method: "POST",
        body: data,
        // headers: {
        //   "Content-type": "multipart/form-data",
        // },
      }
    )
      .then((resp) => {
        resp.json();
      })
      .then((resp) => {
        dispatch(getPianos(userId));
        dispatch(clearPianoForm())
        history.push(`/users/${userId}/customers/${customerId}/pianos`)
        console.log("FILE UPLOADED SUCCESSFULLY");
      })
      .catch(function (error) {
        console.log("ERROR WHILE UPLOADING FILE");
      });
  };
}
