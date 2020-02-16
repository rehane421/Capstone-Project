import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { Profile } from "./Profile";

describe("Profile", () => {
  let wrapper, props;

  props = {
    // email: ""
    detailsObject: {
      email: ""
    },
    data: [],
    classes: {
      root: "root"
    }
  };
  it("should render Profile", () => {
    wrapper = shallow(<Profile {...props} />);
  });
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
