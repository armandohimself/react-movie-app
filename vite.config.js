// Vite plugin to support Tailwind CSS
import tailwindcss from "@tailwindcss/vite";

// Vite plugin to enable React support, including JSX, Fast Refresh, and HMR
import react from "@vitejs/plugin-react";

// Core Vite function to define and export the config
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // Use global variables in tests (like `describe`, `it`, etc.) w/o importing them
    globals: true,

    // Simulate a browser environment for React component testing — essential for testing components that rely on the DOM (like buttons, inputs).
    environment: "jsdom",

    // Load this file before running tests (we've setup mocks, global config, etc. here)
    setupFiles: "./test/setup",
  },
  plugins: [
    // Enables Tailwind CSS so you can use utility classes like bg-blue-500, p-4, text-white, etc.
    tailwindcss(),

    // Enables React support in your build system. Vite will know how to handle JSX/TSX files, and apply features like hot reload when you save changes.
    react(),
  ],
});
