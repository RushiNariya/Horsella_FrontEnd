import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import HelloWorldTest from "./HelloWorldTest";
import React from "react";

configure({ adapter: new Adapter() });

describe("<HelloWorldTest/>", () => {
  it("should render two <p> Tag html elements.", () => {
    const wrapper = shallow(<HelloWorldTest />);
    expect(wrapper.find("p")).toHaveLength(2);
  });
});
