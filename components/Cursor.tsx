"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };
    window.addEventListener("mousemove", move);

    let raf: number;
    const animate = () => {
      const { mx, my } = pos.current;
      pos.current.rx += (mx - pos.current.rx) * 0.12;
      pos.current.ry += (my - pos.current.ry) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${pos.current.rx}px`;
        ringRef.current.style.top = `${pos.current.ry}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const hoverIn = () => {
      if (dotRef.current)
        dotRef.current.style.transform = "translate(-50%,-50%) scale(2.5)";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const hoverOut = () => {
      if (dotRef.current)
        dotRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) ringRef.current.style.opacity = "0.5";
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor fixed z-[9999] w-3 h-3 bg-orange rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform duration-100"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="custom-cursor fixed z-[9998] w-9 h-9 rounded-full border border-orange/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-50 transition-opacity duration-200"
        aria-hidden
      />
    </>
  );
}
