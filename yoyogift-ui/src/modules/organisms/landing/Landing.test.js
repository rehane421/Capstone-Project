import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import Landing from "./Landing";

it("should render Landing", () => {
  let wrapper = shallow(<Landing />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
