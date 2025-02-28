import React from 'react';


export const AvailableProps = () => {

    return (
        <section className='py-6'>
            <h2>Available Props</h2>
            <PropsTable />

        </section>
    );
};


function PropsTable() {
    const props = [
        { name: "scrollSpeed", type: "number", default: "1.5", description: "Adjusts wheel scroll sensitivity" },
        { name: "infinite", type: "boolean", default: "false", description: "Enables infinite scroll looping" },
        { name: "smoothness", type: "number", default: "0.07", description: "Linear interpolation (smoothness) intensity (between 0 and 1)" },
        { name: "options", type: "object", default: "{}", description: "Additional Lenis options" },
    ];

    return (
        <div className="overflow-x-auto py-4">
            <table className="w-full border border-gray-700 text-left text-sm text-gray-300">
                <thead>
                    <tr className="bg-zinc-50 rounded-md text-zinc-700">
                        <th className="border border-gray-300 px-4 py-2">Prop</th>
                        <th className="border border-gray-300 px-4 py-2">Type</th>
                        <th className="border border-gray-300 px-4 py-2">Default</th>
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                    </tr>
                </thead>
                <tbody className='*:text-zinc-700'>
                    {props.map((prop, index) => (
                        <tr key={index} className="border border-gray-300 odd:bg-gray-50 even:bg-gray-200">
                            <td className="border border-gray-300 px-4 py-2 font-mono text-zinc-800 ">{prop.name}</td>
                            <td className="border border-gray-300 px-4 py-2 text-zinc-700">{prop.type}</td>
                            <td className=" h-full text-center font-mono  flex items-center justify-center text-zinc-600 py-2 px-4 rounded-md mx-auto">{prop.default}</td>
                            <td className="border border-gray-300 px-4 py-2">{prop.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
