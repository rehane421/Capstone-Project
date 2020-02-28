import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftsSendContainer, mapStateToProps } from "./GiftsSendContainer";

let wrapper;
let props1 = {
  isLoggedIn: true,
  user: {
    email: "johndoe@gmail.com"
  },
  fetchSentCards: jest.fn()
};
let props2 = {
  isLoggedIn: false
};
let props3 = {
  isLoggedIn: true,
  sentCards: []
};
let props4 = {
  isLoggedIn: true,
  sentCards: [{ id: 1 }]
};
it("should render GiftsSendContainer component", () => {
  wrapper = shallow(<GiftsSendContainer {...props1} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
it("should render GiftsSendContainer component", () => {
  wrapper = shallow(<GiftsSendContainer {...props2} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
it("should render GiftsSendContainer component", () => {
  wrapper = shallow(<GiftsSendContainer {...props3} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
it("should render GiftsSendContainer component", () => {
  wrapper = shallow(<GiftsSendContainer {...props2} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
it("should render GiftsSendContainer component", () => {
  wrapper = shallow(<GiftsSendContainer {...props4} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it("should map state to props", () => {
  const initialState = {
    login: {
      loginStatus: true,
      detailsObject: {}
    },
    users: {
      cards: []
    }
  };
  expect(mapStateToProps(initialState)).toEqual({
    user: {},
    isLoggedIn: true,
    sentCards: []
  });
});
