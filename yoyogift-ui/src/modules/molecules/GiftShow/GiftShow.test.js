import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftShow } from "./GiftShow";

describe("GiftShow", () => {
  let wrapper, props;

  props = {
    data: {
      cardComments: [
        {
          first_name: "ashish",
          last_name: "roshan",
          comment: "Nice discount",
          commented_on: "02/28/2020"
        }
      ]
    },
    getEmail: jest.fn()
  };
  it("should render GiftShow", () => {
    wrapper = shallow(<GiftShow {...props} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    console.log(shallowToJson(wrapper));
  });
});
