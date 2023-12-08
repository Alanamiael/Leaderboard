import { AvatarsProps } from '@ts/interfaces';

export const avatars: AvatarsProps[] = [
  {
    src: 'https://i.pinimg.com/736x/7e/5c/c0/7e5cc007e3eeff9628a704003fc91620.jpg',
    name: 'Wolfchan',
  },
  {
    src: 'https://i.pinimg.com/736x/8c/50/20/8c5020bbaccde1164968fc7aee4a88b4.jpg',
    name: 'Leebit',
  },
  {
    src: 'https://i.pinimg.com/736x/56/b5/d8/56b5d8c9f9a2488c556f41ec48ecaf1e.jpg',
    name: 'Dwekki',
  },
  {
    src: 'https://i.pinimg.com/736x/96/04/41/960441d5590fce9ec03c5c9326865085.jpg',
    name: 'Jiniret',
  },
  {
    src: 'https://i.pinimg.com/736x/9f/b1/06/9fb106fb2de658e409558ab2a1e80d76.jpg',
    name: 'HanQuokka',
  },
  {
    src: 'https://i.pinimg.com/736x/a1/0b/61/a10b61cb3cf682b2c9e51aba26e077f3.jpg',
    name: 'Bbokari',
  },
  {
    src: 'https://i.pinimg.com/736x/26/80/93/2680934fe333e71656fc1b2c83da7161.jpg',
    name: 'PuppyM',
  },
  {
    src: 'https://i.pinimg.com/736x/cf/7b/31/cf7b31f58738ba2491becb49729f2447.jpg',
    name: 'FoxiNy',
  },
];

export const place = (index: number) => {
  switch (index) {
    case 0:
      return `${index + 1}st`;
    case 1:
      return `${index + 1}nd`;
    case 2:
      return `${index + 1}rd`;
    default:
      return `${index + 1}th`;
  }
};
