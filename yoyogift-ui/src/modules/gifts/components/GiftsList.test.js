import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftsList } from "./GiftsList";

describe("GiftsList", () => {
  let wrapper, props;

  props = {
    giftCardsFiltered: [{ id: 1 }],
    classes: {
      root: "root"
    },
    userDetails: {
      email: "yoyogiftg2@gmail.com"
    },
    handleUpdateClick: jest.fn()
  };
  let props2 = {
    giftCardsFiltered: [{ id: 1 }],
    classes: {
      root: "root"
    },
    userDetails: {
      email: "udha2@gmail.com"
    },
    handleUpdateClick: jest.fn()
  };
  let methodParam = { key: {}, index: 0, isScrolling: true };
  it("should render GiftsList", () => {
    wrapper = shallow(<GiftsList {...props} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    shallowToJson(wrapper)
      .children[0].props.rowRenderer(methodParam)
      .props.children.props.children[1].props.children[1].props.onClick();
    shallowToJson(wrapper).children[0].props.rowRenderer(methodParam);
  });

  //else part
  it("should render GiftsList", () => {
    wrapper = shallow(<GiftsList {...props2} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
