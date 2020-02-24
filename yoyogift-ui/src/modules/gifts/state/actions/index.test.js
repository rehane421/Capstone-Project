import axiosWrapper from "../../../../apis/axiosCreate";
import {
  fetchCards,
  fetchCard,
  adminUpdateCard,
  fetchCardFilter,
  adminAddCard,
  updateCardCount
} from "./index.js";
import {
  FETCH_CARDS,
  FETCH_CARD_FILTER,
  ADMIN_ADD_CARD,
  UPDATE_CARD_COUNT,
  ADMIN_UPDATE_CARD
} from "./types";

describe("fetchCard", () => {
  it("fetchCards", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ card: "test" }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const returnedFunction = fetchCards();
    await returnedFunction(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: FETCH_CARDS,
      payload: { card: "test" }
    });
  });

  it("fetchCard with id", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ test: "test" }));
    expect(await fetchCard(1)(() => 1)).toBe(undefined);
  });

  it("admin should update cards", async () => {
    axiosWrapper.patch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ card: "test" }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const returnedFunction = adminUpdateCard(1, {});
    await returnedFunction(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: ADMIN_UPDATE_CARD,
      payload: { card: "test" }
    });
  });

  it("fetchCardFilter", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ card: "test" }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const returnedFunction = fetchCardFilter({ card: "test" });
    await returnedFunction(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: FETCH_CARD_FILTER,
      payload: { card: "test" }
    });
  });

  it("adminAddCard", async () => {
    axiosWrapper.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ card: "test" }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const returnedFunction = adminAddCard({});
    await returnedFunction(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: ADMIN_ADD_CARD,
      payload: { card: "test" }
    });
  });

  it("updateCardCount", async () => {
    axiosWrapper.patch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "test" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const returnedFunction = updateCardCount(1, 10);
    await returnedFunction(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: UPDATE_CARD_COUNT,
      payload: { card: "test" }
    });
  });
});
