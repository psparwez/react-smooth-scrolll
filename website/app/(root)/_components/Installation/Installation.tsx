'use client';

import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

import styles from './installation.module.css';

const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 },
};

const CopyButton = ({ command }: {
    command: string,
}) => {
    const [copying, setCopying] = useState(false);

    const onCopy = React.useCallback(() => {
        copy(command);
        setCopying(true);
        setTimeout(() => {
            setCopying(false);
        }, 2000);
    }, [command]);

    return (
        <button aria-label="Copy code" className={styles.copy} onClick={onCopy}>
            <MotionConfig transition={{ duration: 0.15 }}>
                <AnimatePresence initial={false} mode="wait">
                    {copying ? (
                        <motion.div animate="visible" exit="hidden" initial="hidden" key="check" variants={variants}>
                            <svg
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                shapeRendering="geometricPrecision"
                            >
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </motion.div>
                    ) : (
                        <motion.div animate="visible" exit="hidden" initial="hidden" key="copy" variants={variants}>
                            <svg
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                shapeRendering="geometricPrecision"
                            >
                                <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </MotionConfig>
        </button>
    );
};

const CodeBlock = ({ command }: {
    command: string;
}) => {
    return (
        <code className={styles.code}>
            <span className='font-mono'>{command}{' '}</span>
            <CopyButton command={command} />
        </code>
    );
};

export const Installation = () => {
    return (
        <section id='installation' className='mt-14'>
            <h2 className='my-1.5 text-lg'>Installation</h2>
            <CodeBlock command="npm install react-smooth-scrolll" />
            <p className='py-2'>Or,</p>
            <CodeBlock command="yarn add react-smooth-scrolll" />
        </section>
    );
};
