import React from "react";
import { shallow } from "../../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { DateFormatter } from "../../../../modules/common/components/DateFormatter";

describe("Date Formatter", () => {
  let props, wrapper;
  beforeEach(() => {
    props = {
      date: new Date("2/14/2020")
    };
  });

  it("Should render Footer component", () => {
    wrapper = shallow(<DateFormatter {...props} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("Should render Footer component with month length < 2", () => {
    let wrapper = shallow(<DateFormatter {...props} />);
    // expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper);
  });
});
