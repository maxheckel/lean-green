import {Lean, LeanCategory} from '../models/lean.model';

import {getLeanerValues} from './leaner.fixture';
import {getLeanestValues} from './leanest.fixture';


export function getLeanObjsFromVals(lean, oz: number, fatServings: number, minTotalFat: number, maxTotalFat: number): Lean[] {
  const leanVals: Lean[] = [];
  Object.keys(lean).forEach((val) => {
    lean[val].forEach((catVal) => {

      leanVals.push(new Lean({
        type: val,
        category: 'Lean',
        name: catVal,
        oz,
        fatServings,
        minTotalFat,
        maxTotalFat
      }));
    });
  });
  return leanVals;
}


export function getLeanValues(): Lean[] {
  const lean = {
    Fish: [
      'salmon',
      'tuna',
      'farmed catfish',
    ],
    'Lean Beef': [
      'steak',
      'roast',
      'ground'
    ],
    Lamb: [
      'lamb',
    ],
    Pork: [
      'tenderloin',
      'chop'
    ],
    'Ground Turkey or Other Meat': [
      '85% - 94% lean'
    ],
    Chicken: [
      'dark meat'
    ],
    Turkey: [
      'dark meat'
    ],
    Meatless: [
      '15oz extra firm tofu',
      '3 whole eggs',
      '4oz reduced fat or part skim cheese',
      '8oz part-skim ricotta cheese',
      '5oz tempeh'
    ]
  };
  const oz = 5;

  const fatServings = 0;
  const minTotalFat = 10;
  const maxTotalFat = 20;
  const leanVals = getLeanObjsFromVals(lean, oz, fatServings, minTotalFat, maxTotalFat);
  return leanVals;
}
