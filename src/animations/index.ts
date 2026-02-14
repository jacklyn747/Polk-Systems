import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register plugins once
gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };

// Config for "Heavy/Physical" feel
gsap.defaults({
    ease: "power2.inOut",
    duration: 0.8
});
