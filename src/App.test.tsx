import React from "react";
import App from "./App";
import enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  let appWrapper: React.ReactNode;

  beforeAll(() => {
    appWrapper = shallow(<App />);
  });
  it("renders app component", () => {
    expect(appWrapper).toHaveLength(1);
  });
});
