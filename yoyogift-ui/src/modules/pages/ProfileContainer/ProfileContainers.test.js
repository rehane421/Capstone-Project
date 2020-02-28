import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { ProfileContainers, mapStateToProps } from "./ProfileContainers";

let wrapper;
let props1 = {
  detailsObject: {},
  userDetails: jest.fn(),
  isLoggedIn: true,
  user: {
    balance_points: 47
  }
};
let props2 = {
  userDetails: jest.fn(),
  isLoggedIn: false,
  user: {
    balance_points: 47
  }
};

it("should render GiftsSendContainer component", () => {
  wrapper = shallow(<ProfileContainers {...props1} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
it("should render GiftsSendContainer component", () => {
  wrapper = shallow(<ProfileContainers {...props2} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it("should map state to props", () => {
  const initialState = {
    login: {
      loginStatus: false,
      detailsObject: {}
    },
    users: {
      UserDetails: {}
    }
  };
  expect(mapStateToProps(initialState).isLoggedIn).toEqual(false);
});
