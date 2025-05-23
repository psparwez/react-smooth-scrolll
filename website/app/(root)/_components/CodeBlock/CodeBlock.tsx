"use client";
import React from "react";
import { Highlight, type Language } from "prism-react-renderer";
import defaultProps from "prism-react-renderer";

import useMeasure from "react-use-measure";
import copy from "copy-to-clipboard";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

import styles from "./code-block.module.css";

const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 },
};

const theme = {
    plain: {
        color: "var(--gray12)",
        fontSize: 12,
        fontFamily: "var(--font-mono)",
    },
    styles: [
        {
            types: ["comment"],
            style: {
                color: "var(--gray9)",
            },
        },
        {
            types: ["atrule", "keyword", "attr-name", "selector", "string"],
            style: {
                color: "var(--gray11)",
            },
        },
        {
            types: ["punctuation", "operator"],
            style: {
                color: "var(--gray9)",
            },
        },
        {
            types: ["class-name", "function", "tag"],
            style: {
                color: "var(--gray12)",
            },
        },
    ],
};

interface CodeBlockProps {
    children: string;
    initialHeight?: number;
    language?: Language;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
    children,
    initialHeight = 0,
    language = "jsx",
}) => {
    const [ref, bounds] = useMeasure();
    const [copying, setCopying] = React.useState(0);

    const onCopy = React.useCallback(() => {
        copy(children);
        setCopying((c) => c + 1);
        setTimeout(() => {
            setCopying((c) => c - 1);
        }, 2000);
    }, [children]);

    return (
        <div className={styles.outerWrapper}>
            <button className={styles.copyButton} onClick={onCopy} aria-label="Copy code">
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
                                    <path d="M20 6L9 17l-5-5" />
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
                                    <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z" />
                                </svg>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </MotionConfig>
            </button>
            <Highlight {...defaultProps} theme={theme} code={children} language={language}>
                {({ className, tokens, getLineProps, getTokenProps }) => (
                    <motion.pre
                        className={styles.wrapper}
                        animate={{ height: bounds.height || initialHeight }}
                        transition={{ type: "easeOut", duration: 0.2 }}
                    >
                        <div className={`${className} ${styles.root}`} ref={ref}>
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.pre>
                )}
            </Highlight>
        </div>
    );
};