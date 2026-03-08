import { useEffect, useRef } from 'react';

interface CursorPixelsProps {
  colors?: string[];
}

const DEFAULT_COLORS = [
  '#f48fb1',
  '#ec407a',
  '#f8bbd0',
  '#d81b60',
  '#fce4ec',
  '#f06292',
];

const MAX_PARTICLES = 80;

const CursorPixels: React.FC<CursorPixelsProps> = ({ colors = DEFAULT_COLORS }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    particles: [] as {
      x: number;
      y: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      vx: number;
      vy: number;
      isSquare: boolean;
    }[],
    mouseX: 0,
    mouseY: 0,
    active: false,
    lastSpawn: 0,
    frame: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    if (dpr > 2) dpr = 2;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      stateRef.current.mouseX = e.clientX;
      stateRef.current.mouseY = e.clientY;
      stateRef.current.active = true;
    };
    const onLeave = () => { stateRef.current.active = false; };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    const s = stateRef.current;

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const now = performance.now();
      if (s.active && now - s.lastSpawn > 50 && s.particles.length < MAX_PARTICLES) {
        for (let j = 0; j < 2; j++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 1.2 + 0.2;
          const life = 30 + Math.random() * 25;
          s.particles.push({
            x: s.mouseX + (Math.random() - 0.5) * 16,
            y: s.mouseY + (Math.random() - 0.5) * 16,
            size: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            life,
            maxLife: life,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            isSquare: Math.random() > 0.5,
          });
        }
        s.lastSpawn = now;
      }

      let writeIdx = 0;
      for (let i = 0; i < s.particles.length; i++) {
        const p = s.particles[i];
        p.life--;
        if (p.life <= 0) continue;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.97;
        p.vy *= 0.97;

        const alpha = (p.life / p.maxLife) * 0.6;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;

        if (p.isSquare) {
          ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, 6.28);
          ctx.fill();
        }

        s.particles[writeIdx++] = p;
      }
      s.particles.length = writeIdx;
      ctx.globalAlpha = 1;

      s.frame = requestAnimationFrame(animate);
    };

    s.frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(s.frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default CursorPixels;
