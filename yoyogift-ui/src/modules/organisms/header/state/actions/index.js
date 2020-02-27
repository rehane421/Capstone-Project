import { LOGIN, LOGOUT } from "./types";
import axiosWrapper from "../../../../../apis/axiosCreate";
import history from "../../../../util/history";
import { apiURL } from "../../../../../config/constants";

//logging
import log from "loglevel";
import remote from "loglevel-plugin-remote";

const customJSON = log => ({
  msg: log.message,
  level: log.level.label,
  stacktrace: log.stacktrace
});

export const login = object => async dispatch => {
  if (object.tokenObj && object.tokenObj.access_token) {
    const { profileObj } = object;
    const userData = {
      id: `${profileObj.googleId}`,
      email: `${profileObj.email}`,
      first_name: `${profileObj.givenName}`,
      last_name: `${profileObj.familyName}`,
      image: `${profileObj.imageUrl}`,
      balance_points: 0,
      wishlist: [],
      cards_gifted: [],
      cards_received: []
    };
    dispatch({
      type: LOGIN,
      payload: userData
    });
    window.localStorage.setItem("user", JSON.stringify(userData));
    history.push("/");
  } else if (object.email) {
    const { email, password } = object;
    try {
      const response = await axiosWrapper.get(
        `/users?email=${email}&last_name=${password}`
      );

      remote.apply(log, {
        format: customJSON,
        url: { apiURL }
      });
      log.enableAll();

      if (response.data.length > 0) {
        dispatch({
          type: LOGIN,
          payload: response.data[0]
        });
        log.info(`user [${email}] is logged in at [${new Date()}]`);
        window.localStorage.setItem("user", JSON.stringify(response.data[0]));
        history.push("/");
      } else {
        log.error("else error");
      }
    } catch {
      // console.error("error");
      log.error("Server error");
    }
  } else {
    log.error("User not found");
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null
  };
};

export const createUser = userDetails => async dispatch => {
  await axiosWrapper.post(`/users`, userDetails);
};
