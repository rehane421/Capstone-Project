import giftsReducer from "./giftsReducer";
import cardList from "../../../../fixtures/cards";
const cards = { cardList };
const card = cards[0];

describe("giftsReducer", () => {
  it("should sets up initial state", () => {
    const state = giftsReducer(undefined, {
      type: "@@INIT"
    });

    expect(state).toEqual({
      giftCards: [],
      giftCardsFiltered: [],
      giftCard: {}
    });
  });

  it("FETCH_CARD", () => {
    const action = {
      type: "FETCH_CARD",
      payload: { data: { card } }
    };

    const state = giftsReducer(card, action);

    expect(state).toEqual({
      ...state,
      card
    });
  });

  it("FETCH_CARDS", () => {
    const action = {
      type: "FETCH_CARDS",
      payload: { data: { card } }
    };

    const state = giftsReducer(card, action);

    expect(state).toEqual({
      ...state,
      card
    });
  });

  it("ADMIN_ADD_CARD", () => {
    const action = {
      type: "ADMIN_ADD_CARD",
      payload: { data: { card } }
    };

    const state = giftsReducer(card, action);

    expect(state).toEqual({
      ...state,
      card
    });
  });

  it("ADMIN_UPDATE_CARD", () => {
    const action = {
      type: "ADMIN_UPDATE_CARD",
      payload: { giftCards: { card } }
    };

    const state = giftsReducer(card, action);

    expect(state).toEqual({
      ...state,
      card
    });
  });

  it("FETCH_CARD_FILTER", () => {
    const action = {
      type: "FETCH_CARD_FILTER",
      payload: { data: { card } }
    };

    const state = giftsReducer(card, action);

    expect(state).toEqual({
      ...state,
      card
    });
  });
  it("UPDATE_CARD_COUNT", () => {
    const action = {
      type: "UPDATE_CARD_COUNT",
      payload: { data: { card } }
    };

    const state = giftsReducer(card, action);

    expect(state).toEqual({
      ...state,
      card
    });
  });
});
