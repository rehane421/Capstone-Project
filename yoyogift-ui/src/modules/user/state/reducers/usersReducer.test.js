import usersReducer from "./usersReducer";
import cardList from "../../../../fixtures/cards";
import userDetails from "../../../../fixtures/userDetails";

const cards = { cardList };
const card = cards[0];
const users = { userDetails };
const user = users[0];

// set up initial state
it("should sets up initial state", () => {
  const state = usersReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual({
    UserDetails: [],
    cards: []
  });
});

//received cards
it("RECEIVED CARDS", () => {
  const action = {
    type: "RECEIVED_CARDS",
    payload: cards
  };

  const state = usersReducer(cards, action);

  expect(state).toEqual({
    ...state,
    cards
  });
});

it("SENT_CARDS", () => {
  const action = {
    type: "SENT_CARDS",
    payload: cards
  };

  const state = usersReducer(cards, action);

  expect(state).toEqual({
    ...state,
    cards
  });
});

it("USER_DETAILS", () => {
  const action = {
    type: "USER_DETAILS",
    payload: user
  };

  const state = usersReducer(user, action);

  expect(state).toEqual({
    ...state,
    users: user
  });
});

/*Reedem card test case failed */
it("REDEEM_CARD", () => {
  const action = {
    type: "REDEEM_CARD",
    payload: cards
  };

  const state = usersReducer(cards, action);

  expect(state).toEqual({
    ...state,
    cards
  });
});

it("UPDATE_BALANCE", () => {
  const action = {
    type: "UPDATE_BALANCE",
    payload: user
  };

  const state = usersReducer(user, action);

  expect(state).toEqual({
    ...state,
    user
  });
});

it("UPDATE_TRANSACT", () => {
  const action = {
    type: "UPDATE_TRANSACT",
    payload: user
  };

  const state = usersReducer(user, action);

  expect(state).toEqual({
    ...state,
    user
  });
});
