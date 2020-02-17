import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftShowContainer, mapStateToProps } from "./GiftShowContainer";

let props = {
  gift: {
    cardPoints: 45
  },
  user: {
    balancePoint: 43
  },
  login: {
    id: 1
  },
  match: {
    params: {
      id: 1
    }
  },
  fetchCard: jest.fn(),
  userDetails: jest.fn(1)
};
it("should render GiftShowContainer", async () => {
  let wrapper = shallow(<GiftShowContainer {...props} />);
  await expect(shallowToJson(wrapper)).toMatchSnapshot();
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
