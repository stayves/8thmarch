import PersonPage from './PersonPage';

const AKKU_PAGE_PHOTOS = {
  avatar: '/Akku page/Avatar.jpg',
  roadmap: [
    '/Akku page/1stPhoto.jpg',
    '/Akku page/2ndPhoto.jpg',
    '/Akku page/between2and3Photo.jpg',
    '/Akku page/3rdPhoto.jpg',
    '/Akku page/4thPhoto.jpg',
    '/Akku page/5thPhoto.jpg',
    '/Akku page/6thPhoto.jpg',
    '/Akku page/7thPhoto.jpg',
    '/Akku page/8thPhoto.jpg',
    '/Akku page/9thPhoto.jpg',
    '/Akku page/10thPhoto.jpg',
    '/Akku page/11thPhoto.jpg',
    '/Akku page/12thPhoto.jpg',
    '/Akku page/13thPhoto.jpg',
    '/Akku page/14thPhoto.jpg',
    '/Akku page/15thPhoto.jpg',
    '/Akku page/16thPhoto.jpg',
    '/Akku page/17thPhoto.jpg',
    '/Akku page/18thPhoto.jpg',
    '/Akku page/19thPhoto.jpg',
    '/Akku page/20thPhoto.jpg',
    '/Akku page/21stPhoto.jpg',
    '/Akku page/22thPhoto.jpg',
    '/Akku page/23thPhoto.jpg',
  ],
};

const AkkuPage: React.FC = () => {
  return (
    <PersonPage
      name="Akku"
      role="Our Lovely Mom & Wife"
      theme="burgundy"
      avatarPhoto={AKKU_PAGE_PHOTOS.avatar}
      roadmapPhotos={AKKU_PAGE_PHOTOS.roadmap}
      roadmapSvgSrc="/Akku Line new.svg"
      scriptBackgroundSvg="/flowers/Akku nice script.svg"
      greeting="Dearest Akku, you are the heart and soul of our family. Your love is the foundation upon which our happiness is built. Your strength inspires us, your tenderness heals us, and your wisdom guides us. Today and every day, we celebrate the incredible woman you are."
      appreciation={[
        'Your unconditional love is the greatest gift we have ever received. No matter what happens, we know we can always count on your warm embrace and loving words.',
        'You sacrifice so much for our family without ever asking for anything in return. The meals you cook, the nights you stay up, the worries you carry — we see it all and are grateful beyond words.',
        'Your strength is extraordinary. You hold our family together through every challenge, every storm, and every difficult moment. You are our rock.',
        'The way you believe in each of us gives us the confidence to chase our dreams. Your faith in us makes us believe we can do anything.',
        'You have the most beautiful heart. Your compassion, your patience, your generosity — they make our home the warmest place on earth.',
        'You taught us what love truly means. Not just in words, but in every action, every sacrifice, every moment you dedicate to making our lives beautiful.',
      ]}
      qualities={[
        'Selfless',
        'Strong',
        'Compassionate',
        'Wise',
        'Nurturing',
        'Patient',
        'Beautiful',
        'Graceful',
        'Resilient',
        'Loving',
        'Devoted',
        'Irreplaceable',
      ]}
      milestones={[
        {
          year: 'The Beginning',
          title: 'Where It All Started',
          description:
            'The day our family story began. You brought love and meaning into our lives, and nothing has been the same since.',
          emoji: '💝',
        },
        {
          year: 'Building',
          title: 'Creating Our Home',
          description:
            'With your hands and your heart, you built more than a house — you created a home filled with love, warmth, and the smell of delicious food.',
          emoji: '🏡',
        },
        {
          year: 'Motherhood',
          title: 'Becoming Our Mom',
          description:
            'The day you became a mother, the world gained its most dedicated protector and nurturer. You gave us life, and you gave that life meaning.',
          emoji: '👩‍👧‍👦',
        },
        {
          year: 'Every Day',
          title: 'The Everyday Hero',
          description:
            'Every morning you wake up and choose to give your best to this family. The breakfasts, the school runs, the hugs — these "small" things are everything to us.',
          emoji: '☀️',
        },
        {
          year: 'Challenges',
          title: 'Standing Strong Together',
          description:
            'Through every difficult time, you never wavered. Your courage and determination showed us what true strength looks like.',
          emoji: '💪',
        },
        {
          year: 'Celebrations',
          title: 'Our Happiest Moments',
          description:
            'Every birthday, every holiday, every family gathering — you are the one who makes them magical. Our happiest memories all have you at the center.',
          emoji: '🎉',
        },
        {
          year: 'Today',
          title: 'The Woman We Admire',
          description:
            'Today you are more beautiful, more strong, and more amazing than ever. We look at you and see everything we aspire to be.',
          emoji: '👑',
        },
        {
          year: 'Forever',
          title: 'Our Eternal Love',
          description:
            'If we had a thousand lifetimes, we would choose you in every single one. You are our everything, today and forever.',
          emoji: '♾️',
        },
      ]}
    />
  );
};

export default AkkuPage;
