import { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import SpiralLines from '../components/SpiralLines';
import FloatingPetals from '../components/FloatingPetals';
import LifeRoadmap from '../components/LifeRoadmap';
import ImageWithFallback from '../components/ImageWithFallback';
import './PersonPage.css';

interface Milestone {
  year: string;
  title: string;
  description: string;
  emoji: string;
  photo?: string | string[];
}

interface PersonPageProps {
  name: string;
  role: string;
  theme: 'pink' | 'burgundy';
  avatarPhoto?: string | string[];
  roadmapPhotos?: (string | string[])[];
  roadmapSvgSrc?: string;
  scriptBackgroundSvg?: string;
  greeting: string;
  appreciation: string[];
  milestones: Milestone[];
  qualities: string[];
}

const WAVE_AMPLITUDE = 35;
const ROTATE_AMPLITUDE = 3;

function WavyCard({
  text,
  index,
  scrollYProgress,
  totalCards,
}: {
  text: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalCards: number;
}) {
  const y = useTransform(scrollYProgress, (p) => {
    const phase = (p * totalCards * Math.PI) + (index * Math.PI);
    return Math.sin(phase) * WAVE_AMPLITUDE;
  });

  const rotate = useTransform(scrollYProgress, (p) => {
    const phase = (p * totalCards * Math.PI) + (index * Math.PI) + 0.6;
    return Math.sin(phase) * ROTATE_AMPLITUDE;
  });

  const scale = useTransform(scrollYProgress, (p) => {
    const cardCenter = index / Math.max(totalCards - 1, 1);
    const dist = Math.abs(p - cardCenter);
    return 1 - dist * 0.08;
  });

  return (
    <motion.div
      className="appreciation-card-h"
      style={{ y, rotate, scale }}
    >
      <div className="card-h-accent" />
      <span className="card-h-number">{String(index + 1).padStart(2, '0')}</span>
      <p className="card-h-text">{text}</p>
      <span className="card-h-heart">&#9829;</span>
    </motion.div>
  );
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49979;
  return x - Math.floor(x);
}

function useScatterPositions(total: number) {
  return useMemo(() => {
    return Array.from({ length: total }, (_, index) => {
      const r = (n: number) => seededRandom(index * 7 + n);
      const angle = (index / total) * Math.PI * 2 + r(0) * 2;
      const distance = 300 + r(1) * 500;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance + (r(2) - 0.5) * 200,
        rotate: (r(3) - 0.5) * 60,
        scale: 0.2 + r(4) * 0.3,
      };
    });
  }, [total]);
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const avatarBackgroundFlowers = [
  '/flowers/169540844_e272a33b-9cbe-437f-928e-6cde018040a1.svg',
  '/flowers/169533013_ae763493-0309-4776-99af-f69d24ddce7d.svg',
  '/flowers/169536606_c7263fc8-9bb0-4d1c-95d2-858fba02daf0.svg',
  '/flowers/136486447_3ce9219e-ad2e-4b53-bf45-4c18eb37a87f.svg',
  '/flowers/136469537_b16c9e30-18cf-4d9c-b12a-73299d3180ec.svg',
];

const PersonPage: React.FC<PersonPageProps> = ({
  name,
  role,
  theme,
  avatarPhoto,
  roadmapPhotos,
  roadmapSvgSrc,
  scriptBackgroundSvg,
  greeting,
  appreciation,
  milestones,
  qualities,
}) => {
  const navigate = useNavigate();
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = appreciation.length;
  const x = useTransform(scrollYProgress, (p) => {
    const cardW = Math.min(420, window.innerWidth * 0.8);
    const gap = 32;
    const totalWidth = totalCards * cardW + (totalCards - 1) * gap;
    const maxShift = totalWidth - window.innerWidth + 80;
    return -p * Math.max(maxShift, 0);
  });

  const hintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scatterPositions = useScatterPositions(qualities.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const spiralColor =
    theme === 'pink'
      ? 'rgba(244, 143, 177, 0.12)'
      : 'rgba(109, 0, 53, 0.1)';

  const themeClass = theme === 'pink' ? 'theme-pink' : 'theme-burgundy';

  return (
    <div className={`person-page ${themeClass}`}>
      <SpiralLines color={spiralColor} />
      <FloatingPetals />

      <button className="back-button" onClick={() => navigate('/')}>
        <span className="back-arrow">←</span>
        <span>Back Home</span>
      </button>

      <header className="person-hero">
        <div className="hero-photo-wrapper">
          <div className="avatar-flowers-bg" aria-hidden="true">
            <div className="avatar-flowers-track avatar-flowers-track-left">
              {[...avatarBackgroundFlowers, ...avatarBackgroundFlowers].map((src, index) => (
                <img
                  key={`left-${src}-${index}`}
                  className="avatar-bg-flower"
                  src={src}
                  alt=""
                  loading="lazy"
                />
              ))}
            </div>
            <div className="avatar-flowers-track avatar-flowers-track-right">
              {[...avatarBackgroundFlowers, ...avatarBackgroundFlowers].map((src, index) => (
                <img
                  key={`right-${src}-${index}`}
                  className="avatar-bg-flower"
                  src={src}
                  alt=""
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <div className={`hero-photo ${theme}`}>
            <ImageWithFallback
              src={avatarPhoto}
              alt={`${name} avatar`}
              className="hero-photo-img"
              fallback={<span className="hero-photo-icon">{theme === 'pink' ? '👧' : '👩'}</span>}
            />
          </div>
          <div className="hero-photo-orbit">
            {['✿', '❀', '✾', '❁', '✿', '❀'].map((flower, i) => (
              <span
                key={i}
                className="orbit-flower"
                style={{
                  '--i': i,
                  '--total': 6,
                } as React.CSSProperties}
              >
                {flower}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-name-wrap">
          {scriptBackgroundSvg ? (
            <div
              className="hero-script-bg"
              style={{
                backgroundImage: `url("${encodeURI(scriptBackgroundSvg)}")`,
              }}
              aria-hidden="true"
            />
          ) : null}
          <h1 className="script-font hero-name">{name}</h1>
        </div>
        <p className="hero-role">{role}</p>
        <p className="hero-greeting">{greeting}</p>
      </header>

      <section
        className="appreciation-scroll-outer"
        ref={scrollSectionRef}
        style={{ height: `${totalCards * 55 + 100}vh` }}
      >
        <div className="appreciation-sticky">
          <h2 className="script-font section-title appreciation-title">
            Why We Love You
          </h2>
          <div className="appreciation-track-wrapper">
            <motion.div className="appreciation-track" style={{ x }}>
              {appreciation.map((text, i) => (
                <WavyCard
                  key={i}
                  text={text}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  totalCards={totalCards}
                />
              ))}
            </motion.div>
          </div>
          <motion.div className="scroll-hint" style={{ opacity: hintOpacity }}>
            <span className="scroll-hint-text">Scroll to explore</span>
            <span className="scroll-hint-arrow">&darr;</span>
          </motion.div>
        </div>
      </section>

      <section className="qualities-section">
        <h2 className="script-font section-title">Your Beautiful Qualities</h2>
        <motion.div
          className="qualities-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {qualities.map((q, i) => {
            const s = scatterPositions[i];
            return (
              <motion.div
                key={i}
                className="quality-item"
                variants={{
                  hidden: {
                    x: s.x,
                    y: s.y,
                    rotate: s.rotate,
                    scale: s.scale,
                    opacity: 0,
                  },
                  visible: {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 40,
                      damping: 12,
                    },
                  },
                }}
              >
                <span className="quality-star">✦</span>
                <span>{q}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="roadmap-section">
        <h2 className="script-font section-title">Our Journey Together</h2>
        <LifeRoadmap
          milestones={milestones}
          theme={theme}
          roadmapPhotos={roadmapPhotos}
          roadmapSvgSrc={roadmapSvgSrc}
        />
      </section>

      <footer className="person-footer">
        <div className="footer-hearts">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="footer-heart"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              ♥
            </span>
          ))}
        </div>
        <div className="footer-message-wrap">
          <div className="footer-flowers-bg" aria-hidden="true">
            <div className="footer-flowers-track footer-flowers-track-left">
              {[...avatarBackgroundFlowers, ...avatarBackgroundFlowers].map((src, index) => (
                <img
                  key={`footer-left-${src}-${index}`}
                  className="footer-bg-flower"
                  src={src}
                  alt=""
                  loading="lazy"
                />
              ))}
            </div>
            <div className="footer-flowers-track footer-flowers-track-right">
              {[...avatarBackgroundFlowers, ...avatarBackgroundFlowers].map((src, index) => (
                <img
                  key={`footer-right-${src}-${index}`}
                  className="footer-bg-flower"
                  src={src}
                  alt=""
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <p className="script-font footer-message">
            We love you forever, {name}!
          </p>
        </div>
        <p className="footer-date">March 8th, 2026</p>
      </footer>
    </div>
  );
};

export default PersonPage;
