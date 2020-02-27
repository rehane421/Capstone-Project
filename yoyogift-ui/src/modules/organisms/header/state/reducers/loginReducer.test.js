import loginReducer from "./loginReducer";
// import cardList from "../../../../fixtures/cards";
import userDetails from "../../../../../fixtures/userDetails";
// const cards = { cardList };
// const card = cards[0];
const users = { userDetails };
const user = users[0];

describe("loginReducer", () => {
  it("should sets up initial state", () => {
    const state = loginReducer(undefined, {
      type: "@@INIT"
    });

    expect(state).toEqual({
      detailsObject: {},
      loginStatus: false
    });
  });

  it("LOGIN", () => {
    const action = {
      type: "LOGIN",
      payload: { data: { user } }
    };

    const state = loginReducer(user, action);

    expect(state).toEqual({
      ...state,
      user
    });
  });

  it("LOGOUT", () => {
    const action = {
      type: "LOGOUT",
      payload: { data: { user } }
    };

    const state = loginReducer(user, action);

    expect(state).toEqual({
      ...state,
      user
    });
  });
});
