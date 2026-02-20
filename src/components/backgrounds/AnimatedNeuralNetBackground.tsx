"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulseOffset: number;
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

type Props = {
  /** Center coordinate of the network. Defaults to { x: 0.75, y: 0.75 } as a 0–1 fraction of screen size */
  center?: { x: number; y: number };
  /** Radius of the containment area in px. Default: 300 */
  containRadius?: number;
  opacity?: number;
  node_count?: number;
};

const CONNECTION_DISTANCE = 160;
const PULSE_INTERVAL = 500;

export default function AnimatedNeuralNetBackground({
  center = { x: 0.75, y: 0.75 },
  containRadius = 400,
  opacity = 0.4,
  node_count = 50
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lastPulseTime = 0;
    const nodes: Node[] = [];
    const pulses: Pulse[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cx = () => canvas.width * center.x;
    const cy = () => canvas.height * center.y;

    // Spawn nodes randomly within the containment circle
    for (let i = 0; i < node_count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = (Math.random() * (containRadius - containRadius/5) + containRadius/8);
      nodes.push({
        x: cx() + Math.cos(angle) * dist,
        y: cy() + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 2 + 1.5,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const getConnections = () => {
      const conns: [number, number][] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < CONNECTION_DISTANCE) {
            conns.push([i, j]);
          }
        }
      }
      return conns;
    };

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = cx();
      const centerY = cy();

      nodes.forEach((n) => {
        // Random walk
        n.vx += (Math.random() - 0.5) * 0.012;
        n.vy += (Math.random() - 0.5) * 0.012;

        // Clamp speed
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (speed > 0.18) { n.vx = (n.vx / speed) * 0.18; n.vy = (n.vy / speed) * 0.18; }

        n.x += n.vx;
        n.y += n.vy;

        // Soft containment — pull back toward center if outside radius
        const dx = n.x - centerX;
        const dy = n.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > containRadius) {
          const pull = (dist - containRadius) * 0.006;
          n.vx -= (dx / dist) * pull;
          n.vy -= (dy / dist) * pull;
        }
      });

      const connections = getConnections();

      if (timestamp - lastPulseTime > PULSE_INTERVAL && connections.length > 0) {
        const [from, to] = connections[Math.floor(Math.random() * connections.length)];
        pulses.push({ fromNode: from, toNode: to, progress: 0, speed: 0.0008 + Math.random() * 0.0008 });
        lastPulseTime = timestamp;
      }

      // Draw edges
      connections.forEach(([i, j]) => {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.28;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(80, 220, 255, ${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        if (p.progress >= 1) { pulses.splice(i, 1); continue; }
        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;
        const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
        grd.addColorStop(0, "rgba(170, 110, 255, 0.4)");
        grd.addColorStop(1, "rgba(170, 110, 255, 0)");
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(timestamp * 0.001 + n.pulseOffset) * 0.5 + 0.5;
        const alpha = 0.25 + pulse * 0.35;
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 4);
        grd.addColorStop(0, `rgba(80, 220, 255, ${alpha})`);
        grd.addColorStop(1, "rgba(80, 220, 255, 0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 240, 255, ${0.4 + pulse * 0.4})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [center, containRadius, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity }}
    />
  );
}