# React Movie App

This is a modern React app bootstrapped with [Vite](https://vitejs.dev/) for fast development, styled with [Tailwind CSS](https://tailwindcss.com/), and tested using [Vitest](https://vitest.dev/).

## 🛠 Tech Stack

- **Vite** – Lightning-fast bundler and dev server
- **React** – Component-based UI library
- **Tailwind CSS** – Utility-first CSS framework
- **Vitest** – Unit testing framework (Jest-compatible)
- **jsdom** – Browser-like environment for testing
- **@testing-library/react** – React testing utilities
- **@testing-library/jest-dom** – Custom matchers for DOM assertions
- **user-event** – Simulates real user interactions
- **Appwrite** – Backend as a service that adds authentication, databases, functions, storage, and messaging to our project
- \*\*\*\* –

## 📦 Installation

```bash
npm install
npm run dev
```

## Dev Notes

- tsconfig.json → Base config
- tsconfig.app.json → For your actual app code (React components, pages)
- tsconfig.test.json → For tests (e.g., uses `vitest`)
- tsconfig.node.json → For CLI tools or scripts

## Future Dependency ToDo List

- [(node:6498) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.](https://dev.to/asim_khan_cbe65e41bcbbc65/solving-the-punycode-module-is-deprecated-issue-in-nodejs-2e59)
