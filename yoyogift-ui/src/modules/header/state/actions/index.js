import { LOGIN, LOGOUT } from "./types";
import axiosWrapper from "../../../../apis/axiosCreate";
import history from "../../../common/components/history";

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
      if (response.data.length > 0) {
        dispatch({
          type: LOGIN,
          payload: response.data[0]
        });
        window.localStorage.setItem("user", JSON.stringify(response.data[0]));
        history.push("/");
      }
    } catch {
      console.error("catch error");
    }
  } else {
    console.error("user not found");
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
