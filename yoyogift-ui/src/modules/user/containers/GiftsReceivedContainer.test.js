import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import {
  GiftsReceivedContainer,
  mapStateToProps
} from "./GiftsReceivedContainer";

let wrapper;

let props = {
  isLoggedIn: true,
  user: {},
  fetchReceivedCards: jest.fn(),
  redeemCard: jest.fn()
};

let props2 = {
  isLoggedIn: false,
  fetchReceivedCards: jest.fn()
};
let prop1 = {
  isLoggedIn: true,
  receivedCards: []
};

it("should render GiftsReceivedContainer component when looged in", () => {
  wrapper = shallow(<GiftsReceivedContainer {...props} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it("should render GiftsReceivedContainer component when not logged in", () => {
  wrapper = shallow(<GiftsReceivedContainer {...props2} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
it("receivedCards when loggedIn and length is 0", () => {
  wrapper = shallow(<GiftsReceivedContainer {...prop1} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it("should map state to props", () => {
  const initialState = {
    login: {
      loginStatus: false,
      detailsObject: {}
    },
    users: {
      cards: []
    }
  };
  expect(mapStateToProps(initialState).loginStatus).toBe(undefined);
});
