// import React from "react";
// import { shallow } from "../enzyme";
// import { shallowToJson } from "enzyme-to-json";
// import App from "./App";
// import { Loading } from "./App";

// it("should render App", () => {
//   let wrapper = shallow(<App />);
//   expect(shallowToJson(wrapper)).toMatchSnapshot();
// });

// let loadingProp = {
//   error: {}
// };
// let loadingProp2 = {};
// it("should render Loading", () => {
//   let wrapper = shallow(<Loading {...loadingProp} />);
//   expect(shallowToJson(wrapper)).toMatchSnapshot();
// });
// it("should render Loading", () => {
//   let wrapper = shallow(<Loading {...loadingProp2} />);
//   expect(shallowToJson(wrapper)).toMatchSnapshot();
// });

import React from "react";
import { shallow } from "../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { App } from "./App";
import {
  Loading,
  GiftsListContainer,
  ProfileContainers,
  GiftShowContainer,
  GiftsSendContainer,
  GiftsReceivedContainer,
  AddUpdateForm,
  ErrorPage
} from "./App";

it("should render correctly ErrorPage", () => {
  const tree = shallow(<ErrorPage />);

  expect(tree).toMatchSnapshot();
});

it("should render correctly AddUpdateForm", () => {
  const tree = shallow(<AddUpdateForm />);

  expect(tree).toMatchSnapshot();
});

it("should render correctly GiftsReceivedContainer", () => {
  const tree = shallow(<GiftsReceivedContainer />);

  expect(tree).toMatchSnapshot();
});

it("should render correctly GiftsSendContainer", () => {
  const tree = shallow(<GiftsSendContainer />);

  expect(tree).toMatchSnapshot();
});

it("should render correctly GiftShowContainer", () => {
  const tree = shallow(<GiftShowContainer />);

  expect(tree).toMatchSnapshot();
});

it("should render correctly ProfileContainers", () => {
  const tree = shallow(<ProfileContainers />);

  expect(tree).toMatchSnapshot();
});

it("should render App", () => {
  let wrapper = shallow(<App />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

let loadingProp = {
  error: {}
};
let loadingProp2 = {};
it("should render Loading", () => {
  let wrapper = shallow(<Loading {...loadingProp} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
it("should render Loading", () => {
  let wrapper = shallow(<Loading {...loadingProp2} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
it("should render correctly GiftsListContainer", () => {
  const tree = shallow(<GiftsListContainer />);

  expect(tree).toMatchSnapshot();
});
