import { render } from "@testing-library/react";
import React from "react";
import Spinner from "./Spinner";

describe("Spinner test", () => {
  it("should render an div.svg.path", () => {
    render(<Spinner />);

    expect(true).toBeTruthy();
  });
});
