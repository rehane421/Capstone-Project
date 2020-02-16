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
  FETCH_CARD,
  FETCH_CARD_FILTER,
  ADMIN_ADD_CARD,
  UPDATE_CARD_COUNT,
  ADMIN_UPDATE_CARD
} from "./types";

describe("fetchCard", () => {
  let data;
  beforeEach(() => {
    data = {
      id: 1,
      cardName: "Amazon Gift ",
      cardPoints: "1200",
      cardCategory: "Ecommerce",
      cardRetailer: "Amazon",
      cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
      cardExpiryDate: "2019-06-29T00:00:00.000Z",
      cardCount: 95,
      cardImage: "https://pngimg.com/uploads/amazon/amazon_PNG21.png",
      cardVendor: "amazon",
      cardShortDesc: "10% OFF",
      cardLongDesc:
        "Amazon Gift Cards are the Perfect Gift, Every Time. Use the eBay Gift Card to shop from millions of items in Electronics, Toys, Motors, Fashion, Home & Garden, Art, Collectibles, Sporting Goods and everything in-between. eBay Gift Cards never expire and have no fees. Use it to shop now or wait for the deal of a lifetime.",
      cardComments: [
        {
          id: 1,
          first_name: "Sebastian",
          last_name: "Eschweiler",
          email: "sebastian@mindtree.com",
          rating: 4,
          comment: "Great gift card. Happy to gift!",
          commented_on:
            "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
        },
        {
          id: 2,
          first_name: "Bill",
          last_name: "Joe",
          email: "billjoe@mindtree.com",
          rating: 3,
          comment: "10% discount on Amazon. Yay",
          commented_on:
            "Sun Jun 12 2019 15:43:25 GMT+0530 (India Standard Time)"
        },
        {
          id: 3,
          first_name: "Murphy",
          last_name: "Dil",
          email: "murphydil@mindtree.com",
          rating: 3,
          comment: "Woah! Instant discount.",
          commented_on:
            "Sun Apr 20 2019 15:43:25 GMT+0530 (India Standard Time)"
        }
      ]
    };
  });

  // it("fetchCards", async () => {
  //   axiosWrapper.get = jest
  //     .fn()
  //     .mockImplementation(() => Promise.resolve({ test: "test" }));
  //   expect(await fetchCards()(() => 1)).toBe(undefined);
  // });
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
