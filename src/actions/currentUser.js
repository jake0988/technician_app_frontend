export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

export const login = (credentials) => {
  return (dispatch) => {
    return fetch("http://www.localhost:3001/api/v1", {
      method: "POST",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ username: "BobbyUser", password: "password" }),
    });
  };
};
