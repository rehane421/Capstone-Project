import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftsListContainer } from "./GiftsListContainer";

let props = {
  classes: {
    root: "root"
  },
  giftCards: [],
  fetchCards: jest.fn()
};
it("should render GiftsListContainer", () => {
  let wrapper = shallow(<GiftsListContainer {...props} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
