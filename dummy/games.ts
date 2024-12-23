import {ImageSourcePropType} from 'react-native';

interface gameInterface {
  title: string;
  image: ImageSourcePropType;
  url: string;
  genres: string[];
}
export const games: gameInterface[] = [
  {
    title: 'Limitless Lanes',
    image: require('@/dummy/games/limitless.png'),
    url: 'https://arcade.prism.ai/games/limitlessLanes',
    genres: ['arcade', 'racing'],
  },
  {
    title: 'Merge Master',
    image: require('@/dummy/games/merge.png'),
    url: 'https://arcade.prism.ai/games/mergeMaster',
    genres: ['puzzle'],
  },
  {
    title: 'Silent Strike',
    image: require('@/dummy/games/strike.png'),
    url: 'https://arcade.prism.ai/games/silentStrike',
    genres: ['arcade', 'shooter'],
  },
  {
    title: 'Helix Leap',
    image: require('@/dummy/games/helix.png'),
    url: 'https://arcade.prism.ai/games/helixLeap',
    genres: ['platformer'],
  },
  {
    title: 'Roll n Push',
    image: require('@/dummy/games/roll.png'),
    url: 'https://arcade.prism.ai/games/rollNPush',
    genres: ['fighters'],
  },
  {
    title: 'Flex Escape',
    image: require('@/dummy/games/flex.png'),
    url: 'https://arcade.prism.ai/games/flexEscape',
    genres: ['sports'],
  },
  {
    title: 'Watermelon Game',
    image: require('@/dummy/games/water.png'),
    url: 'https://arcade.prism.ai/games/watermelonGame',
    genres: ['puzzle'],
  },
  {
    title: 'Draw Smash',
    image: require('@/dummy/games/draw.png'),
    url: 'https://arcade.prism.ai/games/drawSmash',
    genres: ['puzzle'],
  },
  {
    title: 'Cat Sort',
    image: require('@/dummy/games/cat.png'),
    url: 'https://arcade.prism.ai/games/catSort',
    genres: ['puzzle'],
  },
];
// interface gameInterface {
//   title: string;
//   image: string;
//   url: string;
//   genres: string[];
// }
// export const games: gameInterface[] = [
//   {
//     title: 'Limitless Lanes',
//     image: 'https://arcade.prism.ai/arcade/games/limitlessLanes/thumbnail.png',
//     url: 'https://arcade.prism.ai/games/limitlessLanes',
//     genres: ['arcade', 'racing'],
//   },
//   {
//     title: 'Merge Master',
//     image: 'https://arcade.prism.ai/arcade/games/mergeMaster/thumbnail.png',
//     url: 'https://arcade.prism.ai/games/mergeMaster',
//     genres: ['puzzle'],
//   },
//   {
//     title: 'Silent Strike',
//     image: 'https://arcade.prism.ai/arcade/games/silentStrike/thumbnail.png',
//     url: 'https://arcade.prism.ai/games/silentStrike',
//     genres: ['arcade', 'shooter'],
//   },
//   {
//     title: 'Helix Leap',
//     image: 'https://arcade.prism.ai/arcade/games/helixLeap/thumbnail.png',
//     url: 'https://arcade.prism.ai/games/helixLeap',
//     genres: ['platformer'],
//   },
//   {
//     title: 'Roll n Push',
//     image: 'https://arcade.prism.ai/arcade/games/rollNPush/thumbnail.png',
//     url: 'https://arcade.prism.ai/games/rollNPush',
//     genres: ['fighters'],
//   },
//   {
//     title: 'Flex Escape',
//     image: 'https://arcade.prism.ai/arcade/games/flexEscape/thumbnail.png',
//     url: 'https://arcade.prism.ai/games/flexEscape',
//     genres: ['sports'],
//   },
//   {
//     title: 'Watermelon Game',
//     image: 'https://arcade.prism.ai/arcade/games/watermelonGame/thumbnail.png',
//     url: 'https://arcade.prism.ai/games/watermelonGame',
//     genres: ['puzzle'],
//   },
//   {
//     title: 'Draw Smash',
//     image: 'https://arcade.prism.ai/arcade/games/drawSmash/thumbnail.png',
//     url: 'https://arcade.prism.ai/games/drawSmash',
//     genres: ['puzzle'],
//   },
//   {
//     title: 'Cat Sort',
//     image: 'https://arcade.prism.ai/arcade/games/catSort/thumbnail.png',
//     url: 'https://arcade.prism.ai/games/catSort',
//     genres: ['puzzle'],
//   },
// ];
