import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders a spinner with role=status and includes an SVG", () => {
    render(<Spinner />);

    const statusDiv = screen.getByRole("status");
    expect(statusDiv).toBeInTheDocument();

    const svg = statusDiv.querySelector("svg");
    expect(svg).toBeInTheDocument();

    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });
});
