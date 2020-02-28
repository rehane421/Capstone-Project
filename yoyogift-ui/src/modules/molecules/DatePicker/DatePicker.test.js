import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { DatePicker } from "./DatePicker";

let props = {
  classes: {
    root: "root"
  }
};
it("should render DatePickers", () => {
  let wrapper = shallow(<DatePicker {...props} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
