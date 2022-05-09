import { getPianos } from "./addPiano";
import { clearcurrentPiano, clearPianos } from "./addPiano";

export const updateSignupForm = (formData) => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData,
  };
};

export const resetSignupForm = () => {
  return {
    type: "CLEAR_SIGNUP_FORM",
  };
};

export const resetLoginForm = () => {
  return {
    type: "RESET_LOGIN_FORM",
  };
};

export const clearCustomers = () => {
  return {
    type: "CLEAR_CUSTOMERS",
  };
};

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

export const signupUser = (signupFormData) => {
  return { type: "NEW_USER_SIGNUP", signupFormData };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER",
  };
};

export const clearCurrentCustomer = () => {
  return {
    type: "CLEAR_CURRENT_CUSTOMER",
  };
};

export const login = (credentials, history) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
          history.push("/");
        } else {
          dispatch(setCurrentUser(response.data.attributes));
          // dispatch(customerList(response.data.attributes.id));
          // dispatch(getPianos(response.data.attributes.id));
          dispatch(resetLoginForm());
          history.push("/users/" + response.data.attributes.id);
        }
      })

      .catch(console.log);
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user.data.attributes));
          dispatch(getPianos(user.data.attributes.id));
        }
      })
      .catch(console.log);
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(clearCurrentUser());
    dispatch(clearCurrentCustomer());
    dispatch(clearCustomers());
    dispatch(clearcurrentPiano());
    dispatch(clearPianos());
    return fetch("http://localhost:3001/api/v1/delete", {
      credentials: "include",
      method: "DELETE",
    });
  };
};

export const signup = (credentials, history) => {
  return (dispatch) => {
    const userInfo = {
      user: credentials,
    };
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user.data.attributes));
          dispatch(resetSignupForm());
          history.push("/users/" + user.data.attributes.id);
        }
      });
  };
};
