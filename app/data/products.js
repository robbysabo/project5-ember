/* eslint-disable prettier/prettier */
export const products = [
  {
    id: '1',
    name: 'Raycon Everyday Headphones',
    description:
      'With up to 38 hours of battery life, Raycon Everyday is your perfect everyday headphone',
    price: {
      original: 199.95,
      current: 99.98,
    },
    features: [
      'Advanced Active Noise Cancellation, helps you tune out the noise.',
      'Awareness mode: Hear the world around you.',
      'IPX5 Water and Splash resistance',
      '3 Sound Profiles for a personalized listening experience.',
      '6 Built in microphones for crystal clear phone calls.',
      '38 Hours of battery life',
    ],
    colors: [
      {
        color: 'black',
        image: '/project5-ember/assets/images/Raycon_Everyday_black.jpg',
      },
      {
        color: 'white',
        image: '/project5-ember/assets/images/Raycon_Everyday_white.jpg',
      },
      {
        color: 'rosegold',
        image: '/project5-ember/assets/images/Raycon_Everyday_rosegold.jpg',
      },
    ],
  },
  {
    id: '2',
    name: 'Nike Aire Force 1',
    description:
      'Debuting in 1982, the AF1 was the first basketball shoe to house Nike Air, revolutionizing the game while rapidly gaining traction around the world.',
    price: {
      original: 109.95,
      current: 89.98,
    },
    features: [
      'Full-grain leather in the upper adds a premium look and feel.',
      'Originally designed for performance hoops, Nike Air cushioning adds lightweight, all-day comfort.',
      'The padded, low-cut collar looks sleek and feels great.',
    ],
    colors: [
      {
        color: 'white',
        image: '/project5-ember/assets/images/nike-af1-white.png',
      },
    ],
  },
];
