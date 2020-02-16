import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { Footer } from "../../../../modules/common/components/Footer";
configure({ adapter: new Adapter() });

describe("Footer component", () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      classes: "root"
    };
  });
  it("Should render Footer component", () => {
    wrapper = shallow(<Footer {...props} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("Footer should contain p text", () => {
    wrapper = shallow(<Footer {...props} />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("©2019 YoYo, Inc. All Rights Reserved.");
  });
});
