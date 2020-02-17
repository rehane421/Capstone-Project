import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { ErrorPage } from "./ErrorPage";

let props = {
  //   classes: {
  //     root: "root"
  //   }
};
it("should render ErrorPage", () => {
  let wrapper = shallow(<ErrorPage {...props} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
