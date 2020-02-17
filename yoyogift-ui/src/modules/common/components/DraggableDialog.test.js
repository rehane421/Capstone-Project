import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { DraggableDialog } from "./DraggableDialog";

let data = {
  values: {
    email: "ashish@gmail.com"
  },
  values2: {
    email: "ashish@.com"
  },
  values3: {
    email: ""
  },
  errors: "",
  touched: false,
  handleChange: jest.fn(),
  handleBlur: jest.fn(),
  handleSubmit: jest.fn(),
  isSubmitting: jest.fn()
};
let props = {
  classes: {
    root: "root"
  },
  getEmail: jest.fn()
};
it("should render DraggableDialog", () => {
  let wrapper = shallow(<DraggableDialog {...props} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it("should trigger handleOpenClose click event", () => {
  let wrapper = shallow(<DraggableDialog {...props} />);
  wrapper.find("#sendGift").simulate("click");
});

it("should trigger handleSendAndClose click event", () => {
  let wrapper = shallow(<DraggableDialog {...props} values={data.values} />);
  // wrapper.find(".subBtn").simulate("click");
  // expect(wrapper.find("form").simulate("submit"));
  console.log(shallowToJson(wrapper).children[1].children[1].children[1].props);
  shallowToJson(wrapper).children[1].children[1].children[1].props.validate(
    data.values
  );
  shallowToJson(wrapper).children[1].children[1].children[1].props.validate(
    data.values2
  );
  shallowToJson(wrapper).children[1].children[1].children[1].props.validate(
    data.values3
  );
  shallowToJson(wrapper).children[1].children[1].children[1].props.onSubmit(
    data.values
  );
});
