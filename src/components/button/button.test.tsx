import { render, screen } from "@testing-library/react";
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
} from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

//👇 Imports a specific story for the test
import { Button } from "../button/Button";

it("renders the button in the primary state", () => {
  render(<Button label={"Button"} />);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Button");
});

it("renders the button in the Regular state", () => {
  render(<Button label={"Regular"} />);
  expect(screen.getByRole("button")).toHaveTextContent("Regular");
});

it("renders the button in the Regular state", () => {
  render(<Button label={"Secondary"} />);
  expect(screen.getByRole("button")).toHaveTextContent("Secondary");
});
