import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import Snackbar from "./Snackbar";

it("should render Snackbar", () => {
  let wrapper = shallow(<Snackbar />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
