import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { InputTypeComponent } from "./InputTypeComponent";

let props1 = {
  endAdornment: false,
  startAdornment: true,
  handleInputChange: jest.fn()
};
it("should render InputTypeComponent", () => {
  let wrapper = shallow(<InputTypeComponent {...props1} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

let props2 = {
  endAdornment: true,
  startAdornment: false,
  endAdornmentIcon: true
  //   endAdornmentText: true
};
it("should render InputTypeComponent", () => {
  let wrapper = shallow(<InputTypeComponent {...props2} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it("should render InputTypeComponent", () => {
  let wrapper = shallow(<InputTypeComponent {...props1} />);
  shallowToJson(wrapper).children[0].children[1].props.onChange();
});
