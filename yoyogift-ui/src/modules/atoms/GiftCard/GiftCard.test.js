import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftCard } from "./GiftCard";

let props = {
  classes: {
    card: "card"
  },
  giftCard: {
    cardName: "cardName"
  }
};
it("should render GiftCard", () => {
  let wrapper = shallow(<GiftCard {...props} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
