import React from "react";
import { shallow } from "../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import TablePaginationActionsWrapped from "./TablePaginationActionsWrapped";

let wrapper;
let props = {
  classes: {},
  count: {},
  page: {},
  rowsPerPage: {},
  theme: {
    direction: "rtl"
  },
  onChangePage: jest.fn(),
  handleBackButtonClick: jest.fn(),
  handleNextButtonClick: jest.fn(),
  handleLastPageButtonClick: jest.fn()
};

let props2 = {
  classes: {},
  count: {},
  page: {},
  rowsPerPage: {},
  theme: {
    direction: "ltr"
  },
  onChangePage: jest.fn(),
  handleBackButtonClick: jest.fn(),
  handleNextButtonClick: jest.fn(),
  handleLastPageButtonClick: jest.fn()
};
it("should render TablePaginationActionsWrapped", () => {
  wrapper = shallow(<TablePaginationActionsWrapped {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it("should call handleFirstPageButtonClick", () => {
  wrapper = shallow(<TablePaginationActionsWrapped {...props} />);
  shallowToJson(wrapper).children[0].props.onClick();
});
it("should call handleBackButtonClick", () => {
  wrapper = shallow(<TablePaginationActionsWrapped {...props} />);
  shallowToJson(wrapper).children[1].props.onClick();
});
it("should call handleNextButtonClick", () => {
  wrapper = shallow(<TablePaginationActionsWrapped {...props} />);
  shallowToJson(wrapper).children[2].props.onClick();
});
it("should call handleLastPageButtonClick", () => {
  wrapper = shallow(<TablePaginationActionsWrapped {...props} />);
  shallowToJson(wrapper).children[3].props.onClick();
});

it("if theme.direction !== rtl", () => {
  wrapper = shallow(<TablePaginationActionsWrapped {...props2} />);
  shallowToJson(wrapper).children[3].props.onClick();
});
