export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

export const login = (credentials) => {
  console.log(credentials);

  return fetch("http://localhost:3000 /api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((r) => r.json())
    .then((response) => console.log("DKJLNGDSA"))
    .catch((err) => err);
};
