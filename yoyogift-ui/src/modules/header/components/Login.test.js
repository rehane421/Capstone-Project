import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { Login } from "./Login";

let props = {
  //   e: {
  //     preventDefault: jest.fn()
  //   }
  login: jest.fn()
};
it("should render Login", () => {
  let wrapper = shallow(<Login {...props} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it("should trigger onSubmit on click ", () => {
  let wrapper = shallow(<Login {...props} />);
  wrapper.find("#xyz").simulate("click", { preventDefault: () => {} });
});
