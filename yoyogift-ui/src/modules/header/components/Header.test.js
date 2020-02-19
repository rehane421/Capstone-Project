import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { Header } from "./Header";
import { mapStateToProps, mapDispatchToProps } from "./Header";

describe("Header", () => {
  let props, props2, wrapper;
  beforeEach(() => {
    props = {
      classes: "root",
      isLoggedIn: true,
      userDetails: { first_name: "yudha" }
    };
    props2 = {
      classes: "root",
      isLoggedIn: false,
      userDetails: { first_name: "yudha" }
    };
  });

  it("should render Header component", () => {
    wrapper = shallow(<Header {...props} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  //myProfile method
  // it("should trigger myProfile", () => {
  //   wrapper = shallow(<Header {...props} />);
  //   console.log(shallowToJson(wrapper));
  // });

  it("should call mapDispatchToProps", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).logout();
  });

  //login
  it("should trigger logout click event", () => {
    wrapper = shallow(<Header logout={jest.fn()} {...props2} />);
    wrapper.find("#authButton").simulate("click");
  });

  //logout
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

  it("should map state to props when user is not logged in", () => {
    const initialState = {
      login: {
        loginStatus: true,
        detailsObject: {}
      }
      //   userDetails: {
      //     first_name: "John"
      //   }
    };
    expect(mapStateToProps(initialState).isLoggedIn).toEqual(true);
  });
});
