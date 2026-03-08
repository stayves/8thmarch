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
    '/Akku page/24thPhoto.jpg',
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
      greeting="Dearest Akku, you are the heart of our family and our everyday superhero. At home, you give us warmth, wisdom, and care; at work, as Director of Regulatory Affairs at Air Astana, you are strong, brilliant, and deeply respected. We admire your elegance, your values, and the way your love keeps all of us grounded."
      appreciation={[
        'At Air Astana, you handle difficult tariff disputes with remarkable confidence and intelligence. Watching your professionalism is truly inspiring.',
        'You are strong and fearless, yet always elegant. Even when you are a little spiky, your heart stays fair, honest, and full of dignity.',
        'Your love for family is endless. You support relatives with open hands and a generous heart, and you never let anyone feel alone.',
        'You bring care into everyday life — through your words, your presence, and all the small things that make our home feel safe and warm.',
        'You know how to recharge and enjoy life: swimming at Fitness Palace, traveling, and collecting beautiful memories with us.',
        'Your favorite dishes, fish and tom yum, are part of so many cozy moments together. With you, every meal feels special.',
      ]}
      qualities={[
        'Selfless',
        'Strong',
        'Professional',
        'Compassionate',
        'Wise',
        'Nurturing',
        'Patient',
        'Elegant',
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
          title: 'Strength in Every Battle',
          description:
            'Whether at home or in complex tariff disputes at work, you never back down from what is right. Your courage and clarity inspire all of us.',
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
          title: 'Our Elegant Superhero',
          description:
            'Today we see a woman of strength, values, and grace: a caring mother, a brilliant professional, and the loving center of our family.',
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
