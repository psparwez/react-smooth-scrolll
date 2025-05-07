"use client";
import { useState } from "react";

export default function FeatureRequest() {
    const [feature, setFeature] = useState("");
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({ feature: "", description: "" });
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        let valid = true;
        const errors = { feature: "", description: "" };

        if (feature.trim().length < 3) {
            errors.feature = "Feature title must be at least 3 characters.";
            valid = false;
        }
        if (description.trim().length < 10) {
            errors.description = "Description must be at least 10 characters.";
            valid = false;
        }

        setFieldErrors(errors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!validate()) return;

        setIsLoading(true);
        try {
            const res = await fetch("/api/feature-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ feature, description }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Unknown error");

            setSubmitted(true);
            setFeature("");
            setDescription("");
            setFieldErrors({ feature: "", description: "" });

            setTimeout(() => setSubmitted(false), 3000);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.message || "Failed to submit feature request.");
        } finally {
            setIsLoading(false);
        }
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
                            {fieldErrors.feature && <p className="text-sm text-red-500 mt-1">{fieldErrors.feature}</p>}
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
                            {fieldErrors.description && <p className="text-sm text-red-500 mt-1">{fieldErrors.description}</p>}
                        </div>
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full px-4 py-2 text-sm text-white bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-md focus:outline-none cursor-pointer disabled:bg-zinc-700"
                        >
                            {isLoading ? "Submitting..." : "Submit Request"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
