import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SpiralLines from '../components/SpiralLines';
import FloatingPetals from '../components/FloatingPetals';
import ImageWithFallback from '../components/ImageWithFallback';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  const leftPhotoRef = useRef<HTMLDivElement>(null);
  const rightPhotoRef = useRef<HTMLDivElement>(null);

  const handlePhotoMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const tiltX = y * -20;
      const tiltY = x * 20;
      el.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.08)`;
    },
    []
  );

  const handlePhotoMouseLeave = useCallback(
    (ref: React.RefObject<HTMLDivElement | null>) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    },
    []
  );

  return (
    <div className="home">
      <SpiralLines color="rgba(236, 64, 122, 0.12)" />
      <FloatingPetals />

      <header className="home-header">
        <h1 className="script-font main-title">Happy March 8th!</h1>
        <p className="subtitle">A celebration of the most wonderful women in our lives</p>
        <div className="title-decoration">
          <span className="deco-line left" />
          <span className="deco-flower">✿</span>
          <span className="deco-line right" />
        </div>
      </header>

      <main className="home-split">
        <section
          className={`split-side left ${hoveredSide === 'left' ? 'hovered' : ''} ${hoveredSide === 'right' ? 'dimmed' : ''}`}
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => navigate('/dariya')}
        >
          <div className="side-content">
            <div className="photo-wrapper pink">
              <div
                className="photo-frame"
                ref={leftPhotoRef}
                onMouseMove={(e) => handlePhotoMouseMove(e, leftPhotoRef)}
                onMouseLeave={() => handlePhotoMouseLeave(leftPhotoRef)}
              >
                <div className="photo-placeholder pink-photo">
                  <ImageWithFallback
                    src="/Dariya page/Avatar.jpg"
                    alt="Dariya avatar"
                    className="home-avatar-img"
                    fallback={(
                      <>
                        <span className="photo-icon">👧</span>
                        <span className="photo-hint">Dariya</span>
                      </>
                    )}
                  />
                </div>
                <div className="photo-shimmer" />
                <div className="photo-glow pink-glow" />
              </div>
              <div className="photo-rings">
                <div className="ring ring-1" />
                <div className="ring ring-2" />
                <div className="ring ring-3" />
              </div>
              <div className="photo-particles">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className="particle"
                    style={{ '--p-i': i, '--p-total': 8 } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
            <h2 className="script-font person-name pink-text">Dariya</h2>
            <p className="person-title">Our Lovely Sister & Daughter</p>
            <div className="click-hint">
              <span className="hint-arrow">→</span>
              <span>Click to see her story</span>
            </div>
          </div>
        </section>

        <div className="split-divider">
          <div className="divider-line" />
          <span className="divider-heart">♥</span>
          <div className="divider-line" />
        </div>

        <section
          className={`split-side right ${hoveredSide === 'right' ? 'hovered' : ''} ${hoveredSide === 'left' ? 'dimmed' : ''}`}
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => navigate('/akku')}
        >
          <div className="side-content">
            <div className="photo-wrapper burgundy">
              <div
                className="photo-frame"
                ref={rightPhotoRef}
                onMouseMove={(e) => handlePhotoMouseMove(e, rightPhotoRef)}
                onMouseLeave={() => handlePhotoMouseLeave(rightPhotoRef)}
              >
                <div className="photo-placeholder burgundy-photo">
                  <ImageWithFallback
                    src="/Akku page/Avatar.jpg"
                    alt="Akku avatar"
                    className="home-avatar-img"
                    fallback={(
                      <>
                        <span className="photo-icon">👩</span>
                        <span className="photo-hint">Akku</span>
                      </>
                    )}
                  />
                </div>
                <div className="photo-shimmer" />
                <div className="photo-glow burgundy-glow" />
              </div>
              <div className="photo-rings">
                <div className="ring ring-1" />
                <div className="ring ring-2" />
                <div className="ring ring-3" />
              </div>
              <div className="photo-particles">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className="particle"
                    style={{ '--p-i': i, '--p-total': 8 } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
            <h2 className="script-font person-name burgundy-text">Akku</h2>
            <p className="person-title">Our Lovely Mom & Wife</p>
            <div className="click-hint">
              <span className="hint-arrow">→</span>
              <span>Click to see her story</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
