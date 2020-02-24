import { login, logout, createUser } from "./index";
import axiosWrapper from "../../../../apis/axiosCreate";
import userDetails from "../../../../fixtures/userDetails";
import { LOGIN } from "./types";

const userDetail = { userDetails };

it("google login", async () => {
  // axiosWrapper.get = jest
  //     .fn()
  //     .mockImplementation(() => Promise.resolve({ data: "test"}));
  const dispatch = jest.fn().mockImplementation(args => {});
  const returnedFunction = login({
    tokenObj: { access_token: "test Token" },
    profileObj: {
      id: "test",
      email: "test",
      first_name: "test",
      last_name: "test",
      image: "test",
      balance_points: 0,
      wishlist: [],
      cards_gifted: [],
      cards_received: []
    }
  });

  await returnedFunction(dispatch);
  expect(dispatch).toHaveBeenCalledWith({
    type: LOGIN,
    payload: {
      balance_points: 0,
      cards_gifted: [],
      cards_received: [],
      email: "test",
      first_name: "undefined",
      id: "undefined",
      image: "undefined",
      last_name: "undefined",
      wishlist: []
    }
  });
});
it("user login", async () => {
  const dispatch = jest.fn().mockImplementation(args => {});
  const returnedFunction = login({ email: "test@gmail.com", password: "test" });
  axiosWrapper.get = jest.fn().mockImplementation(() => {
    return {
      balance_points: 0,
      cards_gifted: [],
      cards_received: [],
      email: "test",
      first_name: "test",
      id: "test",
      image: "test",
      last_name: "test",
      wishlist: []
    };
  });
  await returnedFunction(dispatch);
  expect(dispatch).toHaveBeenCalledWith({
    type: LOGIN,
    payload: {
      balance_points: 0,
      cards_gifted: [],
      cards_received: [],
      email: "test",
      first_name: "undefined",
      id: "undefined",
      image: "undefined",
      last_name: "undefined",
      wishlist: []
    }
  });
});
it("not a user login", async () => {
  const returnedFunction = login({});

  expect(returnedFunction).toBeTruthy();
});
it("logout", () => {
  expect(logout()).toEqual({ payload: null, type: "LOGOUT" });
});

it("createUser", async () => {
  axiosWrapper.get = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ data: { card: "test" } }));
  const dispatch = jest.fn().mockImplementation(args => {});
  const returnedFunction = createUser(userDetail[0]);
  await returnedFunction(dispatch);
  // expect(dispatch).toHaveBeenCalledWith({
  //   type: RECEIVED_CARDS,
  //   payload: { card: "test" }
  // });
});
