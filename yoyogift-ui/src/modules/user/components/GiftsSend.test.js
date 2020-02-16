import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftsSend } from "./GiftsSend";

describe("GiftsSend", () => {
  let wrapper, props;

  props = {
    data: [],
    classes: {
      root: "root"
    }
  };
  it("should render GiftReceived", () => {
    wrapper = shallow(<GiftsSend {...props} />);
  });
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
