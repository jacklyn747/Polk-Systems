"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface FormStepProps {
    children: ReactNode;
    stepKey: string;
    direction?: 1 | -1;
}

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 40 : -40,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -40 : 40,
        opacity: 0,
    }),
};

export function FormStep({ children, stepKey, direction = 1 }: FormStepProps) {
    return (
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={stepKey}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
