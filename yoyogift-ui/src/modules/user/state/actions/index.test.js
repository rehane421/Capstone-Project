import axiosWrapper from "../../../../apis/axiosCreate";
import { SENT_CARDS, RECEIVED_CARDS, USER_DETAILS, REDEEM_CARD } from "./types";
import {
  fetchReceivedCards,
  fetchSentCards,
  userDetails,
  redeemCard,
  updateUserBalance,
  updateTransact
} from "./index.js";

describe("gift", () => {
  it("fetchReceivedCards", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "test" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const returnedFunction = fetchReceivedCards("ashish@gmail.com");
    await returnedFunction(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: RECEIVED_CARDS,
      payload: { card: "test" }
    });
  });

  it("fetchSentCards", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "test" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const returnedFunction = fetchSentCards({ card: "test" });
    await returnedFunction(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: SENT_CARDS,
      payload: { card: "test" }
    });
  });

  it("userDetails", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { payload: "test" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const returnedFunction = userDetails(1);
    await returnedFunction(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: USER_DETAILS,
      payload: { payload: "test" }
    });
  });

  it("redeemCard", async () => {
    axiosWrapper.delete = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { id: 102 } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const returnedFunction = redeemCard(0, {});
    await returnedFunction(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: REDEEM_CARD,
      payload: { id: 103 }
    });
  });

  //   it("updateUserBalance", async () => {
  //     axiosWrapper.delete = jest
  //       .fn()
  //       .mockImplementation(() => Promise.resolve({ data: { id: 102 } }));
  //     //  const dispatch = jest.fn().mockImplementation(args => {});
  //     const returnedFunction = updateUserBalance(1, {});
  //     //  await returnedFunction(dispatch);
  //     expect(returnedFunction()()).toHaveBeenCalled();
  //   });

  it("updateUserBalance", async () => {
    axiosWrapper.patch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ test: "test" }));
    expect(await updateUserBalance(0, {})(() => 1)).toBe(undefined);
  });

  it("updateTransact", async () => {
    axiosWrapper.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { id: 102 } }));
    //  const dispatch = jest.fn().mockImplementation(args => {});
    const returnedFunction = updateTransact({});
    //  await returnedFunction(dispatch);
    expect(await returnedFunction()).toHaveBeenCalled();
  });
});
