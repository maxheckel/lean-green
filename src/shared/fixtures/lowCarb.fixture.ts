import {Green} from '../models/green.model';

export function getLowCarbs(): Green[] {
  const oneCupGreens = [
    'collards',
    'endive',
    'green leaf lettuce',
    'butterhead lettuce',
    'iceberg lettuce',
    'romaine lettuce',
    'mustard greens',
    'spinach',
    'spring mix',
    'watercress',
    'raw bok choy'
  ];
  const lowCarbs: Green[] = [];
  oneCupGreens.forEach((green) => {
    lowCarbs.push(new Green({
      name: green,
      category: 'Lower Carbohydrate',
      cups: 1
    }));
  });
  const halfCupGreens = [
    'celery',
    'cucumber',
    'white mushrooms',
    'radish',
    'alfalfa sprouts',
    'mung bean sprouts',
    'turnip greens',
    'arugula',
    'nopales',
    'escarole',
    'jalepeno',
    'swiss chard',
    'cooked bok choy'
  ];

  halfCupGreens.forEach((green) => {
    lowCarbs.push(new Green({
      name: green,
      category: 'Lower Carbohydrate',
      cups: 0.5
    }));
  });
  return lowCarbs;
}
