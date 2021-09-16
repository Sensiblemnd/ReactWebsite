import React from "react";
import App from "./App";
import enzyme, { shallow, render } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });
  it("renders app component", () => {
    expect(appWrapper).toHaveLength(1);
  });

  it("renders Header", () => {
    const wrapper = render(<App />);
    const header = wrapper.find('[data-testid="Header"]');
    expect(header).toHaveLength(1);
  });
});
