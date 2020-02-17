import React from "react";
import { shallow } from "../enzyme";
import { shallowToJson } from "enzyme-to-json";
import App from "./App";

it("should render App", () => {
  let wrapper = shallow(<App />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
