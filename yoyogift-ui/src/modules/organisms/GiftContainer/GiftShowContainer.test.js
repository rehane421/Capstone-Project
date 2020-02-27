import React from "react";
import { shallow } from "../../../enzyme";
import { GiftShowContainer, mapStateToProps } from "./GiftShowContainer";
import CircularProgress from "@material-ui/core/CircularProgress";

describe("GiftShowContainer test", () => {
  let props, wrapper;
  beforeEach(() => {
    props = {
      match: {
        params: {
          id: "id"
        }
      },
      gift: {
        cardPoints: "cardPoints"
      },
      user: {
        balance_points: "balance_points"
      },
      fetchCard: jest.fn(),
      userDetails: jest.fn(() => Promise.resolve({})),
      updateUserBalance: jest.fn(() => Promise.resolve({})),
      updateTransact: jest.fn(() => Promise.resolve({})),
      updateCardCount: jest.fn(() => Promise.resolve({})),
      login: "login"
    };
  });
  it("should render the GiftShowContainer component", () => {
    wrapper = shallow(<GiftShowContainer {...props} />);
    expect(wrapper).toBeTruthy();
  });
  it("should show CircularProgress if gift is empty", () => {
    const prop = {
      ...props,
      gift: {}
    };
    wrapper = shallow(<GiftShowContainer {...prop} />);
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });
  it("should call validateSend function", () => {
    const prop = {
      ...props,
      gift: {
        cardPoints: 500
      },
      user: {
        balance_points: 800
      }
    };
    wrapper = shallow(<GiftShowContainer {...prop} />);
    wrapper.instance().setState({
      cardPoints: 500,
      balance_points: 800
    });
    expect(wrapper.instance().validateSend()).toBeTruthy();
  });
  it("show errorSnackBar", () => {
    const prop = {
      ...props,
      gift: {
        cardPoints: 800
      },
      user: {
        balance_points: 500
      }
    };
    wrapper = shallow(<GiftShowContainer {...prop} />);
    wrapper.instance().setState({
      cardPoints: 800,
      balance_points: 500
    });
    expect(wrapper.instance().validateSend()).toBeTruthy();
  });
  it("should map state to props", () => {
    const initialState = {
      gifts: {
        giftCards: []
      },
      users: {
        useDetails: {}
      },
      login: {
        detailsObject: {}
      }
    };
    expect(mapStateToProps(initialState).gifts).toEqual(undefined);
  });
});
