# react-smooth-scrolll

A lightweight and configurable smooth scrolling component for React and Next.js, powered by [Lenis](https://github.com/studio-freight/lenis).

## Features
- Smooth scrolling with customizable speed and easing
- Supports React and Next.js
- Configurable props for scrolll behavior
- Optimized for performance

## Installation

```sh
npm install react-smooth-scrolll
```

or

```sh
yarn add react-smooth-scrolll
```

## Usage

### Basic Example

```tsx
import { SmoothScroll } from "react-smooth-scrolll";

const App = () => {
    return (
        <SmoothScroll>
            <div style={{ height: "200vh", padding: "50px" }}>
                <h1>Welcome to Smooth Scrolling!</h1>
            </div>
        </SmoothScroll>
    );
};

export default App;
```

### Customizing Scroll Behavior

You can override default settings using props:

```tsx
<SmoothScroll scrollSpeed={2} smoothness={0.1} infinite={true} />
```

### Available Props

| Prop           | Type    | Default | Description |
|---------------|--------|---------|-------------|
| `scrollSpeed` | number | `1.5`   | Adjusts wheel scroll sensitivity  |
| `infinite`    | boolean | `false` | Enables infinite scroll looping |
| `smoothness`  | number | `0.07`  | Linear interpolation (smoothness) intensity (between 0 and 1) |
| `options`     | object  | `{}`    | Additional Lenis options |

## API

### `useSmoothScroll()`
A custom hook to access the `Lenis` instance for advanced controls.

```tsx
import { useSmoothScroll } from "react-smooth-scrolll";

const Component = () => {
    const lenis = useSmoothScroll();

    return (
        <button onClick={() => lenis?.scrollTo(500)}>
            Scroll to 500px
        </button>
    );
};
```

## Testing

This package includes unit tests using Vitest and React Testing Library. Run tests with:

```sh
npm run test
```

## License

MIT

