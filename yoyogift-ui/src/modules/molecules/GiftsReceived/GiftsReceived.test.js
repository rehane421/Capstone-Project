import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftsReceived } from "./GiftsReceived";

describe("GiftsReceived", () => {
  let wrapper, props;

  props = {
    data: [],
    classes: {
      root: "root"
    }
  };
  it("should render GiftReceived", () => {
    wrapper = shallow(<GiftsReceived {...props} />);
  });
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
