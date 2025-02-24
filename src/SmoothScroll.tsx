"use client";
import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
    children: React.ReactNode;
    scrollSpeed?: number;
    infinite?: boolean;
    smoothness?: number;
    options?: Omit<ConstructorParameters<typeof Lenis>[0], "smooth">;
}

const SmoothScrollContext = createContext<Lenis | null>(null);

export const useSmoothScroll = () => useContext(SmoothScrollContext);

const SmoothScroll: React.FC<SmoothScrollProps> = ({
    children,
    scrollSpeed = 1.5,
    infinite = false,
    smoothness = 0.07,
    options = {}
}) => {
    const lenisRef = useRef<Lenis | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        if (lenisRef.current) return; // Prevent re-initialization

        const lenis = new Lenis({
            smoothWheel: true,
            lerp: smoothness,
            wheelMultiplier: scrollSpeed,
            infinite: infinite,
            ...options,
        });

        function raf(time: number) {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        }

        rafRef.current = requestAnimationFrame(raf);
        lenisRef.current = lenis;

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            lenis.destroy();
            lenisRef.current = null; // Ensure cleanup
        };
    }, []);

    return (
        <SmoothScrollContext.Provider value={lenisRef.current}>
            {/* <div data-testid="smooth-scroll">{children}</div> */}
            {/* ✅ Use `data-testid` for safer testing */}
            {children}
        </SmoothScrollContext.Provider>
    );
};

export default SmoothScroll;
