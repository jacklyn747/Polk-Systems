"use client";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export function OneTouchSwitch() {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    return (
        <motion.div
            className="relative w-full h-full bg-white overflow-hidden cursor-pointer group flex items-center justify-center"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTap={() => {
                controls.start({
                    scale: [1, 1.5, 1],
                    transition: { duration: 0.4, type: "spring", stiffness: 400, damping: 10 }
                });
            }}
        >
            {/* The Single Glowing Square */}
            <motion.div
                animate={controls}
                className={`transition-all duration-500 ease-out ${isHovered
                    ? "w-4 h-4 bg-brand-accent shadow-[0_0_20px_0px_rgba(255,116,37,0.4)]"
                    : "w-3 h-3 bg-brand-accent shadow-[0_0_10px_0px_rgba(255,116,37,0.2)]"
                    }`}
            />
        </motion.div>
    );
}
