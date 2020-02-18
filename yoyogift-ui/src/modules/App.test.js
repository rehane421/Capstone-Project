import React from "react";
import { shallow } from "../enzyme";
import { shallowToJson } from "enzyme-to-json";
import App from "./App";
import { Loading } from "./App";

it("should render App", () => {
  let wrapper = shallow(<App />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

let loadingProp = {
  error: {}
};
let loadingProp2 = {};
it("should render Loading", () => {
  let wrapper = shallow(<Loading {...loadingProp} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
it("should render Loading", () => {
  let wrapper = shallow(<Loading {...loadingProp2} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
