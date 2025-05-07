// Extends Jest-style assertions (like toBeInTheDocument, toHaveClass, etc.)
import "@testing-library/jest-dom";

// Automatically unmounts components after each test to avoid memory leaks
import { cleanup } from "@testing-library/react";

// Imports test lifecycle hook and mocking utility from Vitest
import { afterEach, vi } from "vitest";

// Run cleanup after every test and reset all mock function states
afterEach(() => {
  cleanup(); // Unmount components and clean DOM
  vi.clearAllMocks(); // Reset mock call counts, return values, etc.
});
