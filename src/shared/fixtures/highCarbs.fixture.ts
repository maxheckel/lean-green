import {Green} from '../models/green.model';

export function getHighCarbs(): Green[] {
  const highCarbs: Green[] = [];
  const halfCupGreens = [
    'broccoli',
    'red cabbage',
    'chayote squash',
    'cooked collard greens',
    'cooked mustard greens',
    'green beans',
    'wax beans',
    'kabocha squash',
    'kohlrabi',
    'cooked leeks',
    'okra',
    'peppers',
    'raw scallions',
    'crookneck squash',
    'straightneck squash',
    'tomatoes',
    'turnips',
    'spaghetti squash',
    'hearts of palm',
    'jicama',
    'cooked swiss chard'
  ];

  halfCupGreens.forEach((green) => {
    highCarbs.push(new Green({
      name: green,
      category: 'Higher Carbohydrate',
      cups: 0.5
    }));
  });
  return highCarbs;
}
