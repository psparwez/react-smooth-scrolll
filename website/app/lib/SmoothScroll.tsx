"use client";
import { SmoothScroll } from "react-smooth-scrolll";
import { useSettings } from "../context/SettingContext";
import React from 'react';

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        scrollSpeed,
        smoothness,
        infinite,
    } = useSettings();

    if (typeof scrollSpeed !== 'number' || typeof smoothness !== 'number' || typeof infinite !== 'boolean') {
        console.error('Invalid settings provided for SmoothScrollProvider');
        return <>{children}</>;
    }

    return (
        <SmoothScroll
            key={`${scrollSpeed}-${smoothness}-${infinite}`} // Forces re-render when props change
            scrollSpeed={scrollSpeed}
            smoothness={smoothness}
            infinite={infinite}
        >
            {children}
        </SmoothScroll>
    );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(SmoothScrollProvider);
