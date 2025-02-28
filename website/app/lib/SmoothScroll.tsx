"use client";
import { SmoothScroll } from "react-smooth-scrolll";

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
    return <SmoothScroll>{children}</SmoothScroll>;
};

export default SmoothScrollProvider;