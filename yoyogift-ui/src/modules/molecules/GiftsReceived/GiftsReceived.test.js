import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftsReceived } from "./GiftsReceived";

describe("GiftsReceived", () => {
  let wrapper, props;

  props = {
    data: [
      {
        id: 1,
        cardName: "Flipkart",
        isRedeemed: false
      }
    ],
    classes: {
      root: "root"
    },
    redeemCard: jest.fn()
  };
  it("should render GiftReceived", () => {
    wrapper = shallow(<GiftsReceived {...props} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    console.log(shallowToJson(wrapper).children[0].children[1]);
  });
});
