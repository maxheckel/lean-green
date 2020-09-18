import {Lean} from '../models/lean.model';
import {getLeanObjsFromVals} from './lean.fixture';





export function getLeanerValues(): Lean[] {
  const lean = {
    Fish: [
     'swordfish',
      'trout',
      'halibut'
    ],
    Chicken: [
      'skinless breast',
      'skinless white meat',
    ],
    'Ground Turkey or Other Meat': [
      '95% - 97% lean',
    ],
    Turkey: [
      'light meat'
    ],
    Meatless: [
      '2 whole eggs plus 4 egg whites',
      '2 whole eggs plus 1 cup liquid egg substitute',
      '1 1/2 cups 2% cottage cheese',
      '12oz low fat plain greek yogurt'
    ]
  };
  const oz = 6;

  const fatServings = 1;
  const minTotalFat = 5;
  const maxTotalFat = 9;
  const leanVals = getLeanObjsFromVals(lean, oz, fatServings, minTotalFat, maxTotalFat);
  return leanVals;
}

