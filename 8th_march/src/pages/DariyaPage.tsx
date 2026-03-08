import PersonPage from './PersonPage';

const DARIYA_PAGE_PHOTOS = {
  avatar: '/Dariya page/Avatar.jpg',
  roadmap: [
    '/Dariya page/1stPhoto.jpg',
    '/Dariya page/2ndPhoto.jpg',
    '/Dariya page/3rdPhoto.jpg',
    '/Dariya page/4thPhoto.jpg',
    '/Dariya page/5thPhoto.jpg',
    '/Dariya page/6thPhoto.jpg',
    '/Dariya page/7thPhoto.jpg',
    '/Dariya page/8thPhoto.jpg',
    '/Dariya page/9thPhoto.jpg',
    '/Dariya page/10thPhoto.jpg',
    '/Dariya page/11thPhoto.jpg',
    '/Dariya page/12thPhoto.jpg',
    '/Dariya page/13thPhoto.jpg',
    '/Dariya page/14thPhoto.jpg',
    '/Dariya page/15thPhoto.jpg',
    '/Dariya page/16thPhoto.jpg',
    '/Dariya page/17thPhoto.jpg',
    '/Dariya page/18thPhoto.jpg',
    '/Dariya page/19thPhoto.jpg',
    '/Dariya page/20thPhoto.jpg',
    '/Dariya page/21thPhoto.jpg',
    '/Dariya page/22thPhoto.jpg',
    '/Dariya page/23thPhoto.jpg',
    '/Dariya page/24thPhoto.jpg',
    '/Dariya page/25thPhoto.jpg',
    '/Dariya page/26thPhoto.jpg',
    '/Dariya page/27thPhoto.jpg',
    '/Dariya page/28thPhoto.jpg',
    '/Dariya page/29thPhoto.jpg',
    '/Dariya page/30thPhoto.jpg',
  ],
};

const DariyaPage: React.FC = () => {
  return (
    <PersonPage
      name="Dariya"
      role="Our Lovely Sister & Daughter"
      theme="pink"
      avatarPhoto={DARIYA_PAGE_PHOTOS.avatar}
      roadmapPhotos={DARIYA_PAGE_PHOTOS.roadmap}
      roadmapSvgSrc="/Dariya line.svg"
      scriptBackgroundSvg="/flowers/Dariya script.svg"
      greeting="Dear Dariya, our bright and beautiful girl, you fill our home with laughter, tenderness, and endless energy. We are so proud of how you are growing in 7th grade at NIS IB School, how bravely you train in gymnastics and artistic pursuits, and how eagerly you keep learning new things. You have such a kind heart, and your love for Laki shows how gentle and caring you are."
      appreciation={[
        'You are so dedicated to your studies. Even when you feel tired, you keep going and show us what real discipline looks like.',
        'Your curiosity is one of your greatest gifts. You are always ready to explore, ask questions, and learn something new.',
        'Watching you in gymnastics and artistic classes is pure joy. Your focus, grace, and creativity are truly special.',
        'You have a warm and loving heart. The way you care for Laki and everyone around you shows your beautiful soul.',
        'Your sense of style makes you uniquely you. Your love for Louis Vuitton and Dior always comes with confidence and sparkle.',
        'You bring light into every room. Our family is happier, closer, and more complete because of you.',
      ]}
      qualities={[
        'Kind-hearted',
        'Curious learner',
        'Disciplined',
        'Creative',
        'Graceful',
        'Brave',
        'Caring',
        'Stylish',
        'Joyful',
        'Thoughtful',
        'Loving',
        'Beautiful inside and out',
      ]}
      milestones={[
        {
          year: 'The Beginning',
          title: 'The Day You Were Born',
          description:
            'The most magical day of our lives. You came into this world and everything changed for the better. Our family became complete.',
          emoji: '👶',
        },
        {
          year: 'First Steps',
          title: 'Your First Steps',
          description:
            'We remember how you took your first brave steps, stumbling and giggling. That was the moment we knew — you would go far in life.',
          emoji: '👣',
        },
        {
          year: 'Growing Up',
          title: 'NIS IB Chapter',
          description:
            'Seeing you study in 7th grade at NIS IB School makes us incredibly proud. You work hard, stay focused, and keep surprising us with your growth.',
          emoji: '🎒',
        },
        {
          year: 'Discovery',
          title: 'Gymnastics & Art',
          description:
            'You discovered passions that let your spirit shine: gymnastics and artistic activities. Every class shows your dedication, creativity, and courage.',
          emoji: '⭐',
        },
        {
          year: 'Together',
          title: 'Our Family Adventures',
          description:
            'All the trips, the celebrations, the lazy Sundays together. Every moment with you is a treasure we hold dear in our hearts.',
          emoji: '🏠',
        },
        {
          year: 'Today',
          title: 'Your Bright Heart',
          description:
            'You are growing into a smart, kind, and determined young lady. You dream big, work hard, adore Laki, and make everyone around you feel loved.',
          emoji: '🌟',
        },
        {
          year: 'Forever',
          title: 'Our Love For You',
          description:
            'No matter where life takes you, no matter how much you grow, you will always be our little Dariya. Our love for you is infinite and unconditional.',
          emoji: '💕',
        },
      ]}
    />
  );
};

export default DariyaPage;
