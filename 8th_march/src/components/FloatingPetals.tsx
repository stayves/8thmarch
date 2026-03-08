import { useEffect, useRef } from 'react';

const FloatingPetals: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const petals: HTMLDivElement[] = [];

    for (let i = 0; i < 12; i++) {
      const petal = document.createElement('div');
      const size = Math.random() * 12 + 8;
      const startX = Math.random() * 100;
      const duration = Math.random() * 8 + 12;
      const delay = Math.random() * 12;
      const hue = Math.random() > 0.5 ? '340' : '350';
      const sat = Math.random() * 20 + 60;
      const light = Math.random() * 20 + 70;

      Object.assign(petal.style, {
        position: 'fixed',
        width: `${size}px`,
        height: `${size * 0.6}px`,
        backgroundColor: `hsla(${hue}, ${sat}%, ${light}%, 0.35)`,
        borderRadius: '50% 0 50% 0',
        left: `${startX}%`,
        top: '-20px',
        zIndex: '2',
        pointerEvents: 'none',
        animation: `petalFall ${duration}s linear ${delay}s infinite`,
        transform: `rotate(${Math.random() * 360}deg)`,
        willChange: 'transform',
      });

      container.appendChild(petal);
      petals.push(petal);
    }

    return () => {
      petals.forEach((p) => p.remove());
    };
  }, []);

  return <div ref={containerRef} />;
};

export default FloatingPetals;
