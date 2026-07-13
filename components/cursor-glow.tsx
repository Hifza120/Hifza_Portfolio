"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const glowRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let rafId: number;
    const animate = () => {
      // Fast-following main glow
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      // Slower trailing glow (creates depth)
      trailX += (mouseX - trailX) * 0.05;
      trailY += (mouseY - trailY) * 0.05;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      if (glowRef2.current) {
        glowRef2.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Trailing outer glow - bigger, slower, softer */}
      <div
        ref={glowRef2}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,116,239,0.25) 0%, rgba(37,99,235,0.08) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      {/* Main tight glow - follows cursor closely, brighter core */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.5) 0%, rgba(37,99,235,0.25) 35%, transparent 70%)",
          filter: "blur(30px)",
        }}
        aria-hidden="true"
      />
    </>
  );
}