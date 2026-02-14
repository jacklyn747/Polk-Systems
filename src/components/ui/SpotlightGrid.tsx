"use client";

import { useEffect, useRef } from 'react';

export const SpotlightGrid = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const mouse = { x: width / 2, y: height / 2 };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        const gridSize = 50; // Size of grid cells
        const spotlightRadius = 300; // Radius of the spotlight

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw base grid (very faint)
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;

            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = 0; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Draw spotlight effect
            // We'll use a radial gradient for the mask/light
            const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, spotlightRadius);
            gradient.addColorStop(0, 'rgba(255, 116, 37, 0.4)'); // Brand Orange center
            gradient.addColorStop(1, 'rgba(255, 116, 37, 0)');

            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            ctx.restore();

            // Draw highlighted grid lines near mouse
            ctx.strokeStyle = 'rgba(255, 116, 37, 0.2)';
            ctx.lineWidth = 1;

            // Only draw lines within radius for performance/effect
            const startX = Math.max(0, Math.floor((mouse.x - spotlightRadius) / gridSize) * gridSize);
            const endX = Math.min(width, Math.ceil((mouse.x + spotlightRadius) / gridSize) * gridSize);
            const startY = Math.max(0, Math.floor((mouse.y - spotlightRadius) / gridSize) * gridSize);
            const endY = Math.min(height, Math.ceil((mouse.y + spotlightRadius) / gridSize) * gridSize);

            for (let x = startX; x <= endX; x += gridSize) {
                const dist = Math.abs(x - mouse.x);
                const opacity = Math.max(0, 1 - dist / spotlightRadius);
                if (opacity > 0) {
                    ctx.strokeStyle = `rgba(255, 116, 37, ${opacity * 0.5})`;
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, height);
                    ctx.stroke();
                }
            }

            for (let y = startY; y <= endY; y += gridSize) {
                const dist = Math.abs(y - mouse.y);
                const opacity = Math.max(0, 1 - dist / spotlightRadius);
                if (opacity > 0) {
                    ctx.strokeStyle = `rgba(255, 116, 37, ${opacity * 0.5})`;
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(width, y);
                    ctx.stroke();
                }
            }


            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen"
        />
    );
};
