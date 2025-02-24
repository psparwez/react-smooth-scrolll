import { expect } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";

if (expect && matchers) {
  expect.extend(matchers); // Avoids calling `extend` on undefined
}

// Mock ResizeObserver for JSDOM
globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
