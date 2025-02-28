"use client"
import { useState } from "react";


export default function FeatureRequest() {
    const [feature, setFeature] = useState("");
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // TODO: API CALL
        setTimeout(() => {
            setSubmitted(false);
        }, 2000);
    };

    return (
        <section className="py-6 border-t border-zinc-100">
            <h2 className="text-lg">Feature Request</h2>
            <p className="mt-1.5">
                Please provide a detailed description of the feature you&apos;d like to see added to Smooth Scrolling.
                We&apos;ll review it and consider adding it if it aligns with our vision and best practices.
            </p>
            <div className="p-6 text-white rounded-xl border border-zinc-200 mt-6">
                {submitted ? (
                    <p className="text-green-400">Thank you! Your request has been submitted.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Feature Title</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 rounded text-zinc-700 bg-zinc-100 border border-zinc-100 focus:border-zinc-500 focus:outline-none"
                                value={feature}
                                onChange={(e) => setFeature(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                className="w-full mt-1 p-2 rounded text-zinc-700 bg-zinc-100 border border-zinc-100 focus:border-zinc-500 focus:outline-none"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm  text-white bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-md focus:outline-none inline-block max-w-max cursor-pointer"
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
