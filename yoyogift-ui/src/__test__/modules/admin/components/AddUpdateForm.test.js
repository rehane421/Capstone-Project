import React from "react";
import { shallow } from "../../../../enzyme";
import { shallowToJson } from "enzyme-to-json";
import { AddUpdateForm } from "../../../../modules/admin/components/AddUpdateForm";
import { mapStateToProps } from "../../../../modules/admin/components/AddUpdateForm";

describe("rendering", () => {
  let wrapper;
  let props = {
    match: {
      params: "1"
    },
    giftCards: [
      {
        id: "2"
      }
    ]
  };
  let props2 = {
    match: {
      params: "1"
    },
    giftCards: [
      {
        id: "1"
      }
    ]
  };
  it("Should render AddUpdateForm component", () => {
    wrapper = shallow(<AddUpdateForm {...props} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("Should have unequal id", () => {
    wrapper = shallow(<AddUpdateForm {...props2} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("should map state to props", () => {
    const initialState = {
      gifts: {
        giftCards: []
      }
    };
    expect(mapStateToProps(initialState).giftCards).toEqual([]);
  });
});
