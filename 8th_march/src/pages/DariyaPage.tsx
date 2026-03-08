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
      greeting="Dear Dariya, you are the light that fills our home with joy and laughter. Your smile brightens even the cloudiest days, and your kindness makes the world a better place. Today we celebrate you — our wonderful sister, our precious daughter, our little sunshine."
      appreciation={[
        'Your laughter is the most beautiful melody in our home. Every time you giggle, the whole house lights up with warmth and happiness.',
        'You have the biggest heart we know. The way you care about everyone around you — your family, your friends, even strangers — shows what a beautiful soul you are.',
        'Your curiosity and eagerness to learn inspire us every single day. Watching you grow and discover the world is one of our greatest joys.',
        'You bring our family closer together. You are the bond that connects us all, and our love for you unites us in the most beautiful way.',
        'Your creativity and imagination know no bounds. The drawings, the stories, the ideas — they remind us to see magic in everyday life.',
        'You make us want to be better people. Your innocence and pure heart remind us what truly matters in this world.',
      ]}
      qualities={[
        'Kind-hearted',
        'Creative',
        'Joyful',
        'Curious',
        'Brave',
        'Caring',
        'Smart',
        'Playful',
        'Loving',
        'Inspiring',
        'Thoughtful',
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
          title: 'First Day of School',
          description:
            'With your little backpack and the biggest smile, you walked into school ready to conquer the world. We were so proud (and maybe cried a little).',
          emoji: '🎒',
        },
        {
          year: 'Discovery',
          title: 'Finding Your Passions',
          description:
            'Watching you discover what makes your heart sing — your hobbies, your talents, your dreams. Every new passion makes us love you even more.',
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
          title: 'The Amazing Person You Are',
          description:
            'Look at how far you have come! You fill every room with sunshine and make everyone around you happier. We are endlessly proud of you.',
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
