import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Search from "./Search";

describe("Search", () => {
  // Arrange: Set up props and render
  const expectedSearchTerm = "The Batman";
  const expectedSetSearchTerm = vi.fn();

  beforeEach(() => {
    render(
      <Search
        searchTerm={expectedSearchTerm}
        setSearchTerm={expectedSetSearchTerm}
      />
    );
  });

  //act
  //action

  it("renders the search icon (img with alt)", () => {
    const img = screen.getByAltText(/search/i);
    expect(img).toBeInTheDocument();
  });

  it.todo("renders an input with type text", () => {});
  it.todo("renders input with correct placeholder", () => {});
  it.todo("renders input with correct initial value", () => {});
  it.todo("calls setSearchTerm on user input", () => {});
});
