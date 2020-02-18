import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftShow } from "./GiftShow";

describe("GiftShow", () => {
  let wrapper, props;

  props = {
    data: {
      cardImage: ""
    },
    getEmail: jest.fn()
  };
  it("should render GiftShow", () => {
    wrapper = shallow(<GiftShow {...props} />);
  });
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
