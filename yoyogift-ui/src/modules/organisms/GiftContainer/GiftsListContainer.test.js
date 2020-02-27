import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { GiftsListContainer, mapStateToProps } from "./GiftsListContainer";

let props = {
  classes: {
    root: "root"
  },
  giftCards: [],
  fetchCards: jest.fn()
};
it("should render GiftsListContainer", () => {
  let wrapper = shallow(<GiftsListContainer {...props} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
let props2 = {
  classes: {
    root: "root"
  },
  giftCards: [{ id: 1, cardRetailer: "ashish" }],
  fetchCards: jest.fn(),
  userDetails: {
    email: ""
  },
  fetchCardFilter: jest.fn()
};
it("should render GiftsListContainer with giftCrds", () => {
  let wrapper = shallow(<GiftsListContainer {...props2} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

let e = {
  target: {
    value: "ashish"
  }
};
it("should render GiftsListContainer with giftCrds", () => {
  let wrapper = shallow(<GiftsListContainer {...props2} />);
  shallowToJson(wrapper).children[0].children[0].children[1].props.onChange(e);
});

let e2 = {
  target: {
    value: "All"
  }
};
it("should render GiftsListContainer when target value All", () => {
  let wrapper = shallow(<GiftsListContainer {...props2} />);
  shallowToJson(wrapper).children[0].children[0].children[1].props.onChange(e2);
});

//handleSortButtonClick
it("should render GiftsListContainer when target value All", () => {
  let wrapper = shallow(<GiftsListContainer {...props2} />);
  shallowToJson(wrapper).children[0].children[1].children[1].props.onChange({
    target: { value: "Points" }
  });
});
it("should render GiftsListContainer when target value All", () => {
  let wrapper = shallow(<GiftsListContainer {...props2} />);
  shallowToJson(wrapper).children[0].children[1].children[1].props.onChange({
    target: { value: "Count" }
  });
});
it("should render GiftsListContainer when target value All", () => {
  let wrapper = shallow(<GiftsListContainer {...props2} />);
  shallowToJson(wrapper).children[0].children[1].children[1].props.onChange({
    target: { value: "Validity" }
  });
});

it("should mapState to props", () => {
  const initialState = {
    gifts: {
      giftCards: [],
      giftCardsFiltered: []
    },
    login: {
      userDetails: {}
    }
  };
  expect(mapStateToProps(initialState).giftCards).toEqual([]);
});
