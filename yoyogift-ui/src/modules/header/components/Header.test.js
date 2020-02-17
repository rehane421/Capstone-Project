import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { Header } from "./Header";
import { mapStateToProps, mapDispatchToProps } from "./Header";

describe("Header", () => {
  let props, wrapper;
  beforeEach(() => {
    props = {
      classes: "root",
      isLoggedIn: true
    };
  });

  it("should render Header component", () => {
    wrapper = shallow(<Header {...props} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("should map state to props when user is not logged in", () => {
    const initialState = {
      login: {
        loginStatus: undefined,
        detailsObject: undefined
      }
    };
    expect(mapStateToProps(initialState).detailsObject).toEqual(undefined);
  });

  it("should call mapDispatchToProps", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).logout();
  });

  it("should trigger logout click event", () => {
    wrapper = shallow(<Header logout={jest.fn()} {...props} />);
    wrapper.find("#authButton").simulate("click");
  });

  it("should trigger myProfile  click event", () => {
    wrapper = shallow(<Header {...props} />);
    wrapper.find("#profile").simulate("click");
  });

  it("should trigger sendGiftButton  click event", () => {
    wrapper = shallow(<Header {...props} />);
    wrapper.find("#sendGiftButton").simulate("click");
  });

  it("should trigger giftReceiveButton  click event", () => {
    wrapper = shallow(<Header {...props} />);
    wrapper.find("#giftReceiveButton").simulate("click");
  });

  it("should trigger home  click event", () => {
    wrapper = shallow(<Header {...props} />);
    wrapper.find("#home").simulate("click");
  });
});
