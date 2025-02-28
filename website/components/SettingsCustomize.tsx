"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSettings } from "@/app/context/SettingContext";

export default function SettingsCustomize() {
    const {
        scrollSpeed,
        setScrollSpeed,
        smoothness,
        setSmoothness,
        infinite,
        setInfinite,
        toggleSettings,
        setToggleSettings,
    } = useSettings();

    const toggleOpen = () => setToggleSettings(!toggleSettings);


    return (
        <div className="fixed right-10 bottom-10 top-auto">
            <button onClick={toggleOpen} className="cursor-pointer size-10 rounded-full shadow-xl grid place-items-center">
                <span className="text-zinc-600 hover:animate-spin duration-1000">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </span>
            </button>
            {toggleSettings && (
                <motion.div
                    className="absolute bottom-14 z-40 right-[250px] w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className="p-4 py-6 border border-zinc-200 w-[300px] bg-white shadow-lg rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Customize Scroll Settings</h2>
                        <div className="border-b border-zinc-300 mb-3" />

                        <label className="block mb-2">
                            <span className="text-sm font-medium">Scroll Speed</span>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    step="0.1"
                                    max="2"
                                    value={scrollSpeed}
                                    onChange={(e) => setScrollSpeed(parseFloat(e.target.value))}
                                    className="w-full border rounded mt-1  accent-zinc-500"
                                />
                                <span className="text-sm text-gray-500">{scrollSpeed}</span>
                            </div>
                        </label>

                        <label className="block mb-2">
                            <span className="text-sm font-medium">Smoothness</span>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    step="0.01"
                                    min="0"
                                    max="1"
                                    value={smoothness}
                                    onChange={(e) => setSmoothness(parseFloat(e.target.value))}
                                    className="w-full border rounded mt-1 accent-zinc-500"
                                />
                                <span className="text-sm text-gray-500">{smoothness}</span>
                            </div>
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={infinite}
                                onChange={(e) => setInfinite(e.target.checked)}
                                className="accent-zinc-500"
                            />
                            <span className="text-sm font-medium">Infinite Scroll</span>
                        </label>
                    </div>
                </motion.div>
            )
            }
        </div >
    );
}
