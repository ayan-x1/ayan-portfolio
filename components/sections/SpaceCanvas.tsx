"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const STAR_COUNT = 420;
const GALAXY_RADIUS = 0.32; // smaller swirl
const OUTER_STAR_COUNT = 180; // more stars outside swirl

function randomGalaxyStar(width: number, height: number) {
  // Generate stars in a spiral galaxy pattern (inner)
  const angle = Math.random() * 2 * Math.PI;
  const radius = Math.pow(Math.random(), 1.7) * GALAXY_RADIUS * Math.min(width, height);
  const spiralArms = 3;
  const armOffset = (Math.random() - 0.5) * 0.3;
  const arm = Math.floor(Math.random() * spiralArms);
  const spiralAngle = angle + arm * (2 * Math.PI / spiralArms) + armOffset;
  const x = width / 2 + Math.cos(spiralAngle) * radius;
  const y = height / 2 + Math.sin(spiralAngle) * radius;
  const size = 0.7 + Math.random() * 1.7;
  return { x, y, size, baseX: x, baseY: y, twinkle: Math.random() };
}

function randomOuterStar(width: number, height: number) {
  // Place stars randomly outside the galaxy swirl
  let x, y, dist;
  const minDist = GALAXY_RADIUS * 1.1 * Math.min(width, height) / 2;
  do {
    x = Math.random() * width;
    y = Math.random() * height;
    const dx = x - width / 2;
    const dy = y - height / 2;
    dist = Math.sqrt(dx * dx + dy * dy);
  } while (dist < minDist);
  const size = 0.5 + Math.random() * 1.2;
  return { x, y, size, baseX: x, baseY: y, twinkle: Math.random() };
}

export default function SpaceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme || "dark";

  // Initialize stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth * dpr;
    const height = canvas.offsetHeight * dpr;
    canvas.width = width;
    canvas.height = height;
    // Inner galaxy swirl stars
    const swirlStars = Array.from({ length: STAR_COUNT }, () => randomGalaxyStar(width, height));
    // Outer stars
    const outerStars = Array.from({ length: OUTER_STAR_COUNT }, () => randomOuterStar(width, height));
    starsRef.current = [...swirlStars, ...outerStars];
  }, [theme]);

  // Mouse movement for parallax
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    let width = canvas.offsetWidth * dpr;
    let height = canvas.offsetHeight * dpr;

    function resize() {
      if (!canvas) return;
      width = canvas.offsetWidth * dpr;
      height = canvas.offsetHeight * dpr;
      canvas.width = width;
      canvas.height = height;
      // Inner galaxy swirl stars
      const swirlStars = Array.from({ length: STAR_COUNT }, () => randomGalaxyStar(width, height));
      // Outer stars
      const outerStars = Array.from({ length: OUTER_STAR_COUNT }, () => randomOuterStar(width, height));
      starsRef.current = [...swirlStars, ...outerStars];
    }
    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx) return;
      // Background
      ctx.clearRect(0, 0, width, height);
      if (theme === "dark") {
        ctx.fillStyle = "#070914";
      } else {
        ctx.fillStyle = "#f6f8fa";
      }
      ctx.fillRect(0, 0, width, height);

      // Galaxy swirl (faint, smaller, more transparent)
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.min(width, height) * (GALAXY_RADIUS + 0.13)
      );
      if (theme === "dark") {
        grad.addColorStop(0, "rgba(80,120,255,0.13)");
        grad.addColorStop(0.5, "rgba(40,30,80,0.06)");
        grad.addColorStop(1, "rgba(7,9,20,0.0)");
      } else {
        grad.addColorStop(0, "rgba(120,160,255,0.10)");
        grad.addColorStop(0.5, "rgba(200,210,255,0.05)");
        grad.addColorStop(1, "rgba(246,248,250,0.0)");
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Stars
      const { x: mx, y: my } = mouseRef.current;
      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];
        // Parallax: move stars slightly based on mouse
        const parallax = (i < STAR_COUNT ? 18 : 8) * (star.size / 2); // less parallax for outer stars
        const px = star.baseX + (mx - 0.5) * parallax;
        const py = star.baseY + (my - 0.5) * parallax;
        // Twinkle
        const twinkle = 0.7 + 0.5 * Math.sin(Date.now() / 700 + star.twinkle * 10);
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, star.size * twinkle, 0, 2 * Math.PI);
        // Color
        if (theme === "dark") {
          ctx.shadowColor = "#b5cfff";
          ctx.shadowBlur = 8 + star.size * 2;
          ctx.fillStyle = `rgba(${180 + Math.random() * 40},${200 + Math.random() * 30},255,0.92)`;
        } else {
          ctx.shadowColor = "#b0b8d6";
          ctx.shadowBlur = 6 + star.size * 2;
          ctx.fillStyle = `rgba(${90 + Math.random() * 40},${120 + Math.random() * 30},200,0.82)`;
        }
        ctx.fill();
        ctx.restore();
      }
      requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block", position: "absolute", inset: 0, zIndex: 0 }}
      aria-hidden="true"
    />
  );
} 