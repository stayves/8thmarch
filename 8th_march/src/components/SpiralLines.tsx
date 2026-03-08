import { useEffect, useRef } from 'react';

interface SpiralLinesProps {
  color?: string;
  opacity?: number;
}

const SpiralLines: React.FC<SpiralLinesProps> = ({
  color = 'rgba(236, 64, 122, 0.15)',
  opacity = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: {
      angle: number;
      radius: number;
      speed: number;
      centerX: number;
      centerY: number;
      size: number;
      drift: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < 25; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 150 + 50,
        speed: (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        centerX: Math.random() * canvas.width,
        centerY: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 1,
        drift: Math.random() * 0.15 - 0.075,
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    const spirals = Array.from({ length: 3 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.003 + 0.001,
      amplitude: Math.random() * 80 + 60,
      length: 150,
    }));

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      for (const spiral of spirals) {
        spiral.phase += spiral.speed;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.1 * opacity;

        for (let t = 0; t < spiral.length; t += 2) {
          const progress = t / spiral.length;
          const a = spiral.phase + progress * Math.PI * 5;
          const r = progress * spiral.amplitude;
          const x = spiral.x + Math.cos(a) * r + Math.sin(time + t * 0.01) * 15;
          const y = spiral.y + Math.sin(a) * r + Math.cos(time + t * 0.01) * 15;
          if (t === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      for (const p of particles) {
        p.angle += p.speed;
        p.centerX += p.drift;
        p.centerY += p.drift * 0.5;

        if (p.centerX > canvas.width + 80) p.centerX = -80;
        if (p.centerX < -80) p.centerX = canvas.width + 80;
        if (p.centerY > canvas.height + 80) p.centerY = -80;
        if (p.centerY < -80) p.centerY = canvas.height + 80;

        const x = p.centerX + Math.cos(p.angle) * p.radius;
        const y = p.centerY + Math.sin(p.angle) * p.radius;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, 6.28);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.alpha * opacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [color, opacity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default SpiralLines;
