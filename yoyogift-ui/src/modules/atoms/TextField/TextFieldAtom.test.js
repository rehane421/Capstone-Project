import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { TextFieldAtom } from "./TextFieldAtom";

let wrapper;
it("should render TextFieldAtom component", () => {
  wrapper = shallow(<TextFieldAtom />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
