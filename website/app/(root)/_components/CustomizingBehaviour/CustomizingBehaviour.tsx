import React from 'react'
import { CodeBlock } from '../CodeBlock/CodeBlock'

export default function CustomizingBehaviour() {
    return (
        <section className='py-6'>
            <h2 className='mb-1.5'>
                Customizing Scroll Behavior
            </h2>
            <p className='text-xs'>
                You can override default settings using props:
            </p>
            <CodeBlock initialHeight={270}>{`import { SmoothScroll } from "react-smooth-scrolll";
            
// ...

<SmoothScroll scrollSpeed={2} smoothness={0.1} infinite={true} />{children}<SmoothScroll/>`}</CodeBlock>
        </section>
    )
}
