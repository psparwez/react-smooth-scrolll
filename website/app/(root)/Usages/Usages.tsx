import { CodeBlock } from "../_components/CodeBlock/CodeBlock";

export const Usage = () => {
    return (
        <div className="mt-5">
            <h2 className="text-lg mb-2">Usage</h2>
            <div className="flex flex-col gap-5">
                <div className="pl-3">
                    <div className="flex items-center gap-1">
                        <span>• In React</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width='1em' height='1em'><g fill="none"><rect width="256" height="256" fill="none" rx="60" /><path fill="#00D8FF" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656" /><path stroke="#00D8FF" strokeWidth="8.911" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clipRule="evenodd" /><path stroke="#00D8FF" strokeWidth="8.911" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clipRule="evenodd" /><path stroke="#00D8FF" strokeWidth="8.911" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clipRule="evenodd" /></g></svg>
                        </span>
                    </div>
                    <p>Render the SmoothScroll in the root of your app.</p>
                    <CodeBlock initialHeight={270}>{`import { SmoothScroll } from "react-smooth-scrolll";

// ...

const App = () => {
    return (
        <SmoothScroll>
            <div className="min-h-screen w-full py-20 px-10">
                <h1>Welcome to Smooth Scrolling!</h1>
            </div>
        </SmoothScroll>
    );
};

export default App;`}</CodeBlock>
                </div>
                <div className="pl-3 ">
                    <div className="flex items-center gap-1">
                        <span>• In NextJS Best Practice</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width='1em' height='1em'><circle cx="64" cy="64" r="64" /><path fill="url(#deviconNextjs0)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209" /><path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z" /><defs><linearGradient id="deviconNextjs0" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient><linearGradient id="deviconNextjs1" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient></defs></svg>
                        </span>
                    </div>
                    <ul className="pl-4">
                        <li className="relative before:content-['-'] before:pr-1">
                            Create a folder <span className="italic font-mono">utils/ScrollSmooth.tsx</span> or <span className="font-mono italic">providers/SmoothScroll.tsx</span>
                        </li>
                        <li className="relative before:content-['-'] before:pr-1">
                            Inside this file, paste the following code:

                        </li>
                    </ul>
                    <CodeBlock initialHeight={270}>{`"use client";
import { SmoothScroll } from "react-smooth-scrolll";

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
    return <SmoothScroll>{children}</SmoothScroll>;
};

export default SmoothScrollProvider;`}</CodeBlock>
                </div>
            </div>
            <div className="pl-3 my-1.5 ">
                <ul className="pl-4">
                    <li className="relative before:content-['-'] before:pr-1">
                        Then, go to <span className="italic font-mono">app/layout.tsx</span> and wrap your content

                    </li>
                </ul>
                <CodeBlock initialHeight={270}>{`
import SmoothScrollProvider from "@/providers/SmoothScroll";

// ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <html lang="en">
        <body>
          <main className="w-full min-h-screen px-5 md:px-10 container border-x border-dashed border-zinc-400">
            {children}

          </main>
          <Footer />
        </body>

      </html>
    </SmoothScrollProvider>
  );
}

`}</CodeBlock>
            </div>
        </div>




    );
};