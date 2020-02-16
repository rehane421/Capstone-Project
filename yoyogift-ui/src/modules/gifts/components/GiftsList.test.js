import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftsList } from "./GiftsList";

describe("GiftsList", () => {
  let wrapper, props;

  props = {
    giftCardsFiltered: [],
    classes: {
      root: "root"
    }
  };
  it("should render GiftsList", () => {
    wrapper = shallow(<GiftsList {...props} />);
  });
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
