import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Search from "./Search";

describe("Search", () => {
  // Arrange: Set up props and render
  const expectedInputPlaceholderText = "Search through thousands of movies";
  const expectedSearchTerm = "The Batman";
  const expectedSetSearchTerm = vi.fn(); // vi.fn() is Vitest's version of jest.fn()

  beforeEach(() => {
    render(
      <Search
        searchTerm={expectedSearchTerm}
        setSearchTerm={expectedSetSearchTerm}
      />
    );
  });

  it("renders the search icon (img with alt)", () => {
    const img = screen.getByAltText(/search/i);
    // /search/ is a regex and `i` makes it case-insensitive
    expect(img).toBeInTheDocument();
  });

  it("renders an input with type text", () => {
    const input = screen.getByRole("textbox");
    // `role="textbox"` is the default implicit ARIA role for <input type="text">
    // See: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role
    expect(input).toBeInTheDocument();
  });

  it("has the correct placeholder text", () => {
    const inputPlaceholderText = screen.getByPlaceholderText(
      expectedInputPlaceholderText
    );
    expect(inputPlaceholderText).toBeInTheDocument();
  });

  it("pre-fills the input with the searchTerm prop", () => {
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe(expectedSearchTerm);
  });

  it("calls setSearchTerm on user input", () => {
    const input = screen.getByRole("textbox") as HTMLInputElement;
    // `as HTMLInputElement` is a type assertion to get access to input-specific properties like `value`

    // Act: Simulate an action
    fireEvent.change(input, { target: { value: "Inception" } });
    // Simulate a user typing "Inception" into the input

    // Assert: our mock function should have been called with the new value as our outcome
    expect(expectedSetSearchTerm).toHaveBeenCalledWith("Inception");
  });
});
