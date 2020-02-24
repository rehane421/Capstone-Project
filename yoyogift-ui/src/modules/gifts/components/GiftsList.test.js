import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftsList } from "./GiftsList";

describe("GiftsList", () => {
  let wrapper, props;

  props = {
    searchedCard: [{ id: 1 }],
    classes: {
      root: "root"
    },
    userDetails: {
      email: "yoyogiftg2@gmail.com"
    },
    handleUpdateClick: jest.fn()
  };
  let props2 = {
    searchedCard: [{ id: 1 }],
    classes: {
      root: "root"
    },
    userDetails: {
      email: "test@gmail.com"
    },
    handleUpdateClick: jest.fn(),
    autoSizer: jest.fn(),
    key: 10,
    index: 0,
    style: ""
  };
  it("should render GiftsList", () => {
    wrapper = shallow(<GiftsList {...props} />);
    expect(wrapper).toBeTruthy();
  });
  it("should render GiftsList", () => {
    wrapper = shallow(<GiftsList {...props2} />);
    expect(wrapper).toBeTruthy();
  });
  it("should render autoSizer function", () => {
    wrapper = shallow(<GiftsList {...props2} />);
    expect(wrapper.instance().autoSizer("height", "width"));
  });

  //rowRenderer
  it("should render rowRenderer function", () => {
    wrapper = shallow(<GiftsList {...props2} />);
    // console.log(
    //   wrapper
    //     .instance()
    //     .autoSizer("height", "width")
    //     .props.children.props.rowRenderer(
    //       props2.key,
    //       props2.index,
    //       props2.style
    //     )
    // );
    console.log(shallowToJson(wrapper).children[0]);
  });
});
