"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SettingsContextType {
    scrollSpeed: number;
    setScrollSpeed: (value: number) => void;
    smoothness: number;
    setSmoothness: (value: number) => void;
    infinite: boolean;
    setInfinite: (value: boolean) => void;
    toggleSettings: boolean;
    setToggleSettings: (value: boolean) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
    const [scrollSpeed, setScrollSpeed] = useState(1.5); // Default speed
    const [smoothness, setSmoothness] = useState(0.07); // Default smoothness
    const [infinite, setInfinite] = useState(false);
    const [toggleSettings, setToggleSettings] = useState(false);

    return (
        <SettingsContext.Provider
            value={{
                scrollSpeed,
                setScrollSpeed,
                smoothness,
                setSmoothness,
                infinite,
                setInfinite,
                toggleSettings,
                setToggleSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};
