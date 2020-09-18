import {Green} from '../models/green.model';

export function getModerateCarbs(): Green[] {
  const modCarbs: Green[] = [];
  const halfCupGreens = [
    'asparagus',
    'cabbage',
    'cauliflower',
    'eggplant',
    'fennel bulb',
    'kale',
    'portabella mushroom',
    'cooked spinach',
    'scallop squash',
    'zucchini'
  ];

  halfCupGreens.forEach((green) => {
    modCarbs.push(new Green({
      name: green,
      category: 'Moderate Carbohydrate',
      cups: 0.5
    }));
  });
  return modCarbs;
}
