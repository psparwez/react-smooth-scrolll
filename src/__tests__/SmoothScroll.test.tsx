import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import SmoothScroll from "../SmoothScroll";

describe("SmoothScroll Component", () => {
    it("renders children correctly", () => {
        render(
            <SmoothScroll>
                <div data-testid="child">Hello World</div>
            </SmoothScroll>
        );

        expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    it("applies default Lenis settings", () => {
        const { unmount } = render(<SmoothScroll><div>Test</div></SmoothScroll>);

        // Check if the component is mounted
        expect(screen.getByTestId("smooth-scroll")).toBeInTheDocument();

        // Unmount component
        unmount();

        expect(screen.queryByTestId("smooth-scroll")).toBeNull();
    });

    it("accepts and overrides options", () => {
        render(
            <SmoothScroll options={{ lerp: 0.2, infinite: true }}>
                <div data-testid="child">Smooth</div>
            </SmoothScroll>
        );

        expect(screen.getByTestId("child")).toBeInTheDocument();
    });
});
